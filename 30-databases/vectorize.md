# Vectorize (Vector Database)

**Free plan headline:** Up to **100 indexes** per account; **5,000,000 vectors per index**; **1536 dims**; up to **1000 namespaces per index**.  
Sources:
- Limits: https://developers.cloudflare.com/vectorize/platform/limits/
- Pricing FAQ: https://developers.cloudflare.com/vectorize/platform/pricing/

## Summary
Managed vector indexes for embeddings; pair with Workers AI or external embeddings for semantic search, RAG, and recommendations.

## Free Tier (selected limits)
- **Indexes/account:** 100
- **Vectors/index:** up to 5,000,000
- **Max dimensions:** 1536 (float32)
- **Namespaces/index:** up to 1000
- **Upsert batch:** 1000 via Workers (5000 via HTTP API)
- **topK:** up to 20 (when returning values/metadata); up to 100 (without)
