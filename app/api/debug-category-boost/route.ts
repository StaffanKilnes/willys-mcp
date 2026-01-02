import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { willysDatabase } = await import('../../../lib/database');
    await willysDatabase.ensureInitialized();
    
    // Get vector results for "ost"
    const vectorCandidates = await willysDatabase.vectorSearchProducts('ost', 10);
    
    // Get products in "Mejeri, ost & ägg" category
    const categoryProducts = (willysDatabase as any).db.prepare(`
      SELECT DISTINCT p.product_code, p.name, p.manufacturer
      FROM products p 
      JOIN order_products op ON p.product_code = op.product_code
      JOIN categories c ON op.category_id = c.category_id
      WHERE c.name = ?
      LIMIT ?
    `).all('Mejeri, ost & ägg', 20);
    
    // Check overlap
    const vectorCodes = new Set(vectorCandidates.map(r => r.productCode));
    const categoryCodes = new Set(categoryProducts.map((r: any) => r.product_code));
    
    const overlap = vectorCandidates.filter(r => categoryCodes.has(r.productCode));
    const categorySet = new Set(categoryProducts.map((r: any) => r.product_code));
    
    return NextResponse.json({
      success: true,
      debug: {
        vectorResultCount: vectorCandidates.length,
        categoryProductCount: categoryProducts.length,
        overlapCount: overlap.length,
        vectorResults: vectorCandidates.map(r => ({ 
          name: r.name, 
          code: r.productCode,
          inCategory: categorySet.has(r.productCode)
        })),
        categoryProducts: categoryProducts.slice(0, 10).map((r: any) => ({ 
          name: r.name, 
          code: r.product_code,
          inVector: vectorCodes.has(r.product_code)
        })),
        overlap: overlap.map(r => ({ name: r.name, similarity: r.similarity }))
      }
    });
    
  } catch (error) {
    console.error('Debug category boost error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error"
    }, { status: 500 });
  }
}