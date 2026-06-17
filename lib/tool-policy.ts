// Server-side tool policy: credential resolution + which tools are exposed.
// Excluded tools are hidden from tools/list AND rejected in tools/call.

export function resolveLoginCredentials(
  args: unknown,
  env: NodeJS.ProcessEnv = process.env,
): { username: string; password: string } | null {
  const a = (args ?? {}) as { username?: string; password?: string };
  const username = a.username ?? env.WILLYS_USERNAME;
  const password = a.password ?? env.WILLYS_PASSWORD;
  if (!username || !password) return null;
  return { username, password };
}

export function buildExcludedTools(env: NodeJS.ProcessEnv = process.env): Set<string> {
  const excluded = new Set<string>([
    "mcp__willys_checkout", // spending/commit step stays human-in-app
    "mcp__willys_select_slot", // slot commit stays human-in-app
  ]);
  // Smart-matching needs OpenAI embeddings; defer unless a key is configured.
  if (!env.OPENAI_API_KEY) excluded.add("mcp__willys_get_smart_product_matches");
  return excluded;
}

export const EXCLUDED_TOOLS = buildExcludedTools();

export function visibleTools<T extends { name: string }>(
  all: T[],
  excluded: Set<string> = EXCLUDED_TOOLS,
): T[] {
  return all.filter((t) => !excluded.has(t.name));
}
