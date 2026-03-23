# Publishing the Generated SDK

This project can generate a TypeScript SDK from the OpenAPI spec and publish it as an npm package.

## What this achieves
- Type-safe API client generated from the backend contract
- Versioned package for reuse by web/mobile/other services

## One-time setup
1. Pick a package name + scope.
2. Update the SDK package metadata in `openapi-generator.config.json`:
   - `npmName`: e.g. `@your-scope/shopbox-sdk`
   - `npmVersion`: e.g. `0.1.0`

## Generate + publish
```bash
pnpm run sdk:publish
```

This will:
1. Generate `generated/openapi.json`
2. Generate the SDK at `generated/clients/shopbox-sdk`
3. Build the SDK
4. Publish to npm

## Install in another app
```bash
pnpm add @your-scope/shopbox-sdk
```

## Versioning
Before publishing a new version:
1. Update `npmVersion` in `openapi-generator.config.json`
2. Run `pnpm run sdk:publish`

## Notes
- `openapi-generator-cli` requires Java installed locally.
- For private packages, remove `--access public` in `sdk:publish`.
