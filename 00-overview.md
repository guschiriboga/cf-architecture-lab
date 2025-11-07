# Handbook Overview

This repository organizes **Cloudflare** compute, storage, and database service knowledge into a concise, versioned handbook that we can iterate on while keeping **facts verified** and **templates minimal**.

## Structure
- `10-compute/` – Workers, Pages Functions, Durable Objects (as needed).
- `20-storage/` – R2 (object), Workers KV (key-value).
- `30-databases/` – D1 (SQL/SQLite semantics), Vectorize (embeddings), Hyperdrive (Postgres accelerator).
- `40-templates/` – Minimal, production-conscious starter projects.
- `50-free-tiers/` – Free tier comparison matrix generated from `data/services.yaml`.
- `60-architectures/` – Opinionated patterns with trade-offs and limits.
- `90-links/` – Curated links to official docs (we always cite when pinning facts).

## Conventions
- **Facts & limits** must be backed by Cloudflare **official documentation**.
- Record canonical numbers in `data/services.yaml` so we can render tables consistently.
- When limits change, update the YAML and regenerate the matrix rather than editing many pages manually.
