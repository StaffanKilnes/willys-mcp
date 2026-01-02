import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { willysDatabase } = await import('../../../lib/database');
    await willysDatabase.ensureInitialized();
    
    // Run the exact same query as in the category-aware search
    const categoryProducts = (willysDatabase as any).db.prepare(`
      SELECT DISTINCT p.product_code, p.name, p.manufacturer
      FROM products p 
      JOIN order_products op ON p.product_code = op.product_code
      JOIN categories c ON op.category_id = c.category_id
      WHERE c.name = ?
      LIMIT ?
    `).all('Mejeri, ost & ägg', 30);
    
    // Check specifically for Fetaost
    const fetaostResults = categoryProducts.filter((p: any) => 
      p.product_code === '101268415_ST' || p.product_code === '101533198_ST'
    );
    
    return NextResponse.json({
      success: true,
      debug: {
        totalCategoryProducts: categoryProducts.length,
        fetaostFound: fetaostResults,
        allProducts: categoryProducts.map((p: any) => ({
          name: p.name,
          code: p.product_code
        }))
      }
    });
    
  } catch (error) {
    console.error('Debug exact query error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error"
    }, { status: 500 });
  }
}