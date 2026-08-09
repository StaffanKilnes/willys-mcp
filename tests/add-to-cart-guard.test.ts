import { describe, expect, it } from "vitest";
import { mcpAddToCart } from "../lib/mcp-orders";

/**
 * Proves the guard is WIRED, not just exported: a bad _KG quantity must be
 * refused before any auth/network work happens. The sessionId is bogus on
 * purpose — if the guard ever stops short-circuiting, this fails with an
 * auth error instead of the guard message.
 */
describe("mcpAddToCart _KG guard wiring", () => {
  it("refuses a gram-shaped quantity without touching the network", async () => {
    const result = await mcpAddToCart(
      "not-a-real-session",
      "100254920_KG",
      1500,
    );
    expect(result.success).toBe(false);
    expect(result.message).toMatch(/PIECES, not grams/);
  });
});
