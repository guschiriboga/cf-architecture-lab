# Workers KV

**Free plan headline (daily):** 100k reads, 1k writes, 1k deletes, 1k list; 1 GB stored data; value size up to 25 MiB; min cache TTL 260s.  
Sources:
- Pricing: https://developers.cloudflare.com/kv/platform/pricing/
- Limits: https://developers.cloudflare.com/kv/platform/limits/

## Summary
Globally distributed key-value store with eventual consistency; great for config, feature flags, and cached computed results.

## Free Tier
- **Reads/day:** 100,000
- **Writes/day:** 1,000 (1 write/sec to the **same** key)
- **Deletes/day:** 1,000
- **List/day:** 1,000
- **Stored data:** 1 GB (per account and per namespace on Free)
- **Value size:** up to 25 MiB
- **Min cache TTL:** 260 seconds
