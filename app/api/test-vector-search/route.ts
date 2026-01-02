import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    console.log('🔍 Testing end-to-end vector search functionality...');
    
    // Import the database instance
    const { willysDatabase } = await import('../../../lib/database');
    
    // Initialize the database - this will trigger sqlite-vec loading
    await willysDatabase.ensureInitialized();
    
    console.log('✅ Database initialized with vector support');
    
    // Test 1: Create some test data
    console.log('📝 Creating test products...');
    const testProducts = [
      { code: 'TEST_CHEESE_001', name: 'Gouda Cheese 200g', manufacturer: 'TestDairy' },
      { code: 'TEST_CHEESE_002', name: 'Cheddar Ost 150g', manufacturer: 'TestDairy' },
      { code: 'TEST_BREAD_001', name: 'Fresh Bread Loaf', manufacturer: 'TestBakery' },
      { code: 'TEST_MILK_001', name: 'Organic Milk 1L', manufacturer: 'TestDairy' }
    ];
    
    // Insert test products directly into the database
    const insertStmt = (willysDatabase as any).db.prepare(`
      INSERT OR REPLACE INTO products (product_code, name, manufacturer, name_normalized, created_at)
      VALUES (?, ?, ?, ?, ?)
    `);
    
    const now = Date.now();
    for (const product of testProducts) {
      insertStmt.run(
        product.code,
        product.name,
        product.manufacturer,
        product.name.toLowerCase(),
        now
      );
    }
    
    console.log(`✅ Inserted ${testProducts.length} test products`);
    
    // Test 2: Generate embeddings for test products
    console.log('🧮 Generating embeddings for test products...');
    const embeddingResult = await willysDatabase.generateMissingEmbeddings(10);
    console.log(`✅ Generated embeddings: ${embeddingResult.processed} processed, ${embeddingResult.errors} errors`);
    
    // Test 3: Perform vector search
    console.log('🔍 Testing vector search for "ost" (Swedish for cheese)...');
    const vectorResults = await willysDatabase.vectorSearchProducts('ost', 5);
    console.log(`✅ Vector search returned ${vectorResults.length} results`);
    
    // Test 4: Perform hybrid search
    console.log('🔍 Testing hybrid search for "ost"...');
    const hybridResults = await willysDatabase.hybridSearchProducts('ost', 5);
    console.log(`✅ Hybrid search returned ${hybridResults.length} results`);
    
    // Test 5: Test with English search term
    console.log('🔍 Testing vector search for "cheese"...');
    const englishResults = await willysDatabase.vectorSearchProducts('cheese', 5);
    console.log(`✅ English vector search returned ${englishResults.length} results`);
    
    // Get database stats
    const stats = await willysDatabase.getStats();
    
    // Clean up test data
    console.log('🧹 Cleaning up test data...');
    const deleteStmt = (willysDatabase as any).db.prepare('DELETE FROM products WHERE product_code LIKE ?');
    deleteStmt.run('TEST_%');
    
    const deleteVectorStmt = (willysDatabase as any).db.prepare('DELETE FROM product_vectors WHERE product_code LIKE ?');
    deleteVectorStmt.run('TEST_%');
    
    console.log('✅ Test data cleaned up');
    
    return NextResponse.json({
      success: true,
      message: 'Vector search functionality verified successfully!',
      results: {
        testProductsInserted: testProducts.length,
        embeddingsGenerated: embeddingResult,
        vectorSearchResults: {
          'ost (Swedish)': vectorResults.length,
          'cheese (English)': englishResults.length
        },
        hybridSearchResults: hybridResults.length,
        databaseStats: stats,
        sampleVectorResults: vectorResults.map(r => ({
          name: r.name,
          similarity: r.similarity,
          productCode: r.productCode
        })),
        sampleHybridResults: hybridResults.map(r => ({
          name: r.name,
          score: r.score,
          similarity: r.similarity,
          frequency: r.frequency,
          source: r.source
        }))
      }
    });
    
  } catch (error) {
    console.error('❌ Vector search test failed:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined
    }, { status: 500 });
  }
}