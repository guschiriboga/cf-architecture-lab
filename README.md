# cf-architecture-lab

A lightweight, versioned handbook for **Cloudflare compute, storage, and database services**, curated for designing **free‑tier friendly architectures**.

> **Status:** Repository skeleton initialized. Facts, limits, and citations to official Cloudflare docs will be added in the next pass.

## Goals
- Keep a **single source of truth** for service limits and free tiers in `data/services.yaml`.
- Provide **quick-start architecture patterns** and **minimal templates** for Workers + R2, D1, KV, and Vectorize.
- Offer a ** Free Tier Matrix** for fast design-time decisions.

## How to use
1. Clone this repo to your machine.
2. Read `00-overview.md` to understand the structure and conventions.
3. Browse `10-compute`, `20-storage`, `30-databases` for focused notes.
4. Check `50-free-tiers/matrix.md` for at-a-glance quotas.
5. Explore `40-templates` and `60-architectures` for practical starters.

## Branch
Use **Main** as your default branch name.

## License
Private repository. No open-source license added.

## Next steps
- Populate `data/services.yaml` with verified limits from official docs.
- Fill each service page with **sources + access dates**.
- Generate the first architecture: **Edge API + R2 (Free Tier)**.
