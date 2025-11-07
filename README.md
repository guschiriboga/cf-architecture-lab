# cf-architecture-lab

A versioned handbook for **Cloudflare compute, storage, and database services**, curated for designing **free‑tier‑friendly architectures**.

## What this is
- A structured, always‑cited reference for Cloudflare services.
- Machine‑readable limits in `data/services.yaml` to generate tables and guardrails.
- Minimal templates and architecture patterns to kick off projects quickly.

## Structure
- `10-compute/` – Workers, Pages, Durable Objects, Containers, Workflows.
- `20-storage/` – R2, Workers KV, Images.
- `30-databases/` – D1, Vectorize, Hyperdrive, R2 SQL.
- `40-templates/` – Minimal starter projects (Wrangler, code skeletons).
- `50-free-tiers/` – Free tier comparison matrix.
- `60-architectures/` – Opinionated patterns.
- `70-platform/` – Cross‑cutting: Secrets Store (and more as needed).
- `90-links/` – Official docs links (add access dates when pinning facts).

## Branch
Use **Main** as your default branch name.

## License
Private repository. No open‑source license added.

## Next steps
- Keep `data/services.yaml` as the single source of truth for quotas.
- Expand the free‑tier matrix and templates as we validate more services.
