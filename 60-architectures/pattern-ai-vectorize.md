# Pattern: AI Semantic Search with Vectorize

## Use cases
- RAG snippets, content search, recommendations.

## Building blocks
- Workers (API & query orchestration)
- Vectorize (index)
- Optional: Workers AI / external embeddings provider

## Considerations
- Dimensionality consistency; batch upserts.
- Cost control: index sizing and deletion.

## Next
- Add minimal ingestion/query handlers post‑verification.
