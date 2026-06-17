"""Bearer-token authentication middleware for /mcp/* paths.

Accepts either the pre-shared WILLYS_MCP_TOKEN (atlas-internal callers)
or any token in the OAuth-issued-token store (Claude.ai callers).
"""
from __future__ import annotations

import hmac
import json
import os
import tempfile
import time
from pathlib import Path

from starlette.middleware.base import BaseHTTPMiddleware
from starlette.responses import JSONResponse


class TokenStore:
    """Store for OAuth-issued bearer tokens. Optionally backed by a JSON file
    so tokens survive daemon restarts — without persistence, every restart
    forces the user to re-authorize their Claude.ai connector."""

    def __init__(self, persist_path: str | os.PathLike | None = None, ttl_seconds: float | None = None):
        self._tokens: dict[str, float] = {}
        self._ttl = ttl_seconds
        self._path: Path | None = Path(persist_path) if persist_path else None
        self._load()

    def add(self, token: str) -> None:
        self._tokens[token] = time.time()
        self._save()

    def has(self, token: str) -> bool:
        ts = self._tokens.get(token)
        if ts is None:
            return False
        if self._ttl is not None and (time.time() - ts) > self._ttl:
            self.remove(token)
            return False
        return True

    def remove(self, token: str) -> None:
        if self._tokens.pop(token, None) is not None:
            self._save()

    def _load(self) -> None:
        if not self._path or not self._path.exists():
            return
        try:
            data = json.loads(self._path.read_text())
            if isinstance(data, dict):
                self._tokens = {str(k): float(v) for k, v in data.items()}
                if self._ttl is not None:
                    cutoff = time.time() - self._ttl
                    self._tokens = {k: v for k, v in self._tokens.items() if v >= cutoff}
        except (json.JSONDecodeError, ValueError, OSError):
            pass  # corrupt file → start empty, will be overwritten on next add

    def _save(self) -> None:
        if not self._path:
            return
        self._path.parent.mkdir(parents=True, exist_ok=True)
        # Atomic write: tmp then rename, so a crash mid-write can't corrupt the file
        fd, tmp_name = tempfile.mkstemp(dir=str(self._path.parent), prefix=".tokens.", suffix=".tmp")
        try:
            with os.fdopen(fd, "w") as f:
                json.dump(self._tokens, f)
            os.chmod(tmp_name, 0o600)
            os.replace(tmp_name, self._path)
        except Exception:
            try:
                os.unlink(tmp_name)
            except OSError:
                pass
            raise


class BearerAuthMiddleware(BaseHTTPMiddleware):
    def __init__(self, app, static_token: str, token_store: TokenStore):
        super().__init__(app)
        if not static_token:
            raise ValueError("static_token (WILLYS_MCP_TOKEN) is required")
        self._static_token = static_token
        self._store = token_store

    async def dispatch(self, request, call_next):
        if not request.url.path.startswith("/mcp"):
            return await call_next(request)

        auth = request.headers.get("Authorization", "")
        if not auth.startswith("Bearer "):
            return self._unauthorized("missing bearer token")
        token = auth[len("Bearer ") :].strip()
        if not self._is_valid(token):
            return self._unauthorized("invalid bearer token")
        return await call_next(request)

    def _is_valid(self, token: str) -> bool:
        if hmac.compare_digest(token, self._static_token):
            return True
        return self._store.has(token)

    @staticmethod
    def _unauthorized(reason: str) -> JSONResponse:
        return JSONResponse(
            {"error": "unauthorized", "reason": reason},
            status_code=401,
            headers={"WWW-Authenticate": 'Bearer realm="willys-mcp"'},
        )
