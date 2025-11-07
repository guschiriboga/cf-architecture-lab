# Workers KV

> **Docs:** https://developers.cloudflare.com/kv/

## Summary
Globally distributed key‑value store with eventual consistency—ideal for config, feature flags, and computed cache.

## Free Tier (selected)
- **Reads/day:** 100,000
- **Writes/day:** 1,000 (≈1 write/sec to same key)
- **Deletes/day:** 1,000; **List/day:** 1,000
- **Stored data:** 1 GB (per account/namespace on Free)
- **Value size:** up to 25 MiB; **Min cache TTL:** 260s

## Notes
- Keep `data/services.yaml` as the canonical source and update when Cloudflare changes limits.
