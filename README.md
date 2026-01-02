# Willys MCP Server

An MCP (Model Context Protocol) server for [Willys](https://www.willys.se) — Sweden's largest grocery chain. Control your shopping cart, browse orders, search products, and get AI-powered recommendations directly from Claude Code or any MCP client.

<!-- TODO: Add demo GIF
![Demo](assets/demo.gif)
-->

## Features

- **19 MCP Tools** — Cart, orders, search, delivery slots, promotions, and more
- **Smart Matching** — AI-powered product recommendations using your purchase history (OpenAI embeddings + sqlite-vec)
- **Web Interface** — Next.js app for browsing orders and testing features
- **Persistent Sessions** — SQLite-backed with 24h expiration
- **Order Caching** — Reduces API calls by 80-90%

## Quick Start

```bash
git clone https://github.com/yourusername/willys-checklist.git
cd willys-checklist
npm install
```

Create `.credentials` in the project root:
```
your-email@example.com
your-password
```

### Claude Code Integration

Add to `~/.claude.json`:

```json
{
  "mcpServers": {
    "willys-checklist": {
      "type": "stdio",
      "command": "npx",
      "args": ["tsx", "/absolute/path/to/willys-checklist/mcp-server.ts"]
    }
  }
}
```

Restart Claude Code. Then just ask:

> "Log in to Willys and show me my cart"
> "Search for havremjölk"
> "What did I order last week?"
> "Add Oatly Barista to my cart"

### Web Interface

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

<!-- TODO: Add web interface screenshot
![Web Interface](assets/web-interface.png)
-->

## MCP Tools

### Auth
| Tool | Description |
|------|-------------|
| `mcp__willys_login` | Login, returns session ID |
| `mcp__willys_logout` | Clear session |
| `mcp__willys_check_auth` | Check auth status |

### Cart
| Tool | Description |
|------|-------------|
| `mcp__willys_get_cart` | Get cart contents |
| `mcp__willys_add_to_cart` | Add product (e.g., `101175556_ST`) |
| `mcp__willys_remove_from_cart` | Remove product |
| `mcp__willys_checkout` | Start checkout |

### Orders
| Tool | Description |
|------|-------------|
| `mcp__willys_get_orders` | Order history |
| `mcp__willys_get_order_details` | Full order with items |

### Search
| Tool | Description |
|------|-------------|
| `mcp__willys_search` | Product search |
| `mcp__willys_search_suggestions` | Autocomplete |
| `mcp__willys_get_product_detail` | Product info |
| `mcp__willys_get_common_products` | Your frequent items |
| `mcp__willys_get_smart_product_matches` | AI-powered matching |

### Delivery
| Tool | Description |
|------|-------------|
| `mcp__willys_get_delivery_slots` | Delivery times |
| `mcp__willys_get_pickup_slots` | Pickup times |
| `mcp__willys_select_slot` | Book slot |

### Other
| Tool | Description |
|------|-------------|
| `mcp__willys_get_offers` | Current promotions |
| `mcp__willys_get_customer_info` | Profile & bonus |

## Smart Product Matching

Enable AI-powered recommendations by setting:

```bash
export OPENAI_API_KEY=sk-...
```

The system uses your purchase history + semantic search to find products you're likely to want.

## Project Structure

```
├── mcp-server.ts           # Stdio MCP server
├── app/                    # Next.js web UI
├── lib/
│   ├── database.ts         # SQLite layer
│   ├── mcp-auth.ts         # Puppeteer login
│   ├── mcp-orders.ts       # API operations
│   ├── mcp-session-store.ts
│   ├── embeddings.ts       # OpenAI embeddings
│   └── types.ts
├── actions/                # Server actions
└── components/             # React components
```

## Development

```bash
npm run dev      # Dev server (port 3000)
npm run lint     # Biome check
npm run format   # Biome format
```

## Notes

- Product codes: `101175556_ST` format
- Full Swedish character support (ö, ä, å)
- Sessions expire after 24 hours
- CSRF handling built-in

## Troubleshooting

**MCP not connecting?**
Check the path in `~/.claude.json` is absolute. Verify `npx tsx` works.

**Login fails?**
Check `.credentials` file. Puppeteer may need deps on Linux.

**Smart matching empty?**
Set `OPENAI_API_KEY`. First run indexes history.

## License

MIT License

Copyright (c) 2025

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

**Disclaimer:** Not affiliated with Willys or Axfood. Use responsibly.
