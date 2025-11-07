# Free Tier Matrix

> Generated from `data/services.yaml` (manual placeholder for now).

| Service   | Category | Free Tier (high level) | Notes |
|-----------|----------|------------------------|-------|
| Workers   | Compute  | requests/day: TBD; CPU: TBD | Verify runtime limits |
| R2        | Storage  | GB-month: TBD; Class A/B: TBD; Egress: TBD | Zero egress policy to confirm |
| D1        | Database | DB count: TBD; size: TBD; ops/day: TBD | Time Travel/backup behavior |
| KV        | Storage  | reads/day: TBD; writes/day: TBD | Eventual consistency |
| Vectorize | Database | indexes: TBD; vectors: TBD | Dimensions & namespaces |
| Hyperdrive| Database | connections: TBD; traffic: TBD | Workers tie-in |

Once `data/services.yaml` is populated, this table should be programmatically rendered.
