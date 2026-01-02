# Contributing to Willys MCP Server

Thanks for your interest in contributing! This document outlines how to get started.

## Development Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/willys-checklist.git
   cd willys-checklist
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up credentials** (for testing with real API)
   ```bash
   cp .credentials.example .credentials
   # Edit .credentials with your Willys account
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## Code Style

We use [Biome](https://biomejs.dev/) for linting and formatting.

```bash
npm run lint      # Check for issues
npm run format    # Auto-format code
```

Please run these before committing.

## Project Structure

```
├── mcp-server.ts          # Stdio MCP server (main entry)
├── app/                   # Next.js web interface
├── lib/                   # Core logic
│   ├── mcp-auth.ts        # Authentication
│   ├── mcp-orders.ts      # API operations
│   ├── database.ts        # SQLite layer
│   └── types.ts           # TypeScript types
├── actions/               # Next.js server actions
├── components/            # React components
└── tests/                 # Test files
```

## Making Changes

1. **Create a branch**
   ```bash
   git checkout -b feat/your-feature
   ```

2. **Make your changes**

3. **Test your changes**
   ```bash
   npm run lint
   npm run build
   ```

4. **Commit with conventional commits**
   ```bash
   git commit -m "feat: add new feature"
   git commit -m "fix: resolve bug in cart"
   git commit -m "docs: update README"
   ```

5. **Push and open a PR**
   ```bash
   git push origin feat/your-feature
   ```

## Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation only
- `style:` Formatting, no code change
- `refactor:` Code change that neither fixes a bug nor adds a feature
- `test:` Adding tests
- `chore:` Maintenance tasks

## Adding MCP Tools

To add a new MCP tool:

1. Add the operation function in `lib/mcp-orders.ts`
2. Add the tool definition in `mcp-server.ts`
3. Add the handler case in the switch statement
4. Update `README.md` with the new tool
5. Add a test in `tests/`

## Testing

Tests are in the `tests/` folder. Most require valid credentials to run against the real API.

```bash
# Run a specific test
node tests/test-search-with-auth.js
```

## Questions?

Open an issue if you have questions or need help getting started.
