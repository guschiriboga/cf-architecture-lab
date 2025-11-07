# Pattern: Edge API + R2 (Free Tier)

## Use cases
- Static media, uploads, simple asset APIs.

## Building blocks
- Workers (request routing, auth, validation)
- R2 (object storage)

## Considerations
- Stay within free-tier operation classes.
- Validate object keys; prefer presigned upload flows.

## Next
- Fill limits from docs and add a sample Worker binding.
