# Smart Product Matching

The smart product matching feature intelligently finds the most likely intended product when users search for common grocery terms based on their purchase history.

## Overview

Instead of browsing through hundreds of similar products, users can search for terms like "mjölk" (milk) and get personalized recommendations based on their actual buying patterns. The system analyzes purchase frequency, recency, and consistency to rank products.

## How It Works

### Algorithm Components

1. **Purchase History Analysis**: Fetches all completed orders from Willys API
2. **Product Extraction**: Processes detailed order data to extract individual products
3. **Text Matching**: Finds products containing the search term (case-insensitive)
4. **Multi-dimensional Scoring**:
   - **Frequency**: How often the product was purchased
   - **Recency**: When it was last purchased (exponential decay with 30-day half-life)
   - **Consistency**: Regular purchase patterns over time

### Scoring Formula

```javascript
const recencyWeight = Math.exp(-daysSinceLastPurchase / 30);
const frequencyScore = entry.frequency;
const recentBonus = entry.recentPurchases > 0 ? 1.5 : 1.0;
const consistencyScore = entry.orderDates.length > 1 ? 1.2 : 1.0;

const finalScore = frequencyScore * recencyWeight * recentBonus * consistencyScore;
```

## API Usage

### MCP Server

```javascript
await mcp__willys_get_smart_product_matches({
  sessionId: "your-session-id",
  searchTerm: "mjölk", 
  maxResults: 5
});
```

**Response Example:**
```json
{
  "success": true,
  "matches": [
    {
      "name": "Mjölk Längre Hållbarhet 3%",
      "code": "101276728_ST", 
      "score": 12.5,
      "frequency": 7,
      "recentPurchases": 2,
      "lastPurchased": "2025-08-18",
      "manufacturer": "Arla"
    }
  ],
  "totalFound": 8,
  "searchTerm": "mjölk"
}
```

### Web Server Action

```javascript
import { getSmartProductMatches } from '@/actions/orders';

const result = await getSmartProductMatches("mjölk", 5);
```

## Web UI Component

The smart product matching is integrated into the orders page at `/orders` through the `SmartProductMatcher` component:

- **Search Input**: Enter grocery terms like "mjölk", "bröd", "äpplen"
- **Configurable Results**: Adjust max results (1-10)  
- **Real-time Results**: Displays ranked products with scoring details
- **Purchase History Context**: Shows frequency, recency, and last purchase date

## Data Structure

### Order Processing

The system processes Willys order data structure:

```javascript
// orderDetails.categoryOrderedDeliveredProducts is an object:
{
  "Mejeri": [
    { name: "Arla Mjölk 3%", code: "101276728_ST", manufacturer: "Arla" }
  ],
  "Bröd & Kakor": [
    { name: "Pågen Hamburgerbröd", code: "123456_ST", manufacturer: "Pågen" }
  ]
}
```

**Important**: `categoryOrderedDeliveredProducts` is an object where keys are category names and values are product arrays, not a direct array.

## Common Use Cases

1. **Quick Reordering**: "mjölk" → Get your usual milk brand
2. **Brand Discovery**: See which brands you actually prefer based on repeat purchases  
3. **Seasonal Patterns**: Recent purchases weighted higher than historical frequency
4. **Product Variants**: Find the specific variant you typically buy (3% vs 1.5% milk)

## Error Handling

- **No Purchase History**: Falls back to suggesting regular search
- **No Matches Found**: Suggests alternative search terms
- **Authentication Required**: Prompts for login when session expires
- **API Failures**: Graceful degradation with user-friendly messages

## Performance Considerations

- **Recency Filter**: Only processes orders from last 60 days for recent purchase analysis
- **Efficient Iteration**: Optimized object iteration for category-based product structure  
- **Caching**: Order details are fetched once per search session
- **Scoring Optimization**: Vectorized calculations for large purchase histories

## Technical Implementation

### Files Modified
- `lib/mcp-orders.ts`: Core smart matching algorithm
- `actions/orders.ts`: Web server action implementation  
- `components/SmartProductMatcher.tsx`: React UI component
- `lib/types.ts`: TypeScript interfaces

### Key Functions
- `mcpGetSmartProductMatches()`: MCP server implementation
- `getSmartProductMatches()`: Web server action
- Smart scoring algorithm with multi-dimensional weighting

## Testing

The feature has been tested with:
- ✅ Real Willys purchase history data
- ✅ Multiple search terms ("mjölk", "bröd", etc.)
- ✅ Edge cases (no history, no matches)
- ✅ Data structure parsing fixes
- ✅ Authentication scenarios
- ✅ MCP and web UI integration

## Future Enhancements

- **Machine Learning**: Advanced recommendation algorithms
- **Category Awareness**: Weight matches by product category
- **Seasonal Adjustments**: Account for seasonal buying patterns
- **Collaborative Filtering**: Learn from similar user preferences
- **Price Sensitivity**: Factor in price preferences and deals