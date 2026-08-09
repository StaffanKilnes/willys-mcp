export const KG_MAX_PIECES = 20;

/**
 * _KG product codes take PIECES, not grams — a gram figure once built a
 * 122 759 kr cart (2026-08-03). Returns an error message when the quantity
 * cannot be a piece count, null when the add is fine.
 */
export function kgGuardError(
  productCode: string,
  quantity: number,
): string | null {
  if (productCode.endsWith("_KG") && quantity > KG_MAX_PIECES) {
    return (
      `_KG guard: quantity ${quantity} exceeds ${KG_MAX_PIECES} pieces for ${productCode}. ` +
      `_KG codes take PIECES, not grams (8 bananas → quantity: 8). Refusing to add.`
    );
  }
  return null;
}
