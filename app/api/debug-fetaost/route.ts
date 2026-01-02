import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { willysDatabase } = await import('../../../lib/database');
    await willysDatabase.ensureInitialized();
    
    // Check if Fetaost products exist in order_products (i.e., have been purchased)
    const fetaostInOrders = (willysDatabase as any).db.prepare(`
      SELECT p.name, p.product_code, COUNT(*) as purchase_count, c.name as category_name
      FROM products p 
      LEFT JOIN order_products op ON p.product_code = op.product_code
      LEFT JOIN categories c ON op.category_id = c.category_id
      WHERE p.product_code IN ('101268415_ST', '101533198_ST')
      GROUP BY p.product_code, c.name
    `).all();
    
    // Check total products vs products with purchases
    const totalProducts = (willysDatabase as any).db.prepare('SELECT COUNT(*) as count FROM products').get();
    const productsWithPurchases = (willysDatabase as any).db.prepare(`
      SELECT COUNT(DISTINCT p.product_code) as count 
      FROM products p 
      JOIN order_products op ON p.product_code = op.product_code
    `).get();
    
    // Check if there are any cheese products with purchases  
    const cheeseWithPurchases = (willysDatabase as any).db.prepare(`
      SELECT p.name, p.product_code, COUNT(*) as purchase_count, c.name as category_name
      FROM products p 
      JOIN order_products op ON p.product_code = op.product_code
      JOIN categories c ON op.category_id = c.category_id
      WHERE c.name = 'Mejeri, ost & ägg' AND p.name LIKE '%ost%'
      GROUP BY p.product_code
      LIMIT 10
    `).all();
    
    return NextResponse.json({
      success: true,
      debug: {
        fetaostInOrders,
        totalProducts: totalProducts.count,
        productsWithPurchases: productsWithPurchases.count,
        purchaseRatio: `${productsWithPurchases.count}/${totalProducts.count} (${((productsWithPurchases.count/totalProducts.count)*100).toFixed(1)}%)`,
        cheeseWithPurchases
      }
    });
    
  } catch (error) {
    console.error('Debug fetaost error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error"
    }, { status: 500 });
  }
}