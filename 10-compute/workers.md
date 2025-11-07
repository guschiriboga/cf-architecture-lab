# Workers (Compute)

**Free plan headline:** 100,000 requests/day (resets 00:00 UTC). See runtime limits page for execution semantics and caps.  
Sources: 
- Workers limits: https://developers.cloudflare.com/workers/platform/limits/

## Summary
Cloudflare Workers is a serverless edge runtime used for APIs, transforms, scheduled jobs, and glue for R2, D1, KV, Vectorize, Hyperdrive.

## Free Tier
- **Requests/day:** 100,000
- **Reset time:** 00:00 UTC
- **Notes:** Route behavior can be set to fail open/closed on limit exceed.

## Notes / Gotchas
- CPU/runtime semantics and other per-invocation behaviors change over time—always check the limits page before locking SLOs.
