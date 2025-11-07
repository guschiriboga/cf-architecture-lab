# Vectorize (Vector Database)

> **Docs:** https://developers.cloudflare.com/vectorize/

## Summary
Managed vector indexes for embeddings. Pair with Workers AI or external embedding providers for semantic search and RAG.

## Free Tier (selected)
- **Indexes/account:** 100
- **Vectors/index:** up to 5,000,000
- **Max dimensions:** 1536; **Namespaces/index:** up to 1000
- **Upsert batch:** ~1000 (Workers); ~5000 (HTTP API)

## Notes
- Keep `data/services.yaml` as the canonical source and update when Cloudflare changes limits.
