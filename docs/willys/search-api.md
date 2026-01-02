# Willys Search API Documentation

## Overview

This document details the Willys search functionality based on analysis performed using Playwright to capture network requests and responses. The search system consists of two main components: **autocomplete/suggestions** and **search results**.

## API Endpoints

### 1. Autocomplete API

**Endpoint**: `GET /search/autocomplete/SearchBox?term={query}`

**Purpose**: Provides search suggestions as the user types

**Parameters**:
- `term` (required): URL-encoded search term (e.g., `mj%C3%B6lk` for "mjölk")

**Example Request**:
```
GET https://www.willys.se/search/autocomplete/SearchBox?term=mj%C3%B6lk
```

**Headers Required**:
```json
{
  "content-type": "application/json",
  "newrelic": "eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjExNTQxOTYiLCJhcCI6Ijc3MjMyNDIwMyIsImlkIjoiNzA5OTA4YzViMTE1ZWFjOSIsInRyIjoiODYyMTg2YmRkZTk0YjczYjhkMWJkNWY2ZjI5ZDcwOGMiLCJ0aSI6MTc1NjU0NjMzNTU2Nn19",
  "traceparent": "00-862186bdde94b73b8d1bd5f6f29d708c-709908c5b115eac9-01",
  "tracestate": "1154196@nr=0-1-1154196-772324203-709908c5b115eac9----1756546335566",
  "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36"
}
```

**Response**: Returns suggestions in JSON format that populate dropdown/autocomplete suggestions.

### 2. Search Results API

**Endpoint**: `GET /search?q={query}&page={page}&size={size}`

**Purpose**: Returns paginated search results for a given query

**Parameters**:
- `q` (required): URL-encoded search query
- `page` (optional): Page number (0-based, default: 0)
- `size` (optional): Number of results per page (default: 30)

**Example Request**:
```
GET https://www.willys.se/search?q=mj%C3%B6lk&page=0&size=30
```

**Headers Required**: Same tracking headers as autocomplete API

**Response**: Returns HTML page with search results that can be parsed for products.

## Product Detail API Pattern

When search results are displayed, additional requests are made to fetch detailed product information:

**Endpoint**: `GET /_next/data/{buildId}/sv/produktdetalj/{product-name}_{productCode}.json`

**Parameters**:
- `buildId`: Next.js build identifier (currently `a4eecdbf`)
- `product-name`: URL-friendly product name
- `productCode`: Product code (e.g., `101233933_ST`)
- `q`: Original search query (passed as query parameter)
- `showInModal`: Boolean flag (usually `true`)

**Example**:
```
GET https://www.willys.se/_next/data/a4eecdbf/sv/produktdetalj/Mellanmjolk-Langre-Hallbarhet-1-5procent-101233933_ST.json?q=mj%C3%B6lk&name=Mellanmjolk-Langre-Hallbarhet-1-5procent-101233933_ST&productCode=101233933_ST&showInModal=true
```

## Search Implementation Analysis

### Frontend Implementation

1. **Search Input**: Located via `input[type="search"]` selector
2. **Autocomplete Trigger**: Requests are made as user types (character by character)
3. **Suggestions Display**: Shown in element with `[role="listbox"]` attribute
4. **Search Submission**: Triggers navigation to search results page (`/sok?q={query}`)

### Key Observations

1. **URL Structure**: Search results use `/sok` path (Swedish for "search")
2. **Encoding**: All search terms are properly URL-encoded
3. **Pagination**: Results are paginated with `page` and `size` parameters
4. **Product Details**: Individual product data is fetched asynchronously
5. **Tracking**: Extensive use of New Relic and Google Analytics tracking

### Response Patterns

1. **Autocomplete**: Returns JSON with search suggestions
2. **Search Results**: Returns HTML page with embedded JSON data
3. **Product Details**: Returns JSON with complete product information
4. **Status Codes**: All successful requests return 200 OK

## Implementation Requirements for MCP Server

### Required Headers

```typescript
const searchHeaders = {
  "accept": "*/*",
  "accept-language": "sv-SE,sv;q=0.9,en-US;q=0.8,en-SE;q=0.7,en-GB;q=0.6,en;q=0.5",
  "content-type": "application/json",
  "cookie": sessionCookies, // Authentication required
  "newrelic": generateNewRelicHeader(),
  "traceparent": generateTraceParent(),
  "tracestate": generateTraceState(),
  "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36",
  "sec-ch-ua": '"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"',
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": '"macOS"',
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-origin"
};
```

### Tracking Header Generation

The search API requires specific tracking headers:

```typescript
function generateTrackingHeaders() {
  const traceId = Math.random().toString(36).substring(2, 34);
  const spanId = Math.random().toString(36).substring(2, 18);
  const timestamp = Date.now();

  const newrelicData = {
    v: [0, 1],
    d: {
      ty: "Browser",
      ac: "1154196",
      ap: "772324203",
      id: spanId,
      tr: traceId,
      ti: timestamp
    }
  };

  return {
    newrelic: btoa(JSON.stringify(newrelicData)),
    traceparent: `00-${traceId}-${spanId}-01`,
    tracestate: `1154196@nr=0-1-1154196-772324203-${spanId}----${timestamp}`
  };
}
```

## Authentication Requirements

- **Session Cookies**: Search functionality requires authenticated session
- **CSRF Token**: Not required for GET requests (search/autocomplete)
- **User Authentication**: Must be logged in to access search results

## Performance Considerations

1. **Autocomplete Debouncing**: Implement client-side debouncing to avoid excessive requests
2. **Caching**: Consider caching search results and autocomplete suggestions
3. **Rate Limiting**: Be mindful of request frequency to avoid being blocked

## Example Implementation

### Search Function

```typescript
export async function searchProducts(query: string, page: number = 0, size: number = 30) {
  const cookies = await getWillysCookies();
  const trackingHeaders = generateTrackingHeaders();
  
  const encodedQuery = encodeURIComponent(query);
  const url = `https://www.willys.se/search?q=${encodedQuery}&page=${page}&size=${size}`;
  
  const response = await fetch(url, {
    headers: {
      ...searchHeaders,
      ...trackingHeaders,
      cookie: cookies
    }
  });
  
  return response.text(); // Returns HTML that needs parsing
}
```

### Autocomplete Function

```typescript
export async function getSearchSuggestions(term: string) {
  const cookies = await getWillysCookies();
  const trackingHeaders = generateTrackingHeaders();
  
  const encodedTerm = encodeURIComponent(term);
  const url = `https://www.willys.se/search/autocomplete/SearchBox?term=${encodedTerm}`;
  
  const response = await fetch(url, {
    headers: {
      ...searchHeaders,
      ...trackingHeaders,
      cookie: cookies
    }
  });
  
  return response.json(); // Returns JSON with suggestions
}
```

## Next Steps

1. **Implement Search Functions**: Add `searchProducts` and `getSearchSuggestions` to MCP server
2. **Add Search Tools**: Create MCP tools for search functionality
3. **Parse Search Results**: Implement HTML/JSON parsing for search results
4. **Add Web UI**: Integrate search functionality into the web interface
5. **Testing**: Validate search implementation with various queries

## Test Data

The following search terms were successfully tested:
- `mjölk` (milk) - 61 results
- `bröd` (bread) - 61 results  
- `äpplen` (apples) - 17 results

All searches returned relevant products with proper pagination and product details.