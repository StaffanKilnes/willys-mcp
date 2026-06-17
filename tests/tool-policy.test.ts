import { describe, it, expect } from "vitest";
import {
  resolveLoginCredentials,
  buildExcludedTools,
  visibleTools,
} from "../lib/tool-policy";

describe("resolveLoginCredentials", () => {
  it("uses explicit args when provided", () => {
    expect(resolveLoginCredentials({ username: "u", password: "p" }, {})).toEqual({
      username: "u",
      password: "p",
    });
  });
  it("falls back to env vars when args omitted", () => {
    expect(
      resolveLoginCredentials({}, { WILLYS_USERNAME: "eu", WILLYS_PASSWORD: "ep" }),
    ).toEqual({ username: "eu", password: "ep" });
  });
  it("returns null when neither args nor env present", () => {
    expect(resolveLoginCredentials({}, {})).toBeNull();
  });
});

describe("buildExcludedTools", () => {
  it("always excludes checkout + select_slot", () => {
    const s = buildExcludedTools({ OPENAI_API_KEY: "x" });
    expect(s.has("mcp__willys_checkout")).toBe(true);
    expect(s.has("mcp__willys_select_slot")).toBe(true);
    expect(s.has("mcp__willys_get_smart_product_matches")).toBe(false);
  });
  it("also excludes smart-matching when no OpenAI key", () => {
    const s = buildExcludedTools({});
    expect(s.has("mcp__willys_get_smart_product_matches")).toBe(true);
  });
});

describe("visibleTools", () => {
  it("filters out excluded tools", () => {
    const tools = [{ name: "a" }, { name: "mcp__willys_checkout" }, { name: "b" }];
    const out = visibleTools(tools, new Set(["mcp__willys_checkout"]));
    expect(out.map((t) => t.name)).toEqual(["a", "b"]);
  });
});
