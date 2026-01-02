## CSRF request
is done before some requests, like add to cart

fetch("https://www.willys.se/axfood/rest/csrf-token", {
  "headers": {
    "accept": "*/*",
    "accept-language": "sv-SE,sv;q=0.9,en-US;q=0.8,en-SE;q=0.7,en-GB;q=0.6,en;q=0.5",
    "content-type": "application/json",
    "newrelic": "eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjExNTQxOTYiLCJhcCI6Ijc3MjMyNDIwMyIsImlkIjoiNWFlNDA5MWU5Mjg0YjY2OSIsInRyIjoiNWQyNDEzNDU0OTJmMTliMzdkYzdkY2QyYWMzODEzNjIiLCJ0aSI6MTc1NjU0MzM0MTcyNH19",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Not;A=Brand\";v=\"99\", \"Google Chrome\";v=\"139\", \"Chromium\";v=\"139\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "traceparent": "00-5d241345492f19b37dc7dcd2ac381362-5ae4091e9284b669-01",
    "tracestate": "1154196@nr=0-1-1154196-772324203-5ae4091e9284b669----1756543341724"
  },
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
});

## Response

"31a77e3e-174c-47dc-8f56-3feaf9c91978"