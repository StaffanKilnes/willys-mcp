"""Pre-shared OAuth 2.1 with PKCE. Single-user — no dynamic registration.

State is in-memory; PKCE challenges + issued tokens are lost on restart.
Claude.ai re-handshakes silently on the next call.
"""
from __future__ import annotations

import base64
import hashlib
import hmac
import secrets
import time
import urllib.parse
from dataclasses import dataclass

from starlette.requests import Request
from starlette.responses import JSONResponse, RedirectResponse
from starlette.routing import Route

from .auth import TokenStore


@dataclass
class OAuthConfig:
    client_id: str
    client_secret: str
    base_url: str  # e.g. "https://oura.kilnes.com" — for issuer + endpoint URLs in discovery


@dataclass
class _PendingCode:
    code_challenge: str
    redirect_uri: str
    issued_at: float


_AUTH_CODE_TTL_S = 300  # 5 min for the code to be exchanged


def build_oauth_routes(cfg: OAuthConfig, token_store: TokenStore) -> list[Route]:
    pending: dict[str, _PendingCode] = {}

    async def discovery(request: Request):
        base = cfg.base_url.rstrip("/")
        return JSONResponse({
            "issuer": base,
            "authorization_endpoint": f"{base}/oauth/authorize",
            "token_endpoint": f"{base}/oauth/token",
            "registration_endpoint": f"{base}/oauth/register",
            "response_types_supported": ["code"],
            "grant_types_supported": ["authorization_code"],
            "token_endpoint_auth_methods_supported": ["client_secret_post"],
            "code_challenge_methods_supported": ["S256"],
        })

    async def register(request: Request):
        return JSONResponse({"error": "registration not supported"}, status_code=403)

    async def authorize(request: Request):
        params = dict(request.query_params)
        client_id = params.get("client_id", "")
        if not hmac.compare_digest(client_id, cfg.client_id):
            return JSONResponse({"error": "invalid_client"}, status_code=400)

        redirect_uri = params.get("redirect_uri")
        state = params.get("state")
        code_challenge = params.get("code_challenge")
        code_challenge_method = params.get("code_challenge_method", "")
        if not redirect_uri or not code_challenge or code_challenge_method != "S256":
            return JSONResponse({"error": "invalid_request"}, status_code=400)

        code = secrets.token_urlsafe(32)
        pending[code] = _PendingCode(
            code_challenge=code_challenge,
            redirect_uri=redirect_uri,
            issued_at=time.time(),
        )
        sep = "&" if "?" in redirect_uri else "?"
        url = f"{redirect_uri}{sep}code={urllib.parse.quote(code)}"
        if state:
            url += f"&state={urllib.parse.quote(state)}"
        return RedirectResponse(url, status_code=302)

    async def token(request: Request):
        form = await request.form()
        grant_type = form.get("grant_type", "")
        if grant_type != "authorization_code":
            return JSONResponse({"error": "unsupported_grant_type"}, status_code=400)

        client_id = form.get("client_id", "")
        client_secret = form.get("client_secret", "")
        if not (hmac.compare_digest(client_id, cfg.client_id) and
                hmac.compare_digest(client_secret, cfg.client_secret)):
            return JSONResponse({"error": "invalid_client"}, status_code=401)

        code = form.get("code", "")
        verifier = form.get("code_verifier", "")
        redirect_uri = form.get("redirect_uri", "")
        if not code or not verifier:
            return JSONResponse({"error": "invalid_request"}, status_code=400)

        pc = pending.pop(code, None)
        if pc is None:
            return JSONResponse({"error": "invalid_grant"}, status_code=401)
        if time.time() - pc.issued_at > _AUTH_CODE_TTL_S:
            return JSONResponse({"error": "invalid_grant"}, status_code=401)
        if pc.redirect_uri != redirect_uri:
            return JSONResponse({"error": "invalid_grant"}, status_code=401)

        challenge_check = base64.urlsafe_b64encode(
            hashlib.sha256(verifier.encode()).digest()
        ).rstrip(b"=").decode()
        if not hmac.compare_digest(challenge_check, pc.code_challenge):
            return JSONResponse({"error": "invalid_grant"}, status_code=401)

        access_token = secrets.token_urlsafe(32)
        token_store.add(access_token)
        return JSONResponse({
            "access_token": access_token,
            "token_type": "Bearer",
            "expires_in": 30 * 24 * 3600,
        })

    return [
        Route("/.well-known/oauth-authorization-server", discovery, methods=["GET"]),
        Route("/oauth/register", register, methods=["POST"]),
        Route("/oauth/authorize", authorize, methods=["GET"]),
        Route("/oauth/token", token, methods=["POST"]),
    ]
