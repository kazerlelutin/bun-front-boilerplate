# Contributing Guide

Welcome to the **Bun Front Boilerplate** project. This document explains how to contribute, the project structure, naming conventions, feature organization, testing strategy, and best practices.

---

## 📁 Project Structure & Feature-First Architecture

- **Code is organized by feature** (domain-driven):
  - Each feature has its own folder under `features/` (e.g. `features/router/`, `features/routes/`, `features/translate/`).
  - Sub-features (e.g. pages) are nested inside their parent feature (e.g. `features/routes/home/`, `features/routes/about/`).
  - Shared utilities and types live in the feature folder or in `utils/` when cross-feature.

**Example:**

```
features/
  router/
    router.ts
    router.handlers.ts
    router.state.ts
    router.template.ts
    router.feature
    router.steps.ts
    router.*.test.ts
  routes/
    routes.ts
    routes.feature
    routes.steps.ts
    home/
      home.ctrl.ts
      home.ctrl.test.ts
    about/
      about.ctrl.ts
      about.ctrl.test.ts
      about.const.ts
  translate/
    translate.ts
    translate.store.ts
    translate.utils.ts
    translate.feature
    translate.steps.ts
  version/
  counter/
  multiple-counter/
```

---

## 🏷️ Naming Conventions

- **File names start with the feature name** (e.g. `router.`, `about.`, `home.`).
- **Then the scope**: `ctrl`, `state`, `type`, `utils`, `const`, `feature`, `steps`, `test`.
- **Extensions**: `.ts`, `.test.ts`, `.feature`, `.steps.ts`.
- **Types**: in `*.type.ts` files, one per feature when needed.
- **Controllers**: `*.ctrl.ts` for page/component logic.
- **Utils**: `*.utils.ts` for helpers, next to the feature.
- **Tests**: each file with logic has a corresponding `.test.ts` next to it.
- **Feature files**: `<feature>.feature` in the feature folder; steps in `<feature>.steps.ts`.

**Examples:**

- `router.handlers.ts`, `router.handlers.test.ts`
- `about.ctrl.ts`, `about.ctrl.test.ts`
- `translate.utils.ts`, `translate.utils.test.ts`
- `counter.feature`, `counter.steps.ts`

---

## 🧪 Testing Strategy

- **Unit tests**: Every controller, utility, or state file has a `.test.ts` file next to it.
- **Runtime**: [Bun](https://bun.sh/) (≥ 1.0).
- **Unit test API**: Bun’s built-in test API (`bun:test`), Jest-like.
- **Integration tests**: Cucumber (Gherkin) in `features/**/*.feature`, steps in `features/**/*.steps.ts`.
- **DOM**: Happy DOM is used for unit and integration tests (see `utils/tests/integration/setup.utils.ts` and `bunfig.toml`).
- **Naming**: `<feature>.<scope>.test.ts` (e.g. `about.ctrl.test.ts`).
- **Coverage**: Aim for high coverage on logic files; run `bun run coverage`.

| Command                    | Description            |
| -------------------------- | ---------------------- |
| `bun test`                 | Unit tests             |
| `bun run coverage`         | Coverage report        |
| `bun run test:integration` | Cucumber BDD scenarios |

---

## 🏷️ Tags & Feature Traceability

- **Tag scenarios** in `.feature` files with the feature name (e.g. `@router`, `@routes`, `@translate`).
- Tags help track dependencies and regressions across features.
- Use **Background** only for shared context/setup, not for cross-feature behavior.

---

## 🧩 Feature File Guidelines (Gherkin)

- **One feature per file**: Each `.feature` describes only that feature’s behavior.
- **Implemented behavior only**: No speculative or “future” scenarios.
- **Atomic scenarios**: One behavior or flow per scenario.
- **Tag external dependencies** so impacts are visible.

---

## 🚦 Workflow & Pull Requests

1. **Create a branch**
   - e.g. `feature/<name>`, `fix/<description>`.
2. **Implement and test**
   - Add or update unit tests; add/update Cucumber scenarios if behavior changes.
3. **Documentation**
   - Update README, `docs/`, or this CONTRIBUTING file when conventions or setup change.
4. **Open a Pull Request**
   - Reference related issue/ticket.
   - Describe changes and why; mention new or affected features/tags.
5. **Review & merge**
   - Ensure `bun test` and `bun run test:integration` pass.

---

## 🧹 Clean Code Principles

- **Single responsibility**: One clear purpose per file/module.
- **Explicit dependencies**: Import from the feature or shared `utils/`, avoid unnecessary cross-feature imports.
- **No dead code**: Remove unused code and obsolete comments.
- **Loose coupling**: Keep features as independent as possible.
- **Comments and tags**: Document non-obvious and cross-feature logic.

---

## 💡 Example: Adding a New Route/Page

1. Add the route in `features/routes/routes.ts` (and types in `routes.type.ts` if needed).
2. Create a folder, e.g. `features/routes/mypage/`.
3. Add files:
   - `mypage.ctrl.ts` (controller)
   - `mypage.ctrl.test.ts` (unit tests)
   - `mypage.feature` (optional, if you add BDD scenarios for this page)
4. Register template and controller in the app (see `app.ts` and existing routes).
5. Tag scenarios that touch other features (e.g. `@router`, `@routes`).
6. Update docs (e.g. README structure, feature docs) if needed.

---

## 🤝 Thank you for contributing

Following structure, naming, and testing conventions keeps the boilerplate maintainable and easy to extend. For questions, open an issue or ask in your Pull Request.
