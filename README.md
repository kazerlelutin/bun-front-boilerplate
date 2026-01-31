# Bun Front Boilerplate

[![Bun](https://img.shields.io/badge/Runtime-Bun-000000?style=flat-square&logo=bun)](https://bun.sh/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Coverage](https://img.shields.io/badge/Coverage-99%25-brightgreen?style=for-the-badge)](https://github.com/kazerlelutin/bento)

Minimal front-end boilerplate: **Bun**, **TypeScript**, HTML/CSS, feature-based architecture, unit tests (Bun) and integration tests (Cucumber).

## Prerequisites

- [Bun](https://bun.sh/) ≥ 1.0

## Installation

```bash
git clone <repository>
cd bun-front-boilerplate
bun install
```

## Scripts

| Command                    | Description                  |
| -------------------------- | ---------------------------- |
| `bun run dev`              | Dev server (hot reload, SPA) |
| `bun test`                 | Unit tests                   |
| `bun run coverage`         | Test coverage                |
| `bun run test:integration` | Cucumber (BDD) tests         |
| `bun run build`            | Production build (`dist/`)   |
| `bun run docs:features`    | Generate feature docs        |
| `bun run badge:coverage`   | Update coverage badge        |
| `bun run sitemap`          | Generate sitemap             |
| `bun run validate:seo`     | Validate sitemap             |

## Structure

```
├── app.ts                 # Entry point
├── index.html             # Main page + templates
├── features/              # Code organized by feature
│   ├── router/            # Navigation, templates, history
│   ├── routes/            # Pages (home, about, …)
│   ├── translate/        # i18n
│   ├── version/           # App version
│   └── …
├── utils/                 # Shared utilities
│   └── tests/integration/ # Cucumber setup (World, Happy DOM)
├── scripts/               # Scripts (build, docs, sitemap, …)
├── public/                # Static assets
├── cucumber.json          # Cucumber config
└── bunfig.toml            # Bun config (tests, preload)
```

## Tests

- **Unit**: `bun test` — `*.test.ts` files, Happy DOM preload in `bunfig.toml`.
- **Integration**: `bun run test:integration` — Gherkin features in `features/**/*.feature`, steps in `features/**/*.steps.ts`. Example: `features/exemple/`.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for conventions and workflow.

## License

MIT — see [LICENSE](./LICENSE).
