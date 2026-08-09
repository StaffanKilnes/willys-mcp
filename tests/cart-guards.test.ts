import { describe, expect, it } from "vitest";
import { KG_MAX_PIECES, kgGuardError } from "../lib/cart-guards";

describe("kgGuardError", () => {
  it("rejects piece counts over the max on _KG codes", () => {
    expect(kgGuardError("100254920_KG", 1000)).toMatch(/PIECES, not grams/);
    expect(kgGuardError("100254920_KG", KG_MAX_PIECES + 1)).not.toBeNull();
  });
  it("allows plausible piece counts on _KG codes", () => {
    expect(kgGuardError("100254920_KG", 8)).toBeNull();
    expect(kgGuardError("100254920_KG", KG_MAX_PIECES)).toBeNull();
  });
  it("ignores _ST codes entirely", () => {
    expect(kgGuardError("101175556_ST", 24)).toBeNull();
  });
});
