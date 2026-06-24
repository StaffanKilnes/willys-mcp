"""Starlette app: OAuth + bearer in front of a FastMCP stdio proxy to the TS Willys MCP."""
from __future__ import annotations

import logging
import os
import sys
from pathlib import Path

import uvicorn
from dotenv import load_dotenv
from fastmcp import FastMCP
from fastmcp.client.transports import StdioTransport
from starlette.applications import Starlette
from starlette.middleware import Middleware
from starlette.middleware.trustedhost import TrustedHostMiddleware
from starlette.routing import Mount

from .auth import BearerAuthMiddleware, TokenStore
from .oauth import OAuthConfig, build_oauth_routes

_REQUIRED = (
    "WILLYS_USERNAME",
    "WILLYS_PASSWORD",
    "WILLYS_MCP_TOKEN",
    "WILLYS_OAUTH_CLIENT_ID",
    "WILLYS_OAUTH_CLIENT_SECRET",
    "WILLYS_MCP_HOST",
    "WILLYS_MCP_PORT",
    "WILLYS_BACKEND_CMD",
    "WILLYS_BACKEND_CWD",
)

_TOKEN_TTL_S = 30 * 24 * 3600  # matches the OAuth expires_in


def build_app() -> Starlette:
    load_dotenv()  # no-op in prod (the mcp-supervision ecosystem injects env); convenient for local dev
    missing = [k for k in _REQUIRED if not os.environ.get(k)]
    if missing:
        sys.stderr.write(f"willys-mcp: missing required env vars: {', '.join(missing)}\n")
        raise SystemExit(2)

    host_public = os.environ["WILLYS_MCP_HOST"]
    base_url = f"https://{host_public}" if host_public != "localhost" else "http://localhost"

    token_store = TokenStore(
        persist_path=os.environ.get(
            "WILLYS_TOKEN_STORE_PATH",
            os.path.join(os.path.expanduser("~"), ".willys-mcp-tokens.json"),
        ),
        ttl_seconds=_TOKEN_TTL_S,
    )

    oauth_cfg = OAuthConfig(
        client_id=os.environ["WILLYS_OAUTH_CLIENT_ID"],
        client_secret=os.environ["WILLYS_OAUTH_CLIENT_SECRET"],
        base_url=base_url,
    )
    oauth_routes = build_oauth_routes(oauth_cfg, token_store)

    backend_env = {
        "WILLYS_USERNAME": os.environ["WILLYS_USERNAME"],
        "WILLYS_PASSWORD": os.environ["WILLYS_PASSWORD"],
        "PUPPETEER_EXECUTABLE_PATH": os.environ.get("PUPPETEER_EXECUTABLE_PATH", "/usr/bin/chromium"),
        "PATH": os.environ.get("PATH", ""),
        "HOME": os.environ.get("HOME", ""),
        # OPENAI_API_KEY intentionally omitted in v1 (smart-matching deferred)
    }
    transport = StdioTransport(
        command=os.environ["WILLYS_BACKEND_CMD"],
        args=["mcp-server.ts"],
        cwd=os.environ["WILLYS_BACKEND_CWD"],
        env=backend_env,
        keep_alive=True,  # one persistent backend subprocess
        log_file=Path(
            os.environ.get(
                "WILLYS_BACKEND_LOG",
                os.path.join(os.path.expanduser("~"), "tools/mcp/willys/shim/backend.log"),
            )
        ),
    )
    proxy = FastMCP.as_proxy(transport, name="willys-mcp")
    mcp_app = proxy.http_app(path="/", stateless_http=True)

    allowed_hosts = ["127.0.0.1", "localhost", "[::1]", host_public]
    logging.info("willys-mcp TrustedHost allow-list: %s", allowed_hosts)

    return Starlette(
        routes=[*oauth_routes, Mount("/mcp", app=mcp_app)],
        middleware=[
            Middleware(TrustedHostMiddleware, allowed_hosts=allowed_hosts),
            Middleware(
                BearerAuthMiddleware,
                static_token=os.environ["WILLYS_MCP_TOKEN"],
                token_store=token_store,
            ),
        ],
        lifespan=mcp_app.lifespan,
    )


def main() -> None:
    logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(name)s %(message)s")
    app = build_app()
    uvicorn.run(
        app,
        host="127.0.0.1",
        port=int(os.environ["WILLYS_MCP_PORT"]),
        proxy_headers=True,
        forwarded_allow_ips="127.0.0.1",
        log_level="info",
    )


if __name__ == "__main__":
    main()
