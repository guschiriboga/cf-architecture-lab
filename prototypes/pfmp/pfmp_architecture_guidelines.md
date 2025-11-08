# PFMP Cloudflare Deployment Architecture

## Frontend code validation
- The uploaded project (`pfmp-figma-frontend`) is a Vite + React application written entirely in TypeScript/TSX (`App.tsx`, `main.tsx`, plus component files under `src/components`).
- Build tooling relies on Vite (`vite.config.ts`) with TypeScript dependencies captured in `package.json`.

## Frontend deployment
### Cloudflare Pages
- **Why**: Native support for static frontends built with Vite/React. Automatic builds from Git or direct uploads keep the workflow simple.
- **Build settings**: `npm install`, `npm run build`, output directory `dist/`.
- **Runtime model**: Ship the compiled assets to Pages and expose any server-side logic via a dedicated Workers API (`api.pfmp.example.com`) or Pages Functions if colocated in the same repo.

## Backend architecture (Cloudflare Workers + D1)
### Core runtime
- Author the API in TypeScript and deploy with Wrangler as a standalone Worker (`pfmp-api`).
- Map `/api/*` routes from Pages to the Worker via Cloudflare routing rules or a custom subdomain.

### Data layer
- **Database**: Cloudflare D1 (SQLite-compatible) for all relational data.
- **ORM & migrations**: Use Drizzle ORM with its D1 adapter to model tables and emit SQL migrations (`drizzle-kit generate`). Apply migrations through `wrangler d1 migrations apply` in CI/CD.

### API design
- Prefer a REST-style JSON API using a lightweight framework such as Hono for routing and validation.
   - Hono Docs https://hono.dev/docs/
   - Hono Examples https://hono.dev/examples/
- Implement authentication middleware (e.g., session token verification) directly in the Worker; integrate with Cloudflare Turnstile only if bot mitigation becomes necessary.
- Add structured error handling and logging via `wrangler tail`/Workers Logs for observability.

### Local development workflow
1. Scaffold the Worker with `npm create cloudflare@latest` (select “Hello World” Worker + TypeScript).
2. Install project dependencies: `wrangler`, `hono` (or chosen router), `drizzle-orm`, `drizzle-kit`.
3. Define the D1 binding in `wrangler.toml`:
   ```toml
   [[d1_databases]]
   binding = "DB"
   database_name = "pfmp"
   database_id = "<generated-id>"
   ```
4. Create Drizzle schema files (e.g., `src/db/schema.ts`) and generate migrations. Use `wrangler d1 execute` to seed sample data during development.
5. Run `wrangler dev --local` to simulate the Worker and connect the Vite dev server via a proxy (Pages dev server or Vite proxy configuration for `/api`).

### Deployment pipeline
- **Frontend**: Connect the GitHub repo to Cloudflare Pages; configure build command (`npm run build`) and `dist/` output. Enable preview deploys per branch.
- **Backend**: Use GitHub Actions with `cloudflare/wrangler-action` to run Drizzle migrations and publish the Worker on merges to main. Bind the D1 database in the production environment within Cloudflare dashboard or via `wrangler secret put`/`wrangler d1` commands.
- **Routing**: Attach the Worker to `api.<domain>` or `/api/*` path on the main domain through Cloudflare’s Worker routes. Update the frontend to reference this API base URL via environment variables.

## Final architecture summary
1. **Frontend**: Vite/React bundle deployed on Cloudflare Pages. Build artifacts served globally from Pages CDN with automatic previews.
2. **Backend**: Dedicated Cloudflare Worker written in TypeScript, exposing REST endpoints and connected to a D1 database for relational persistence.
3. **Migrations**: Drizzle ORM manages schema definitions and migrations, executed through Wrangler in CI/CD before each deploy.
4. **Observability & ops**: Use Wrangler for deployments, `wrangler tail` for live logs, and D1 dashboards for query inspection. No additional Cloudflare products (KV, Durable Objects, Cron, Queues, Webhooks) are required at this stage, reducing operational complexity while leaving room to extend later.

This streamlined setup matches the current requirements—TypeScript everywhere, Cloudflare-native hosting, and a relational SQLite backend—while keeping optional services on standby until the product needs them.
