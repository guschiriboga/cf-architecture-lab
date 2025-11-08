# PFMP Cloudflare Deployment Architecture

## Frontend code validation
- The uploaded project (`pfmp-figma-frontend`) is a Vite + React application written entirely in TypeScript/TSX (`App.tsx`, `main.tsx`, plus component files under `src/components`).
- Build tooling relies on Vite (`vite.config.ts`) with TypeScript dependencies captured in `package.json`.

## Frontend deployment options
### Option A – Cloudflare Pages (recommended)
- **Why**: Native support for static frontends built with Vite/React. Automatic builds from Git or direct uploads. Seamless integration with Pages Functions for per-route serverless logic using the same repository.
- **Build settings**: `npm install`, `npm run build`, output directory `dist/`.
- **Runtime capabilities**: Can call backend APIs hosted on Workers or Pages Functions using the same domain (e.g., `/api/*`). Supports environment variables, KV/D1 bindings, and access to R2 assets when paired with functions.

### Option B – Cloudflare Workers + Assets
- **Why**: If you need full control over request handling, custom caching rules, or streaming SSR, deploy the built assets with Workers using `wrangler` and Workers Sites/`@cloudflare/kv-asset-handler` or the new Assets module.
- **Build**: Same Vite build step. Upload the `dist/` bundle to KV or Assets, and serve via a Worker script written in TypeScript.
- **Trade-offs**: Slightly more operational work than Pages (need to manage KV namespace & deploy workflow), but offers unified codebase if backend logic must sit in a single Worker.

## Backend architecture (Cloudflare-native)
### Core runtime: **Cloudflare Workers** (TypeScript via Wrangler)
- Author the backend in TypeScript; compile/transpile with Wrangler during deploy.
- Workers deliver sub-10ms cold starts globally and integrate with Cloudflare data stores.

### API surface design
- REST or JSON-RPC endpoints exposed via Workers routes (e.g., `/api/*`). Use `itty-router`, Hono, or native `Request` handling.
- Protect authenticated routes with Cloudflare Access JWTs, Turnstile, or custom token logic.

### Data & state options
- **Cloudflare D1**: Managed SQLite for relational data (budgets, transactions, users). Use Workers + Drizzle ORM/TypeScript bindings. Enable database migrations via Wrangler.
- **Cloudflare KV**: For caching, user preference blobs, feature flags.
- **Durable Objects**: For real-time collaboration or per-user session/stateful workflows (e.g., budgeting sessions, notification fan-out).
- **R2**: Store receipts or document uploads; serve via signed URLs.

### Background & integrations
- **Cron Triggers**: Schedule Workers to sync financial data, send reminders, or refresh analytics.
- **Queues**: Reliable asynchronous processing (e.g., ingest bank transaction webhooks) using Workers + Cloudflare Queues.
- **Webhooks**: Publish Worker endpoints to receive third-party events.

### Local development workflow
1. Use `npm create cloudflare@latest` to scaffold a Worker project with TypeScript support.
2. Configure `wrangler.toml` with D1/KV/Durable Objects bindings. Bind the Pages project if sharing repo (`[[d1_databases]]`, `[[kv_namespaces]]`).
3. Develop against `wrangler dev`, optionally proxying the Vite frontend (`npm run dev`) and Worker dev server together via Pages Functions or local reverse proxy.

### Deployment strategy
- **Single repo approach**: Host frontend and backend together in one Git repository. Cloudflare Pages handles the Vite build, while `functions/` directory contains Pages Functions (Workers under the hood) for API routes. Bind D1/KV/R2 via Pages project settings.
- **Split repo approach**: Frontend stays on Pages; backend Worker lives in separate repo deployed with Wrangler GitHub Action. Use custom domain or subdomain (`api.example.com`).

## Recommended solution
1. **Deploy frontend to Cloudflare Pages** for minimal operational overhead, enabling zero-config Vite builds, preview deployments, and integration with Pages Functions for simple APIs.
2. **Implement backend APIs as Cloudflare Workers (or Pages Functions)** written in TypeScript, leveraging D1 for relational data and KV/Durable Objects for caching/state.
3. **Unify infrastructure via Wrangler**: manage environment bindings, migrations, and CI/CD (GitHub Action `cloudflare/pages-action` for frontend, `cloudflare/wrangler-action` for backend).

This design keeps the entire stack in TypeScript, aligns with Cloudflare-native services, and provides a clear growth path from MVP (Pages + Functions) to more advanced capabilities (standalone Workers with Durable Objects, Queues, and R2).
