import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { willysDatabase } = await import('../../../lib/database');
    await willysDatabase.ensureInitialized();
    
    // Query WITHOUT DISTINCT to see all rows
    const allCategoryProducts = (willysDatabase as any).db.prepare(`
      SELECT p.product_code, p.name, p.manufacturer, op.order_number
      FROM products p 
      JOIN order_products op ON p.product_code = op.product_code
      JOIN categories c ON op.category_id = c.category_id
      WHERE c.name = ?
      ORDER BY p.name
    `).all('Mejeri, ost & ägg');
    
    // Look specifically for Fetaost entries
    const fetaostEntries = allCategoryProducts.filter((p: any) => 
      p.name.includes('Fetaost')
    );
    
    // Count total products in category
    const uniqueProducts = new Set(allCategoryProducts.map((p: any) => p.product_code));
    
    return NextResponse.json({
      success: true,
      debug: {
        totalCategoryRows: allCategoryProducts.length,
        uniqueProducts: uniqueProducts.size,
        fetaostEntries,
        sampleProducts: allCategoryProducts.slice(0, 20).map((p: any) => ({
          name: p.name,
          code: p.product_code,
          order: p.order_number
        }))
      }
    });
    
  } catch (error) {
    console.error('Debug no distinct error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error"
    }, { status: 500 });
  }
}