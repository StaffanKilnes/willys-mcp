# willys-mcp (Pi deployment fork)

A remote MCP server for [Willys](https://www.willys.se) (Swedish grocery), served like the other Pi MCPs (oura/ynab): OAuth + bearer over HTTPS, supervised by PM2 (the `mcp-supervision` ecosystem, app `mcp-willys`), behind a Cloudflare Tunnel. Fork of `jimmystridh/willys-mcp`, adapted for headless deployment.

**Live:** `https://willys.kilnes.com/mcp/` (Claude.ai connector). Internal: `127.0.0.1:8426`.

## Architecture

```
Claude.ai / Glitch ──HTTPS──> willys.kilnes.com (Cloudflare Tunnel)
                                   │  127.0.0.1:8426
                         shim/  (Python: Starlette + OAuth/bearer + token-TTL)
                                   │  FastMCP.as_proxy → StdioTransport(keep_alive)
                         mcp-server.ts  (tsx → lib/: Puppeteer login + Axfood API)
```

The Python shim (`shim/`) terminates auth and proxies, via FastMCP over stdio, to the TS stdio MCP. **Next.js is never built or run** — only `mcp-server.ts` + `lib/`. (The upstream `app/`, `components/`, `actions/`, and the root `CLAUDE.md` describe the old Next.js setup and are no longer used.)

## Divergence from upstream

- **Patches:** `lib/puppeteer-auth.ts` honors `PUPPETEER_EXECUTABLE_PATH` (system Chromium on ARM); `lib/database.ts` is platform-aware for `sqlite-vec`; `mcp-server.ts` `login` falls back to `WILLYS_USERNAME`/`WILLYS_PASSWORD` env vars.
- **`lib/tool-policy.ts`** — credential resolution + `EXCLUDED_TOOLS`. `checkout` and `select_slot` are removed from the surface (money/commit stay human-in-app); `get_smart_product_matches` excluded unless `OPENAI_API_KEY` is set. **16 tools exposed.**
- **Security:** `encodeURIComponent` on URL-interpolated args; no cookie values logged.
- `shim/` Python package added; web UI / Next.js deps unused.

## Deploy

```bash
ssh staffan@<pi> 'cd ~/tools/mcp/willys && git pull --ff-only && pm2 restart mcp-willys'
```
Restart respawns the shim + backend (picks up new TS). Avoid cron windows (04:00–07:00, Sun 17:00–19:00 CEST). PM2 app: `mcp-willys` in `~/tools/mcp/ecosystem.config.cjs`. Secrets in `~/tools/mcp/.env` (`WILLYS_*`).

## Known limitations

- `get_delivery_slots` / `get_pickup_slots` return Willys 404 (Axfood endpoint drifted since early 2026; re-capture from the live `/kassa` to fix). Slot selection is a human-in-app step regardless.

## Tests

- TS: `npm test` (vitest — tool-policy).
- Shim: `cd shim && .venv/bin/pytest` (token TTL).
