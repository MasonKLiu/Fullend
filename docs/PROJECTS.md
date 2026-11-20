# 專案來源與建置資訊

由 `npm run doctor` 從目前下載版本產生。原始碼下載與 Fullend 平台測試不等於各上游應用已建置。

## ui-ux-pro-max

- 上游來源： https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- 本地路徑： repos/nextlevelbuilder--ui-ux-pro-max-skill
- 來源版本： 2de1134dc4d1cfe112934611ae5803ae17a1bd7e
- 授權： "See licenseFiles"
- 授權檔： repos/nextlevelbuilder--ui-ux-pro-max-skill/LICENSE
- 套件管理工具： See upstream README
- 建置狀態： not-run
- 使用方式： 讀取 SKILL.md；依賴依個別技能需求

```json
{
  "engines": null,
  "scripts": {}
}
```

## canvas-design

- 上游來源： https://github.com/anthropics/skills
- 本地路徑： repos/anthropics--skills/skills/canvas-design
- 來源版本： e4bb5d960d87126ff3b3a8af1a104b7db67560ba
- 授權： "See licenseFiles"
- 授權檔： repos/anthropics--skills/skills/canvas-design/LICENSE.txt
- 套件管理工具： See upstream README
- 建置狀態： not-run
- 使用方式： 讀取 SKILL.md；依賴依個別技能需求

```json
{
  "engines": null,
  "scripts": {}
}
```

## pptx

- 上游來源： https://github.com/anthropics/skills
- 本地路徑： repos/anthropics--skills/skills/pptx
- 來源版本： e4bb5d960d87126ff3b3a8af1a104b7db67560ba
- 授權： "See licenseFiles"
- 授權檔： repos/anthropics--skills/skills/pptx/LICENSE.txt
- 套件管理工具： See upstream README
- 建置狀態： not-run
- 使用方式： 讀取 SKILL.md；依賴依個別技能需求

```json
{
  "engines": null,
  "scripts": {}
}
```

## theme-factory

- 上游來源： https://github.com/anthropics/skills
- 本地路徑： repos/anthropics--skills/skills/theme-factory
- 來源版本： e4bb5d960d87126ff3b3a8af1a104b7db67560ba
- 授權： "See licenseFiles"
- 授權檔： repos/anthropics--skills/skills/theme-factory/LICENSE.txt
- 套件管理工具： See upstream README
- 建置狀態： not-run
- 使用方式： 讀取 SKILL.md；依賴依個別技能需求

```json
{
  "engines": null,
  "scripts": {}
}
```

## stitch-skills

- 上游來源： https://github.com/google-labs-code/stitch-skills
- 本地路徑： repos/google-labs-code--stitch-skills
- 來源版本： 4cf4db8e4143b09e40f9bc887429d81f41ab3947
- 授權： "See licenseFiles"
- 授權檔： repos/google-labs-code--stitch-skills/LICENSE
- 套件管理工具： See upstream README
- 建置狀態： not-run
- 使用方式： 讀取 SKILL.md；依賴依個別技能需求

```json
{
  "engines": null,
  "scripts": {}
}
```

## frontend-design

- 上游來源： https://github.com/anthropics/skills
- 本地路徑： repos/anthropics--skills/skills/frontend-design
- 來源版本： e4bb5d960d87126ff3b3a8af1a104b7db67560ba
- 授權： "See licenseFiles"
- 授權檔： repos/anthropics--skills/skills/frontend-design/LICENSE.txt
- 套件管理工具： See upstream README
- 建置狀態： not-run
- 使用方式： 讀取 SKILL.md；依賴依個別技能需求

```json
{
  "engines": null,
  "scripts": {}
}
```

## design-md

- 上游來源： https://github.com/google-labs-code/design.md
- 本地路徑： repos/google-labs-code--design.md
- 來源版本： db977b3c1d1f309269f43d5d17ae828d54bd6ae3
- 授權： "See licenseFiles"
- 授權檔： repos/google-labs-code--design.md/LICENSE
- 套件管理工具： bun@1.3.9
- 建置狀態： not-run
- 使用方式： 讀取規格；不需要應用程式建置

```json
{
  "engines": null,
  "scripts": {
    "build": "turbo build",
    "test": "turbo test",
    "lint": "turbo lint",
    "cli": "bun run packages/cli/src/index.ts"
  }
}
```

## astryx

- 上游來源： https://github.com/meta/astryx
- 本地路徑： repos/meta--astryx
- 來源版本： cf8cff50c371df44b24230cebad2ce37b8674231
- 授權： "MIT"
- 授權檔： repos/meta--astryx/LICENSE
- 套件管理工具： pnpm@11.10.0
- 建置狀態： not-run
- 使用方式： 使用上游指定的套件管理工具安裝依賴，再依下列指令建置

```json
{
  "engines": null,
  "scripts": {
    "build": "pnpm -F @astryxdesign/build build && pnpm -F @astryxdesign/core build && pnpm -F @astryxdesign/lab build && pnpm -F @astryxdesign/charts build && pnpm -F @astryxdesign/richtext build && pnpm -F @astryxdesign/vega build && pnpm -F @astryxdesign/native build && pnpm -F @astryxdesign/theme-neutral build && pnpm -F @astryxdesign/theme-matcha build && pnpm -F @astryxdesign/theme-stone build && pnpm -F @astryxdesign/theme-gothic build && pnpm -F @astryxdesign/theme-chocolate build && pnpm -F @astryxdesign/theme-y2k build && pnpm -F @astryxdesign/theme-butter build && pnpm -F @astryxdesign/theme-probe build && pnpm bundle:cli-themes && pnpm bundle:cli-official-packages && pnpm -F @astryxdesign/cli sync:api-types",
    "bundle:cli-themes": "node scripts/generate-cli-themes.mjs",
    "bundle:cli-official-packages": "node scripts/generate-cli-official-packages.mjs",
    "generate:neutral-palette-refs": "node scripts/generate-neutral-palette-refs.mjs",
    "check:neutral-palette-refs": "node scripts/generate-neutral-palette-refs.mjs --check",
    "generate:stone-palette-refs": "node scripts/generate-stone-palette-refs.mjs",
    "check:stone-palette-refs": "node scripts/generate-stone-palette-refs.mjs --check",
    "generate:gothic-palette-refs": "node scripts/generate-gothic-palette-refs.mjs",
    "check:gothic-palette-refs": "node scripts/generate-gothic-palette-refs.mjs --check",
    "generate:matcha-palette-refs": "node scripts/generate-matcha-palette-refs.mjs",
    "check:matcha-palette-refs": "node scripts/generate-matcha-palette-refs.mjs --check",
    "generate:butter-palette-refs": "node scripts/generate-butter-palette-refs.mjs",
    "check:butter-palette-refs": "node scripts/generate-butter-palette-refs.mjs --check",
    "generate:y2k-palette-refs": "node scripts/generate-y2k-palette-refs.mjs",
    "check:y2k-palette-refs": "node scripts/generate-y2k-palette-refs.mjs --check",
    "dev": "pnpm -F @astryxdesign/storybook dev",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:coverage": "vitest --coverage",
    "test:ui": "vitest run --project ui",
    "test:ui:isolated": "vitest run --project perf --no-file-parallelism",
    "test:node": "vitest run --project node",
    "test:build": "vitest run packages/build/src/packed-consumer.test.mjs --project node --maxWorkers=1 && pnpm -F @astryxdesign/build build && node .github/scripts/theme-layer-cascade.js && ASTRYX_STYLEX_BROWSER=1 vitest run scripts/stylex-module-resolution.browser.test.mjs --project node --maxWorkers=1 && ASTRYX_TURBOPACK_E2E=1 vitest run packages/build/src/next.turbopack.test.mjs --project node --maxWorkers=1",
    "test:theme-family": "pnpm -F @astryxdesign/core build && pnpm -F @astryxdesign/sandbox generate:theme-family && node .github/scripts/theme-family-cascade.js",
    "test:a11y-contract": "playwright test --config playwright.config.ts --project chromium",
    "test:a11y-contract:pr": "node .github/scripts/a11y-pr-contracts.mjs",
    "test:docsite-browser": "playwright test --config apps/docsite/playwright.config.ts",
    "test:interaction": "playwright test --config playwright.interaction.config.ts",
    "storyboards": "playwright test --config playwright.interaction.config.ts --grep @storyboard",
    "typecheck": "pnpm -r --no-bail --workspace-concurrency=1 --if-present --filter \"!@astryxdesign/docsite\" --filter \"!@astryxdesign/sandbox\" run typecheck",
    "check:package-boundaries": "node scripts/check-package-boundaries.js",
    "check:component-import-boundaries": "node scripts/check-component-import-boundaries.mjs",
    "size:pages": "node scripts/measure-reference-pages.mjs",
    "check:repo": "pnpm check:visual-owner && pnpm check:published-manifests && pnpm check:sync && pnpm check:neutral-palette-refs && pnpm check:stone-palette-refs && pnpm check:gothic-palette-refs && pnpm check:matcha-palette-refs && pnpm check:butter-palette-refs && pnpm check:y2k-palette-refs && pnpm check:data-tokens && pnpm check:token-docs && pnpm check:motion-roles && pnpm check:knowledge && pnpm check:package-boundaries && pnpm check:changesets && pnpm check:demo-media && pnpm check:executable-bits && pnpm check:cli-structure && pnpm check:use-client && pnpm check:portable-scripts && pnpm check:i18n-runtime && pnpm check:i18n-catalog && pnpm check:cldr-weekdays && pnpm check:cldr-month-capitals && pnpm check:fixtures && pnpm check:setup-contract && pnpm check:agent-plugin-skill",
    "check:visual-owner": "node scripts/check-visual-workflow-owner.mjs",
    "check:fixtures": "node internal/vibe-tests/scripts/fixture-suite.mjs verify",
    "generate:agent-plugin-skill": "node scripts/generate-agent-plugin-skill.mjs",
    "check:agent-plugin-skill": "node scripts/generate-agent-plugin-skill.mjs --check",
    "generate:cldr-weekdays": "node scripts/generate-cldr-weekdays.mjs",
    "check:cldr-weekdays": "node scripts/generate-cldr-weekdays.mjs --check",
    "generate:cldr-month-capitals": "node scripts/generate-cldr-month-capitals.mjs",
    "check:cldr-month-capitals": "node scripts/generate-cldr-month-capitals.mjs --check",
    "check:changesets": "node scripts/check-changesets.mjs",
    "check:portable-scripts": "node scripts/check-portable-scripts.mjs",
    "check:cli-structure": "node scripts/check-cli-structure.mjs",
    "check:setup-contract": "node scripts/generate-setup-contract.mjs --check",
    "generate:setup-contract": "node scripts/generate-setup-contract.mjs",
    "check:executable-bits": "node scripts/check-executable-bits.mjs",
    "check:demo-media": "node scripts/check-demo-media.mjs",
    "generate:i18n-runtime": "node scripts/generate-i18n-runtime.mjs",
    "check:i18n-runtime": "node scripts/generate-i18n-runtime.mjs --check",
    "check:i18n-catalog": "node scripts/check-i18n-catalog.mjs",
    "check:sync": "node scripts/check-sync.js",
    "generate:data-tokens": "node scripts/generate-data-tokens.mjs",
    "check:data-tokens": "node scripts/generate-data-tokens.mjs --check",
    "generate:token-docs": "node scripts/generate-token-docs.mjs",
    "check:token-docs": "node scripts/generate-token-docs.mjs --check",
    "generate:motion-roles": "node scripts/generate-motion-roles.mjs",
    "check:motion-roles": "node scripts/generate-motion-roles.mjs --check",
    "check:use-client": "node scripts/check-use-client.mjs",
    "lint": "pnpm check:repo && eslint . --cache",
    "lint:strict": "pnpm check:repo && ASTRYX_STRICT_LINT=1 eslint . --cache",
    "visual:probe-theme": "node .github/scripts/visual-gate/generate-probe-theme.mjs",
    "visual:probe-theme:check": "node .github/scripts/visual-gate/generate-probe-theme.mjs --check",
    "visual:plan": "node .github/scripts/visual-gate/gate.mjs plan",
    "visual:check": "node .github/scripts/visual-gate/gate.mjs check",
    "visual:flaky": "node .github/scripts/visual-gate/gate.mjs flaky",
    "a11y:audit": "node .github/scripts/accessibility-audit.js --baseline .github/a11y-baseline.json --fail-on-new",
    "a11y:baseline": "node .github/scripts/accessibility-audit.js --baseline .github/a11y-baseline.json --update-baseline",
    "rtl:audit": "node apps/storybook/rtl-audit/rtl-audit.mjs",
    "lab:readiness": "node internal/lab-readiness/audit.mjs",
    "lab:readiness:check": "node internal/lab-readiness/audit.mjs --check",
    "guard:modal-close": "node .github/scripts/modal-close-visibility.js",
    "guard:modal-close:webkit": "node .github/scripts/modal-close-visibility.js --browser webkit",
    "guard:theme-vars": "node .github/scripts/theme-var-reachability.js",
    "guard:theme-layers": "node .github/scripts/theme-layer-cascade.js",
    "guard:disabled-hover": "node .github/scripts/disabled-hover-audit.js",
    "guard:pressed-overlay": "node .github/scripts/pressed-overlay-cascade.js",
    "guard:press-release-fade": "node .github/scripts/press-release-fade.js",
    "guard:disabled-cursor": "node .github/scripts/disabled-cursor-audit.js",
    "storybook": "pnpm -F @astryxdesign/storybook dev",
    "storybook:build": "pnpm -F @astryxdesign/storybook build",
    "docsite": "pnpm -F @astryxdesign/docsite dev",
    "sync:exports": "node scripts/sync-exports.js",
    "sync:exports:check": "node scripts/sync-exports.js --check",
    "astryx": "pnpm -F @astryxdesign/cli astryx",
    "package:source": "node scripts/package-source.js",
    "changeset": "changeset",
    "changeset:new": "node scripts/changeset-new.mjs",
    "version-packages": "node scripts/release/version-packages.mjs && node scripts/promote-codemod-next.mjs && node scripts/sync-internal-deps.mjs && node scripts/format-changelogs.mjs",
    "format-changelogs": "node scripts/format-changelogs.mjs",
    "setup-trusted-publishing": "node scripts/npm/setup-trusted-publishing.mjs",
    "verify-exports": "node scripts/verify-exports.mjs",
    "prepare": "node scripts/generate-i18n-runtime.mjs --best-effort && husky install",
    "dev:sandbox": "pnpm -F @astryxdesign/core build && pnpm -F @astryxdesign/sandbox dev",
    "dev:sandbox:source": "pnpm generate:i18n-runtime && ASTRYX_SOURCE=1 pnpm -F @astryxdesign/sandbox dev",
    "npm:prune-canaries": "node scripts/npm/prune-canaries.mjs",
    "check:knowledge": "node scripts/check-knowledge.mjs",
    "review:pre": "node scripts/pre-review.mjs",
    "preflight": "node scripts/preflight.mjs",
    "specs:for": "node scripts/specs-for-file.mjs",
    "check:published-manifests": "node scripts/npm/published-manifests.mjs"
  }
}
```

## shadcn-ui

- 上游來源： https://github.com/shadcn-ui/ui
- 本地路徑： repos/shadcn-ui--ui
- 來源版本： 968d8cb9dc42ae5d52e8fd356cf84596ec832a26
- 授權： "MIT"
- 授權檔： repos/shadcn-ui--ui/LICENSE.md
- 套件管理工具： pnpm@10.33.4
- 建置狀態： not-run
- 使用方式： 使用上游指定的套件管理工具安裝依賴，再依下列指令建置

```json
{
  "engines": null,
  "scripts": {
    "build": "turbo run build",
    "build:packages": "turbo run build --filter=./packages/*",
    "registry:build": "pnpm --filter=v4 registry:build && pnpm lint:fix && pnpm format:write -- --loglevel silent",
    "registry:capture": "pnpm --filter=v4 registry:capture",
    "registry:health": "turbo run registry:health --filter=v4",
    "registry:health:prepare": "turbo run registry:health:prepare --filter=v4",
    "registry:health:check": "turbo run registry:health:check --filter=v4",
    "registry:health:publish": "turbo run registry:health:publish --filter=v4",
    "explore:capture": "pnpm --filter=v4 explore:capture",
    "dev": "turbo run dev",
    "shadcn:dev": "turbo run dev --filter=shadcn...",
    "shadcn": "pnpm --filter=shadcn start:dev",
    "shadcn:prod": "pnpm --filter=shadcn start:prod",
    "shadcn:build": "pnpm --filter=shadcn... build",
    "shadcn:test": "pnpm --filter=shadcn... test",
    "v4:dev": "pnpm --filter=v4 dev",
    "v4:build": "pnpm --filter=v4 build",
    "lint": "turbo run lint",
    "lint:fix": "turbo run lint:fix",
    "preview": "turbo run preview",
    "typecheck": "turbo run typecheck",
    "format:write": "turbo run format:write",
    "format:check": "turbo run format:check",
    "sync:templates": "./scripts/sync-templates.sh \"templates/*\"",
    "check": "turbo lint typecheck format:check",
    "release": "changeset version",
    "pub:beta": "cd packages/shadcn && pnpm pub:beta",
    "pub:rc": "cd packages/shadcn && pnpm pub:rc",
    "pub:release": "cd packages/shadcn && pnpm pub:release",
    "test:dev": "turbo run test --force --only",
    "test": "pnpm --filter=v4 registry:build && start-server-and-test v4:dev http://localhost:4000 test:dev",
    "validate:registries": "pnpm --filter=v4 validate:registries",
    "test:apps": "pnpm --filter=v4 test:apps"
  }
}
```

## tailwindcss

- 上游來源： https://github.com/tailwindlabs/tailwindcss
- 本地路徑： repos/tailwindlabs--tailwindcss
- 來源版本： d49dd3ea67605b1a77f85b506b2b0f6cbe7f685d
- 授權： "MIT"
- 授權檔： repos/tailwindlabs--tailwindcss/LICENSE
- 套件管理工具： pnpm@11.9.0
- 建置狀態： not-run
- 使用方式： 使用上游指定的套件管理工具安裝依賴，再依下列指令建置

```json
{
  "engines": null,
  "scripts": {
    "format": "prettier --write .",
    "lint": "prettier --check . && turbo lint",
    "build": "turbo build --filter=!./playgrounds/*",
    "postbuild": "node ./scripts/pack-packages.mjs",
    "dev": "turbo dev --filter=!./playgrounds/*",
    "test": "cargo test && vitest run --hideSkippedTests",
    "test:integrations": "vitest --root=./integrations",
    "test:ui": "pnpm run --filter=tailwindcss test:ui && pnpm run --filter=@tailwindcss/browser test:ui",
    "tdd": "vitest --hideSkippedTests",
    "bench": "vitest bench",
    "version-packages": "node ./scripts/version-packages.mjs",
    "changelog": "node ./scripts/changelog.mjs",
    "vite": "pnpm run --filter=vite-playground dev",
    "nextjs": "pnpm run --filter=nextjs-playground dev"
  }
}
```

## magic-ui

- 上游來源： https://github.com/magicuidesign/magicui
- 本地路徑： repos/magicuidesign--magicui
- 來源版本： b0b2e4974b1b68cd5278277c6837a27736e20c3a
- 授權： "See licenseFiles"
- 授權檔： repos/magicuidesign--magicui/LICENSE.md
- 套件管理工具： pnpm@9.15.0
- 建置狀態： not-run
- 使用方式： 使用上游指定的套件管理工具安裝依賴，再依下列指令建置

```json
{
  "engines": {
    "node": ">=22.14.0",
    "pnpm": ">=9"
  },
  "scripts": {
    "preinstall": "npx only-allow pnpm",
    "dev": "turbo run dev --parallel",
    "build": "turbo run build",
    "start": "turbo run start",
    "lint": "turbo run lint",
    "lint:fix": "turbo run lint:fix",
    "typecheck": "turbo run typecheck",
    "format:fix": "turbo run format:fix",
    "format:check": "turbo run format:check",
    "registry-deps:check": "pnpm --filter=www registry-deps:check",
    "registry-deps:fix": "pnpm --filter=www registry-deps:fix",
    "build:registry": "pnpm --filter=www build:registry",
    "check": "pnpm lint && pnpm typecheck && pnpm format:check && pnpm registry-deps:check"
  }
}
```

## magic-mcp

- 上游來源： https://github.com/21st-dev/magic-mcp
- 本地路徑： repos/21st-dev--magic-mcp
- 來源版本： 6b5299e8a83ceffa73d4fc4e148905bb3eeeeb55
- 授權： "ISC"
- 授權檔： repos/21st-dev--magic-mcp/LICENSE
- 套件管理工具： See upstream README
- 建置狀態： not-run
- 使用方式： 使用上游指定的套件管理工具安裝依賴，再依下列指令建置

```json
{
  "engines": {
    "node": ">=18.0.0"
  },
  "scripts": {
    "build": "tsc && shx chmod +x dist/*.js",
    "prepublishOnly": "npm run build",
    "start": "node dist/index.js"
  }
}
```

## figma-context-mcp

- 上游來源： https://github.com/GLips/Figma-Context-MCP
- 本地路徑： repos/GLips--Figma-Context-MCP
- 來源版本： c083d65c7e002923e7cb98f4e3bdafb105e90f6d
- 授權： "MIT"
- 授權檔： repos/GLips--Figma-Context-MCP/LICENSE
- 套件管理工具： pnpm@10.10.0
- 建置狀態： not-run
- 使用方式： 使用上游指定的套件管理工具安裝依賴，再依下列指令建置

```json
{
  "engines": {
    "node": ">=20.20.0"
  },
  "scripts": {
    "build": "tsup --dts",
    "type-check": "tsc --noEmit",
    "test": "vitest run",
    "start": "node dist/bin.js",
    "start:cli": "cross-env NODE_ENV=cli node dist/bin.js",
    "start:http": "node dist/bin.js",
    "dev": "cross-env NODE_ENV=development tsup --watch",
    "dev:cli": "cross-env NODE_ENV=development tsup --watch -- --stdio",
    "lint": "eslint .",
    "format": "prettier --write \"src/**/*.ts\"",
    "inspect": "pnpx @modelcontextprotocol/inspector",
    "benchmark:simplify": "tsx scripts/benchmark-simplify.ts",
    "prepack": "pnpm build"
  }
}
```

## penpot

- 上游來源： https://github.com/penpot/penpot
- 本地路徑： repos/penpot--penpot
- 來源版本： fd785b8246d41e399911a36cfd0f2d53c0500a8f
- 授權： "MPL-2.0"
- 授權檔： repos/penpot--penpot/LICENSE
- 套件管理工具： pnpm@12.21.0+sha512.66fd8278ee28935ce951792d34367ff3af5c432a2756445823029533835b8da529bbe0be5130afd56ed0713fb8789e47bad82d93bd5ae2fe54b15562d6276ef0
- 建置狀態： not-run
- 使用方式： 使用上游指定的套件管理工具安裝依賴，再依下列指令建置

```json
{
  "engines": null,
  "scripts": {}
}
```

## excalidraw

- 上游來源： https://github.com/excalidraw/excalidraw
- 本地路徑： repos/excalidraw--excalidraw
- 來源版本： d732d4f3d50e6ac092ec6e86a4e04a40546a9395
- 授權： "See licenseFiles"
- 授權檔： repos/excalidraw--excalidraw/LICENSE
- 套件管理工具： yarn@1.22.22
- 建置狀態： not-run
- 使用方式： 使用上游指定的套件管理工具安裝依賴，再依下列指令建置

```json
{
  "engines": {
    "node": ">=18.0.0"
  },
  "scripts": {
    "build-node": "node ./scripts/build-node.js",
    "build:app:docker": "yarn --cwd ./excalidraw-app build:app:docker",
    "build:app": "yarn --cwd ./excalidraw-app build:app",
    "build:common": "yarn --cwd ./packages/common build:esm",
    "build:element": "yarn --cwd ./packages/element build:esm",
    "build:excalidraw": "yarn --cwd ./packages/excalidraw build:esm",
    "build:math": "yarn --cwd ./packages/math build:esm",
    "build:fractional-indexing": "yarn --cwd ./packages/fractional-indexing build:esm",
    "build:laser-pointer": "yarn --cwd ./packages/laser-pointer build:esm",
    "build:packages": "yarn build:common && yarn build:fractional-indexing && yarn build:laser-pointer && yarn build:math && yarn build:element && yarn build:excalidraw",
    "build:version": "yarn --cwd ./excalidraw-app build:version",
    "stats:bundle": "yarn --cwd ./excalidraw-app cross-env VITE_APP_ENABLE_TRACKING=true vite build --config ../scripts/stats/vite.config.mts",
    "stats:perf": "node ./scripts/stats/perf.mjs",
    "stats:compare": "node ./scripts/stats/perf.mjs --compare",
    "build": "yarn --cwd ./excalidraw-app build",
    "build:preview": "yarn --cwd ./excalidraw-app build:preview",
    "start": "yarn --cwd ./excalidraw-app start",
    "start:production": "yarn --cwd ./excalidraw-app start:production",
    "start:example": "yarn build:packages && yarn --cwd ./examples/with-script-in-browser start",
    "test:all": "yarn test:typecheck && yarn test:code && yarn test:other && yarn test:app --watch=false",
    "test:app": "vitest",
    "test:code": "eslint --max-warnings=0 --ext .js,.ts,.tsx .",
    "test:other": "yarn prettier --list-different",
    "test:typecheck": "tsc",
    "test:update": "yarn test:app --update --watch=false",
    "test": "yarn test:app",
    "test:coverage": "vitest --coverage",
    "test:coverage:watch": "vitest --coverage --watch",
    "test:ui": "yarn test --ui --coverage.enabled=true",
    "fix:code": "yarn test:code --fix",
    "fix:other": "yarn prettier --write",
    "fix": "yarn fix:other && yarn fix:code",
    "locales-coverage": "node scripts/build-locales-coverage.js",
    "locales-coverage:description": "node scripts/locales-coverage-description.js",
    "prepare": "husky install",
    "prettier": "prettier \"**/*.{css,scss,json,md,html,yml}\" --ignore-path=.eslintignore",
    "release": "node scripts/release.js",
    "release:test": "node scripts/release.js --tag=test",
    "release:next": "node scripts/release.js --tag=next",
    "release:latest": "node scripts/release.js --tag=latest",
    "rm:build": "rimraf --glob excalidraw-app/build excalidraw-app/dist excalidraw-app/dev-dist packages/*/dist packages/*/build examples/*/build examples/*/dist",
    "rm:node_modules": "rimraf --glob node_modules excalidraw-app/node_modules packages/*/node_modules",
    "clean-install": "yarn rm:node_modules && yarn install"
  }
}
```

## tldraw

- 上游來源： https://github.com/tldraw/tldraw
- 本地路徑： repos/tldraw--tldraw
- 來源版本： 943cb35d0878ea665d4033f5da04855ccc7ea076
- 授權： "See licenseFiles"
- 授權檔： repos/tldraw--tldraw/LICENSE.md
- 套件管理工具： pnpm@12.16.1
- 建置狀態： not-run
- 使用方式： 使用上游指定的套件管理工具安裝依賴，再依下列指令建置

```json
{
  "engines": {
    "npm": ">=7.0.0",
    "node": ">=22.12.0"
  },
  "scripts": {
    "aws-login": "aws sso login --sso-session=tldraw",
    "clean": "internal/scripts/clean.sh",
    "extract-draft-changelog": "tsx internal/scripts/extract-draft-changelog.tsx",
    "preinstall": "node internal/scripts/preinstall.mjs",
    "postinstall": "husky install && pnpm refresh-assets",
    "refresh-assets": "tsx internal/scripts/refresh-assets.ts",
    "dev": "turbo run dev --filter='./apps/examples' --filter='./apps/bemo-worker' --filter='./apps/dotcom/image-resize-worker'",
    "dev-vscode": "code ./apps/vscode/extension && turbo run dev --filter='./apps/vscode/*'",
    "dev-app": "process-compose -f apps/dotcom/process-compose.yaml up",
    "dev-app:clean": "docker compose -f apps/dotcom/zero-cache/docker/docker-compose.yml down --volumes && rm -f /tmp/tldraw-dotcom-zero-dev.db /tmp/tldraw-dotcom-zero-dev.db-shm /tmp/tldraw-dotcom-zero-dev.db-wal && rm -rf apps/dotcom/sync-worker/.wrangler/state-dev apps/dotcom/zero-cache/.schema.js",
    "dev-app:doctor": "process-compose -f apps/dotcom/process-compose.yaml process list",
    "dev-docs": "turbo run dev --filter='./apps/docs'",
    "dev-huppy": "turbo run dev --filter='./internal/huppy'",
    "dev-template": "./internal/scripts/dev-template.sh",
    "build": "turbo run build",
    "build-app": "turbo run build --filter='./apps/dotcom/client'",
    "build-docs": "turbo run build --filter='./apps/docs'",
    "build-types": "turbo run build-types",
    "build-api": "turbo run build-api",
    "build-i18n": "turbo run build-i18n",
    "build-package": "turbo run build --filter='./packages/*'",
    "preview-app": "pnpm build-app && VITE_PREVIEW=1 pnpm dev-app",
    "preview-examples": "turbo run build --filter='./apps/examples' && cd apps/examples && pnpm preview",
    "lint": "tsx internal/scripts/lint.ts",
    "format": "tsx internal/scripts/lint.ts --fix",
    "format-current": "tsx internal/scripts/lint.ts --fix --current",
    "lint-current": "tsx internal/scripts/lint.ts --current",
    "typecheck": "turbo run build-types",
    "profile-typescript": "tsx internal/scripts/profile-typescript.ts",
    "profile-tsserver": "tsx internal/scripts/profile-tsserver.ts",
    "check-packages": "tsx internal/scripts/check-packages.ts",
    "product-manifest": "tsx internal/scripts/product-manifest.ts",
    "check-circular-deps": "tsx internal/scripts/check-circular-deps.ts",
    "update-pr-template": "tsx internal/scripts/update-pr-template.ts",
    "generate-test-licenses": "tsx internal/scripts/generate-test-licenses.ts",
    "license-report": "tsx internal/scripts/license-report.ts",
    "api-check": "turbo run build-api && tsx internal/scripts/api-check.ts",
    "test-ci": "pnpm exec vitest run",
    "test": "pnpm exec vitest",
    "test-coverage": "pnpm exec vitest run --coverage && open-cli coverage/index.html",
    "e2e": "pnpm --filter examples.tldraw.com e2e",
    "e2e-dotcom": "pnpm --filter dotcom e2e",
    "e2e-dotcom-smoke": "pnpm --filter dotcom e2e-smoke",
    "e2e-dotcom-all": "pnpm --filter dotcom e2e-all",
    "e2e-dotcom-x10": "pnpm --filter dotcom e2e-x10",
    "e2e-dotcom-smoke-x10": "pnpm --filter dotcom e2e-smoke-x10",
    "e2e-dotcom-all-x10": "pnpm --filter dotcom e2e-all-x10",
    "i18n-check": "i18n-check",
    "i18n-extract": "tsx internal/scripts/i18n-extract.ts",
    "i18n-upload-strings": "tsx internal/scripts/i18n-upload-strings.ts",
    "i18n-download-strings": "tsx internal/scripts/i18n-download-strings.ts",
    "i18n-fix-strings": "tsx internal/scripts/i18n-fix-strings.ts"
  }
}
```

## lucide

- 上游來源： https://github.com/lucide-icons/lucide
- 本地路徑： repos/lucide-icons--lucide
- 來源版本： de8d11aac831d519d2377ff516868244475fac06
- 授權： "See licenseFiles"
- 授權檔： repos/lucide-icons--lucide/LICENSE
- 套件管理工具： pnpm@11.22.0+sha512.1ff870c4c6133dfd88fb2afc46dd13d47f09c9794b438c6fdb47ca98caf3bc16381ee0be93a091b8e3824cf01f889f46d7d9e20910fb0be1ab0fb5baa80dd621
- 建置狀態： not-run
- 使用方式： 使用上游指定的套件管理工具安裝依賴，再依下列指令建置

```json
{
  "engines": {
    "node": ">=24.11.1"
  },
  "scripts": {
    "build": "pnpm -r --filter './packages/**' build",
    "test": "pnpm -r --filter './packages/**' test",
    "test:update": "pnpm -r --filter './packages/**' --filter !'./packages/lucide-angular' test -- -u",
    "test:integrations:react": "pnpm --filter lucide-react build && pnpm -r --workspace-concurrency=1 --filter './integrations/lucide-react/**' check",
    "test:integrations:solid": "pnpm --filter lucide-solid build && pnpm -r --workspace-concurrency=1 --filter './integrations/lucide-solid/**' check",
    "test:integrations:solid-2": "pnpm --filter @lucide/solid build && pnpm -r --workspace-concurrency=1 --filter './integrations/lucide-solid-2/**' check",
    "test:integrations:vue": "pnpm --filter @lucide/vue build && pnpm -r --workspace-concurrency=1 --filter './integrations/lucide-vue/**' check",
    "test:integrations:svelte": "pnpm --filter @lucide/svelte build && pnpm -r --workspace-concurrency=1 --filter './integrations/lucide-svelte/**' check",
    "test:font": "pnpm --filter build-font test",
    "test:scripts": "node --test scripts/*.test.mts",
    "lucide": "pnpm --filter lucide",
    "lucide-angular": "pnpm --filter lucide-angular",
    "lucide-react": "pnpm --filter lucide-react",
    "lucide-react-native": "pnpm --filter lucide-react-native",
    "lucide-preact": "pnpm --filter lucide-preact",
    "lucide-solid": "pnpm --filter lucide-solid",
    "lucide-vue": "pnpm --filter lucide-vue",
    "lucide-astro": "pnpm --filter @lucide/astro",
    "lucide-vue-next": "pnpm --filter lucide-vue-next",
    "lucide-svelte": "pnpm --filter lucide-svelte",
    "lucide-static": "pnpm --filter lucide-static",
    "build:outline-icons": "pnpm --filter outline-svg start",
    "build:font": "pnpm --filter build-font start",
    "optimize": "node ./scripts/optimizeSvgs.mts",
    "addjsons": "node ./scripts/addMissingIconJsonFiles.mts",
    "checkIcons": "node ./scripts/checkIconsAndCategories.mts",
    "checkLabIcons": "node ./scripts/checkLabIcons.mts",
    "generate:sponsors": "node scripts/updateSponsors.mts",
    "generate:contributors": "node ./scripts/updateContributors.mts icons/*.svg",
    "generate:nextJSAliases": "node ./scripts/generateNextJSAliases.mts",
    "suggest:metadata": "pnpm --filter @lucide/suggest-metadata-action start",
    "suggest:metadata:debug": "pnpm --filter @lucide/suggest-metadata-action debug",
    "suggest:metadata:watch": "pnpm --filter @lucide/suggest-metadata-action watch",
    "postinstall": "husky",
    "lint:es": "eslint . --ignore-pattern 'icons/*.json' --ignore-pattern 'categories/*.json' --ignore-pattern 'groups/*.json'",
    "lint:format": "prettier \"**/*.{js,mjs,ts,jsx,tsx,html,css,scss,json,yml,yaml}\" --check",
    "lint:format-fix": "prettier \"**/*.{js,mjs,ts,jsx,tsx,html,css,scss,json,yml,yaml}\" --write",
    "lint:icons": "prettier \"icons/*.svg\" --check",
    "lint:icons-fix": "prettier \"icons/*.svg\" --write",
    "lint:format:ci": "node ./scripts/lintFormat.mts",
    "lint:json:icons": "eslint 'icons/*.json'",
    "lint:json:categories": "eslint 'categories/*.json'",
    "lint:json:groups": "eslint 'groups/*.json'",
    "lint:json": "eslint 'icons/*.json' 'categories/*.json' 'groups/*.json'",
    "lint:spelling": "cspell --no-progress 'icons/*.json' 'categories/*.json' 'groups/*.json'",
    "lint:spelling:ci": "node ./scripts/lintSpelling.mts",
    "lint:icons:all": "pnpm run lint:icons && pnpm run lint:json:icons",
    "lint": "pnpm lint:es && pnpm lint:format && pnpm lint:json && pnpm lint:spelling && pnpm lint:icons",
    "format": "prettier \"**/*.{js,mjs,ts,jsx,tsx,html,css,scss,json,yml,yaml}\" --write",
    "prepare": "husky",
    "gi": "node ./scripts/generate/generateIcons.mts",
    "rename": "node ./scripts/rename/renameIcon.mts",
    "renamePattern": "node ./scripts/rename/renamePattern.mts"
  }
}
```

## leonardo

- 上游來源： https://github.com/adobe/leonardo
- 本地路徑： repos/adobe--leonardo
- 來源版本： eb6481da40df27654ac8efa42038007f6fad2431
- 授權： "Apache-2.0"
- 授權檔： repos/adobe--leonardo/LICENSE
- 套件管理工具： pnpm@10.30.1
- 建置狀態： not-run
- 使用方式： 使用上游指定的套件管理工具安裝依賴，再依下列指令建置

```json
{
  "engines": {
    "node": ">=24.0.0"
  },
  "scripts": {
    "moon": "moon",
    "pre-commit": "lint-staged",
    "prepare": "husky || true",
    "release": "changeset publish"
  }
}
```

## rembg

- 上游來源： https://github.com/danielgatis/rembg
- 本地路徑： repos/danielgatis--rembg
- 來源版本： 991927b77667946dab59c50df31f7d4640e80457
- 授權： "See licenseFiles"
- 授權檔： repos/danielgatis--rembg/LICENSE.txt, repos/danielgatis--rembg/LICENSE.txt
- 套件管理工具： See upstream README
- 建置狀態： not-run
- 使用方式： 請閱讀上游 README 的 Python、Docker 或其他執行需求

```json
{
  "engines": null,
  "scripts": {}
}
```

## agent-browser

- 上游來源： https://github.com/vercel-labs/agent-browser
- 本地路徑： repos/vercel-labs--agent-browser
- 來源版本： eb19c9a3cebb2a30918c31b9935340d61e76c788
- 授權： "Apache-2.0"
- 授權檔： repos/vercel-labs--agent-browser/LICENSE
- 套件管理工具： pnpm@11.1.3
- 建置狀態： not-run
- 使用方式： 使用上游指定的套件管理工具安裝依賴，再依下列指令建置

```json
{
  "engines": {
    "node": ">=22.0.0"
  },
  "scripts": {
    "mcp-tools:sync": "cd cli && AGENT_BROWSER_UPDATE_MCP_TOOLS=1 cargo test --bin agent-browser mcp_tool_catalog_snapshot",
    "version:sync": "node scripts/sync-version.js",
    "version": "npm run version:sync && git add cli/Cargo.toml",
    "build:native": "npm run version:sync && cargo build --release --manifest-path cli/Cargo.toml && node scripts/copy-native.js",
    "build:linux": "npm run version:sync && docker compose -f docker/docker-compose.yml run --rm build-linux",
    "build:macos": "npm run version:sync && (cargo build --release --manifest-path cli/Cargo.toml --target aarch64-apple-darwin & cargo build --release --manifest-path cli/Cargo.toml --target x86_64-apple-darwin & wait) && cp cli/target/aarch64-apple-darwin/release/agent-browser bin/agent-browser-darwin-arm64 && cp cli/target/x86_64-apple-darwin/release/agent-browser bin/agent-browser-darwin-x64",
    "build:windows": "npm run version:sync && docker compose -f docker/docker-compose.yml run --rm build-windows",
    "build:all-platforms": "npm run version:sync && (npm run build:linux & npm run build:windows & wait) && npm run build:macos",
    "build:docker": "docker build --platform linux/amd64 -t agent-browser-builder -f docker/Dockerfile.build .",
    "release": "npm run version:sync && npm run build:all-platforms && npm publish",
    "postinstall": "node scripts/postinstall.js",
    "test:launcher": "node --test test/launcher.test.mjs",
    "build:dashboard": "cd packages/dashboard && pnpm build",
    "build:source": "pnpm install --frozen-lockfile --filter dashboard && pnpm run build:dashboard && pnpm run build:native"
  }
}
```

## motion-design-skill

- 上游來源： https://github.com/LottieFiles/motion-design-skill
- 本地路徑： repos/LottieFiles--motion-design-skill
- 來源版本： 2e1f3c052dd70c60b598413e2fc5d7704d9e9896
- 授權： "See licenseFiles"
- 授權檔： repos/LottieFiles--motion-design-skill/LICENSE
- 套件管理工具： See upstream README
- 建置狀態： not-run
- 使用方式： 請閱讀上游 README 的 Python、Docker 或其他執行需求

```json
{
  "engines": null,
  "scripts": {}
}
```

## motion-ai-kit

- 上游來源： https://github.com/motiondivision/ai-kit
- 本地路徑： repos/motiondivision--ai-kit
- 來源版本： 1e424943582cbbdb6e3f410687e39f96451447bb
- 授權： "See licenseFiles"
- 授權檔： 
- 套件管理工具： See upstream README
- 建置狀態： not-run
- 使用方式： 使用上游指定的套件管理工具安裝依賴，再依下列指令建置

```json
{
  "engines": {
    "node": ">=18"
  },
  "scripts": {
    "build": "npm run build --workspace motion-ai",
    "changelog": "node scripts/generate-changelog-csv.js",
    "push-to-site": "node scripts/push-to-site.js",
    "validate": "node scripts/validate-template.mjs",
    "new": "node scripts/release.mjs"
  }
}
```

## remotion-skills

- 上游來源： https://github.com/remotion-dev/skills
- 本地路徑： repos/remotion-dev--skills
- 來源版本： 6f55706d1069e512430582ad86e4e57dc07afe1b
- 授權： "See licenseFiles"
- 授權檔： 
- 套件管理工具： See upstream README
- 建置狀態： not-run
- 使用方式： 使用上游指定的套件管理工具安裝依賴，再依下列指令建置

```json
{
  "engines": null,
  "scripts": {
    "dev": "remotion studio"
  }
}
```

## hairline

- 上游來源： https://github.com/lucasmarkes/hairline
- 本地路徑： repos/lucasmarkes--hairline
- 來源版本： 034f4bf9902c6adcf3cf39d82f85e6010cb4e094
- 授權： "See licenseFiles"
- 授權檔： repos/lucasmarkes--hairline/LICENSE
- 套件管理工具： pnpm@10.20.0
- 建置狀態： not-run
- 使用方式： 使用上游指定的套件管理工具安裝依賴，再依下列指令建置

```json
{
  "engines": {
    "node": ">=22"
  },
  "scripts": {
    "build": "turbo run build",
    "dev": "turbo run dev",
    "typecheck": "turbo run typecheck",
    "test": "turbo run test",
    "test:browser": "turbo run test:browser",
    "clean": "turbo run clean",
    "release": "node scripts/release.mjs",
    "kernel": "node scripts/kernel.mjs"
  }
}
```

## anatomy

- 上游來源： https://github.com/wheresryan22/anatomy
- 本地路徑： repos/wheresryan22--anatomy
- 來源版本： 1482e8469b0a9e0d8cc18ea2740a01423d29ae80
- 授權： "See licenseFiles"
- 授權檔： repos/wheresryan22--anatomy/LICENSE
- 套件管理工具： See upstream README
- 建置狀態： not-run
- 使用方式： 請閱讀上游 README 的 Python、Docker 或其他執行需求

```json
{
  "engines": null,
  "scripts": {}
}
```

## anatomy-reveal

- 上游來源： https://github.com/annnguyentt/anatomy-reveal-skill
- 本地路徑： repos/annnguyentt--anatomy-reveal-skill
- 來源版本： dd01e1c04559d79002da07862e26f8a5c2a07644
- 授權： "See licenseFiles"
- 授權檔： repos/annnguyentt--anatomy-reveal-skill/LICENSE
- 套件管理工具： See upstream README
- 建置狀態： not-run
- 使用方式： 請閱讀上游 README 的 Python、Docker 或其他執行需求

```json
{
  "engines": null,
  "scripts": {}
}
```

## scenario-blender-skills

- 上游來源： https://github.com/scenario-labs/skills
- 本地路徑： repos/scenario-labs--skills
- 來源版本： a14d061fe5db33d339b1d89f775f37337481295f
- 授權： "See licenseFiles"
- 授權檔： repos/scenario-labs--skills/LICENSE
- 套件管理工具： pnpm@11.21.0
- 建置狀態： not-run
- 使用方式： 使用上游指定的套件管理工具安裝依賴，再依下列指令建置

```json
{
  "engines": {
    "node": ">=22.18.0"
  },
  "scripts": {
    "prepare": "husky",
    "validate": "pnpm style && pnpm format:check && pnpm sync:agent-commands:check && pnpm skill-files && pnpm lint:py && pnpm groupings && pnpm manifest:check && pnpm bugbot:check && pnpm readme && pnpm words:check && pnpm spell && pnpm spec",
    "style": "./scripts/check-style.sh",
    "format": "prettier --write . && pnpm sync:agent-commands",
    "format:check": "prettier --check .",
    "skill-files": "./scripts/check-skill-files.sh",
    "groupings": "node ./scripts/check-groupings.mjs",
    "manifest": "node ./scripts/generate-plugin-manifest.mjs",
    "manifest:check": "node ./scripts/generate-plugin-manifest.mjs --check",
    "bugbot": "node ./scripts/generate-bugbot.mjs",
    "bugbot:check": "node ./scripts/generate-bugbot.mjs --check",
    "readme": "node ./scripts/check-readme.mjs",
    "spell": "./scripts/check-spelling.sh",
    "words:sort": "./scripts/sort-project-words.sh",
    "words:check": "./scripts/sort-project-words.sh --check",
    "spec": "./scripts/validate-skills.sh",
    "lint:py": "uvx ruff@0.16.10 check",
    "test": "pnpm test:meta && ./scripts/test-skill-scripts.sh",
    "test:meta": "node --test \"scripts/*.test.mjs\" \".claude/hooks/*.test.mjs\"",
    "test:coverage": "COVERAGE=1 ./scripts/test-skill-scripts.sh",
    "sync:agent-commands": "node scripts/sync-agent-commands.mjs",
    "sync:agent-commands:check": "node scripts/sync-agent-commands.mjs --check",
    "test:agent-commands": "node --test scripts/sync-agent-commands.test.mjs",
    "test:manifest": "node --test scripts/generate-plugin-manifest.test.mjs",
    "test:bugbot": "node --test scripts/generate-bugbot.test.mjs",
    "test:style": "node --test scripts/check-style.test.mjs",
    "test:hooks": "node --test .claude/hooks/guard-commit.test.mjs",
    "test:index-sync": "node --test scripts/sync-generated-index.test.mjs",
    "test:spec": "node --test scripts/validate-skills.test.mjs",
    "test:readme": "node --test scripts/check-readme.test.mjs",
    "test:runner": "node --test scripts/test-skill-scripts.test.mjs"
  }
}
```

## three-js

- 上游來源： https://github.com/mrdoob/three.js
- 本地路徑： repos/mrdoob--three.js
- 來源版本： 65d22859bc10e2caac6e1ab24d7aa951b15fe206
- 授權： "MIT"
- 授權檔： repos/mrdoob--three.js/LICENSE
- 套件管理工具： See upstream README
- 建置狀態： not-run
- 使用方式： 使用上游指定的套件管理工具安裝依賴，再依下列指令建置

```json
{
  "engines": null,
  "scripts": {
    "start": "npm run dev",
    "test": "npm run lint && npm run test-unit && npm run test-unit-addons",
    "build": "rollup -c utils/build/rollup.config.js",
    "build-docs": "jsdoc -c utils/docs/jsdoc.config.json && npm run build-llms",
    "build-llms": "node utils/llms/build.js",
    "dev": "node utils/build/dev.js && node utils/server.js -p 8080",
    "preview": "node utils/build/preview.js",
    "lint-core": "eslint src",
    "lint-addons": "eslint examples/jsm",
    "lint-examples": "eslint examples",
    "lint-editor": "eslint editor",
    "lint-manual": "eslint manual",
    "lint-test": "eslint test",
    "lint-utils": "eslint utils",
    "lint-tsl": "eslint tsl",
    "lint": "npm run lint-core",
    "lint-fix": "npm run lint-core -- --fix && npm run lint-addons -- --fix && npm run lint-examples -- --fix && npm run lint-editor -- --fix && npm run lint-manual -- --fix && npm run lint-test -- --fix && npm run lint-utils -- --fix && npm run lint-tsl -- --fix",
    "test-unit": "node test/unit/puppeteer.unit.js --testPage=UnitTests.html --mode=headless",
    "benchmark-node-material-instance": "node test/benchmarks/node-material-instance.js",
    "test-unit-headful": "node test/unit/puppeteer.unit.js --testPage=UnitTests.html --mode=headful",
    "test-unit-addons": "node test/unit/puppeteer.unit.js --testPage=UnitTestsAddons.html --mode=headless",
    "test-unit-addons-headful": "node test/unit/puppeteer.unit.js --testPage=UnitTestsAddons.html --mode=headful",
    "test-e2e": "node test/e2e/puppeteer.js",
    "test-e2e-cov": "node test/e2e/check-coverage.js",
    "test-e2e-webgpu": "node test/e2e/puppeteer.js --webgpu",
    "test-treeshake": "rollup -c test/rollup.treeshake.config.js",
    "make-screenshot": "node test/e2e/puppeteer.js --make",
    "make-tsl-reference": "node test/unit/tsl/make.js"
  }
}
```

## theatre-js

- 上游來源： https://github.com/theatre-js/theatre
- 本地路徑： repos/theatre-js--theatre
- 來源版本： 6ea82b938ea49609489f6377ded693ccc6ee8f5b
- 授權： "Apache-2.0"
- 授權檔： repos/theatre-js--theatre/LICENSE
- 套件管理工具： yarn@3.6.3
- 建置狀態： not-run
- 使用方式： 使用上游指定的套件管理工具安裝依賴，再依下列指令建置

```json
{
  "engines": {
    "node": ">=18"
  },
  "scripts": {
    "cli": "tsx devEnv/cli.ts",
    "playground": "yarn workspace playground run serve",
    "benchmarks": "yarn workspace benchmarks run serve",
    "test:e2e": "yarn workspace playground run test",
    "test:e2e:ci": "yarn workspace playground run test:ci",
    "typecheck": "yarn run build:ts",
    "build:ts": "tsc --build ./devEnv/typecheck-all-projects/tsconfig.all.json",
    "test": "jest",
    "test:compat:install": "yarn workspace @theatre/compat-tests run install-fixtures",
    "test:compat:run": "jest --config jest.compat-tests.config.js",
    "postinstall": "husky install && yarn workspace @theatre/app run prisma generate && yarn workspace @theatre/sync-server run prisma generate",
    "lint:all": "eslint . --ext ts,tsx --ignore-path=.gitignore --rulesdir ./devEnv/eslint/rules"
  }
}
```

## react-postprocessing

- 上游來源： https://github.com/pmndrs/react-postprocessing
- 本地路徑： repos/pmndrs--react-postprocessing
- 來源版本： e07ef9a890c8a202a3b20eac0249032cff4e7805
- 授權： "MIT"
- 授權檔： repos/pmndrs--react-postprocessing/LICENSE
- 套件管理工具： pnpm@11.15.1
- 建置狀態： not-run
- 使用方式： 使用上游指定的套件管理工具安裝依賴，再依下列指令建置

```json
{
  "engines": null,
  "scripts": {
    "build": "vite build && tsc -p tsconfig.build.json",
    "eslint": "eslint . --fix",
    "eslint:ci": "eslint .",
    "test": "vitest run",
    "typecheck": "tsc --noEmit"
  }
}
```

## three-quarks

- 上游來源： https://github.com/Alchemist0823/three.quarks
- 本地路徑： repos/Alchemist0823--three.quarks
- 來源版本： 9d0445c5949c7da570f412ad7007efecd0357886
- 授權： "See licenseFiles"
- 授權檔： repos/Alchemist0823--three.quarks/LICENSE
- 套件管理工具： See upstream README
- 建置狀態： not-run
- 使用方式： 使用上游指定的套件管理工具安裝依賴，再依下列指令建置

```json
{
  "engines": null,
  "scripts": {
    "build": "npm run build --workspace=quarks.core --workspace=three.quarks --workspace=quarks.r3f --workspace=quarks.nodes --workspace=quarks.playground --workspace=quarks.examples",
    "dev": "npm run dev --workspaces",
    "test": "npm run test  --workspaces",
    "examples": "npm run dev --workspace=quarks.examples",
    "playground": "npm run dev --workspace=quarks.playground",
    "prettier": "npm run prettier --workspaces",
    "publish": "npm publish --workspace=quarks.core --workspace=three.quarks --workspace=quarks.r3f",
    "yalc:publish": "npm run yalc:publish --workspace=quarks.core --workspace=three.quarks --workspace=quarks.r3f",
    "docs": "cross-env NODE_OPTIONS='--experimental-require-module' typedoc",
    "docs-dev": "http-server ./docs -c-1 -p 8002"
  }
}
```

## vfx-js

- 上游來源： https://github.com/fand/vfx-js
- 本地路徑： repos/fand--vfx-js
- 來源版本： 45983452617b9eebfa3d7896573c0d1ee5578957
- 授權： "MIT"
- 授權檔： repos/fand--vfx-js/LICENSE
- 套件管理工具： pnpm@10.33.2
- 建置狀態： not-run
- 使用方式： 使用上游指定的套件管理工具安裝依賴，再依下列指令建置

```json
{
  "engines": null,
  "scripts": {
    "build": "turbo run build",
    "dev": "turbo run dev --ui tui --filter=docs --filter=docs-react --filter=docs-transitions --filter=@vfx-js/core --filter=@vfx-js/effects --filter=@vfx-js/react --filter=@vfx-js/transitions --filter=@vfx-js/storybook",
    "dev:testbed": "turbo run dev --ui tui --concurrency 20 --filter=\"@vfx-js/testbed-*...\"",
    "clean": "turbo run clean",
    "lint": "turbo run lint",
    "prepare": "husky",
    "test": "turbo run test",
    "prepare-release": "changeset && turbo run build lint test && changeset version",
    "release": "changeset publish"
  }
}
```

## gsap

- 上游來源： https://github.com/greensock/GSAP
- 本地路徑： repos/greensock--GSAP
- 來源版本： 5e6c35ff8eedea12d4f229129def635277d8b0f2
- 授權： "Standard 'no charge' license: https://gsap.com/standard-license."
- 授權檔： 
- 套件管理工具： See upstream README
- 建置狀態： not-run
- 使用方式： 使用上游指定的套件管理工具安裝依賴，再依下列指令建置

```json
{
  "engines": null,
  "scripts": {}
}
```

## hyperframes

- 上游來源： https://github.com/heygen-com/hyperframes
- 本地路徑： repos/heygen-com--hyperframes
- 來源版本： 4abbdc3e0d6d592ae0ea13509bb7979ba1b15157
- 授權： "See licenseFiles"
- 授權檔： repos/heygen-com--hyperframes/LICENSE
- 套件管理工具： See upstream README
- 建置狀態： not-run
- 使用方式： 使用上游指定的套件管理工具安裝依賴，再依下列指令建置

```json
{
  "engines": {
    "bun": "1.4.4"
  },
  "scripts": {
    "dev": "bun run studio",
    "build": "bun run --filter '@hyperframes/{parsers,lint,studio-server,share}' build && bun run --filter @hyperframes/core build && bun run --filter '@hyperframes/{engine,producer,player,studio,shader-transitions,aws-lambda,gcp-cloud-run,sdk,inspector}' build && bun run --filter @hyperframes/cli build && bun run --filter @hyperframes/sdk-playground build",
    "build:producer": "bun run --filter @hyperframes/producer build",
    "studio": "bun run --filter @hyperframes/studio dev",
    "build:hyperframes-runtime": "bun run --filter @hyperframes/core build:hyperframes-runtime",
    "build:hyperframes-runtime:modular": "bun run --filter @hyperframes/core build:hyperframes-runtime:modular",
    "verify:packed-manifests": "node scripts/verify-packed-manifests.mjs",
    "validate:release-channel": "node scripts/validate-release-channel.mjs",
    "set-version": "tsx scripts/set-version.ts",
    "release:prepare": "tsx scripts/release-prepare.ts",
    "changelog:draft": "tsx scripts/draft-changelog.ts",
    "changelog:weekly": "tsx scripts/changelog-weekly.ts",
    "sync-schemas": "tsx scripts/sync-schemas.ts",
    "sync-schemas:check": "tsx scripts/sync-schemas.ts --check",
    "sync:package-subpaths": "node scripts/package-subpaths.mjs --write",
    "check:package-subpaths": "node scripts/package-subpaths.mjs",
    "lint": "bun run check:docs-snippet-motion && bun run check:studio-copy-dashes && bun run check:tracked-artifacts && bun run check:workspace-contracts && bun run check:gcp-cloud-run-dockerfile && bun run check:package-cycles && bun run check:package-subpaths && bun run check:cli-process-ownership && oxlint . && tsx scripts/lint-skills.ts && node scripts/check-core-skills.mjs && node scripts/check-skill-mirror.mjs",
    "check:gcp-cloud-run-dockerfile": "bun run --cwd packages/gcp-cloud-run test:dockerfile-workspaces",
    "lint:skills": "tsx scripts/lint-skills.ts && node scripts/check-core-skills.mjs",
    "check:skill-mirror": "node scripts/check-skill-mirror.mjs",
    "lint:fix": "oxlint --fix .",
    "check:tracked-artifacts": "node scripts/check-tracked-artifacts.mjs",
    "check:committed-keys": "node scripts/check-committed-keys.mjs",
    "check:symlinks": "node scripts/check-symlinks.mjs",
    "check:docs-snippet-motion": "node scripts/check-docs-snippet-motion.mjs",
    "check:docs-catalog": "node scripts/check-docs-catalog.mjs",
    "generate:catalog": "bun scripts/generate-catalog.ts",
    "check:catalog-drift": "tsx scripts/catalog-drift.ts",
    "verify:catalog-payloads": "tsx scripts/verify-catalog-payloads.ts",
    "check:workspace-contracts": "node scripts/check-workspace-contracts.mjs",
    "check:package-cycles": "node scripts/check-package-cycles.mjs",
    "check:cli-process-ownership": "node scripts/check-cli-process-ownership.mjs",
    "check:cli-lazy-deps": "node scripts/check-cli-lazy-deps.mjs",
    "check:studio-copy-dashes": "node scripts/check-studio-copy-dashes.mjs",
    "check:registry-innerhtml": "node scripts/check-registry-innerhtml.mjs",
    "format": "oxfmt .",
    "test": "bun run test:unit",
    "test:unit": "bun run --filter '*' test",
    "producer:test:classification": "bun run --cwd packages/producer test:classification",
    "producer:test:unit": "bun run --cwd packages/producer test:unit",
    "producer:test:unit:bun": "bun run --cwd packages/producer test:unit:bun",
    "producer:test:unit:vitest": "bun run --cwd packages/producer test:unit:vitest",
    "producer:test:integration": "bun run --cwd packages/producer test:integration",
    "test:regression": "bun run --cwd packages/producer test:regression",
    "player:perf": "bun run --filter @hyperframes/player perf",
    "format:check": "oxfmt --check .",
    "knip": "knip",
    "test:scripts": "node --import tsx --test scripts/animejs-v4-guidance.test.mjs scripts/check-tracked-artifacts.test.mjs scripts/check-committed-keys.test.mjs scripts/check-symlinks.test.mjs scripts/upload-docs-images.test.mjs scripts/check-registry-set-delta.test.mjs scripts/check-no-main-deletions.test.mjs scripts/check-pr-captures.test.mjs scripts/check-comment-citations.test.mjs scripts/comments-workflow.test.mjs scripts/comment-ratchet.test.mjs scripts/check-docs-snippet-motion.test.mjs scripts/registry-target-paths.test.mjs scripts/check-workspace-contracts.test.mjs scripts/check-media-use-copy-parity.test.mjs scripts/check-svg-sanitize-parity.test.mjs scripts/check-media-use-svg-sanitize-generated.test.mjs scripts/check-media-use-audio-carve-generated.test.mjs scripts/check-package-cycles.test.mjs scripts/check-cli-process-ownership.test.mjs scripts/check-cli-lazy-deps.test.mjs scripts/file-url-paths.test.mjs scripts/check-studio-copy-dashes.test.mjs scripts/check-large-files.test.mjs scripts/check-registry-innerhtml.test.mjs scripts/package-subpaths.test.mjs scripts/validate-release-channel.test.mjs scripts/clawhub-sync.test.mjs scripts/clawhub-unlist-retired.test.mjs scripts/publish-workflow.test.mjs scripts/release-lambda-assets.test.mjs scripts/publish-main-only-workflows.test.mjs scripts/mcp-registry-watch.test.mjs scripts/pr-edit-concurrency.test.mjs scripts/merge-queue-workflows.test.mjs scripts/ci-cache-workflows.test.mjs scripts/install-workspace-dependencies.test.mjs scripts/check-edit-accuracy-filter.test.mjs scripts/edit-accuracy-retry.test.mjs scripts/draft-changelog.test.ts scripts/set-version.test.ts scripts/release-prepare.test.ts scripts/cli-options.test.ts scripts/changelog-weekly.test.ts scripts/claude-plugin-compression.test.ts scripts/catalog-payload-assets.test.ts scripts/host-registry-assets.test.ts scripts/catalog-preview-temp.test.ts scripts/backfill-block-previews.test.ts scripts/catalog-hosted-files.test.ts scripts/player-cdn-pin.test.ts scripts/registry-cdn-pins.test.ts scripts/studio-runtime-smoke.test.mjs scripts/verify-packed-manifests.test.mjs scripts/rewrite-relative-import-extensions.test.mjs scripts/lint-skills.test.mjs scripts/check-core-skills.test.mjs scripts/creator-editing-recipes.test.mjs packages/gcp-cloud-run/check-dockerfile-workspaces.test.mjs packages/core/scripts/writeGeneratedFile.test.ts scripts/catalog-publication.test.mjs scripts/ci/resolve-workflow-pr.test.mjs scripts/lefthook-order.test.mjs scripts/inline-gsap.test.mjs scripts/ci/flake-gate.test.mjs scripts/ci/motion-blur-nightly-report.test.mjs scripts/ci/base-file.test.mjs scripts/ci/release-only-diff.test.mjs scripts/check-catalog-source-pr.test.mjs scripts/generate-registry-items.test.ts scripts/catalog-drift.test.ts scripts/catalog-fetch-mirror.test.ts scripts/catalog-script-inlining.test.ts scripts/catalog-detail.test.ts scripts/generate-catalog-pages.test.ts scripts/verify-catalog-payloads.test.ts scripts/registry-theme-fallbacks.test.ts scripts/registry-skill-files.test.ts scripts/creator-editing-capabilities.test.mjs scripts/generate-catalog-previews.test.ts scripts/registry-primitive-payloads.test.ts registry/components/pan-stations/pan-stations.test.mjs registry/components/filmed-screen/filmed-screen.test.mjs registry/components/echo-smear/echo-smear.test.mjs registry/examples/path-traced-3d/source/path-traced-3d.test.mjs && vitest run scripts/catalog/ scripts/contrastRatchet.test.ts scripts/generate-catalog-payloads.test.ts",
    "typecheck:scripts": "tsc --noEmit -p scripts/tsconfig.json",
    "test:skills": "HYPERFRAMES_MEDIA_HOME_REQUIRED=1 node --import ./packages/cli/scripts/test-home.mjs --test 'skills/**/*.test.mjs' 'packages/cli/src/media-use/**/*.test.mjs'",
    "generate:previews": "tsx scripts/generate-template-previews.ts",
    "generate:catalog-previews": "tsx scripts/generate-catalog-previews.ts",
    "package:agent-plugin": "node scripts/package-agent-plugin.mjs",
    "package:codex-plugin": "node scripts/package-codex-plugin.mjs",
    "upload:docs-images": "bash scripts/upload-docs-images.sh",
    "host:registry-assets": "bun run scripts/host-registry-assets.ts",
    "prepare": "test -e .git && lefthook install || true",
    "lint:registry-items": "node scripts/lint-registry-items.mjs"
  }
}
```

## remotion

- 上游來源： https://github.com/remotion-dev/remotion
- 本地路徑： repos/remotion-dev--remotion
- 來源版本： 3fcd5ae3eb8b30f40037983410217183ce3ddb81
- 授權： "SEE LICENSE IN LICENSE.md"
- 授權檔： repos/remotion-dev--remotion/LICENSE.md
- 套件管理工具： bun@1.4.3
- 建置狀態： not-run
- 使用方式： 使用上游指定的套件管理工具安裝依賴，再依下列指令建置

```json
{
  "engines": {
    "bun": ">=1.4.3",
    "node": ">=16"
  },
  "scripts": {
    "test": "turbo run lint test --no-update-notifier",
    "typecheck": "bun check",
    "ts-build": "node packages/.monorepo/tsrs.cjs -b --verbose --watch",
    "stylecheck": "turbo run lint formatting --no-update-notifier && bun run checkskills",
    "formatting": "turbo run formatting --no-update-notifier",
    "format": "bun pre-commit.ts",
    "build": "turbo run make --no-update-notifier",
    "build-fast": "turbo run make --filter='!@remotion/media-parser' --filter='!@remotion/webcodecs' --filter='!docs' --filter='!@remotion/it-tests' --no-update-notifier",
    "build-docs": "TURBO_TELEMETRY_DISABLED=1 turbo run build-docs --filter=docs --no-update-notifier",
    "testssr": "turbo run testssr --filter=@remotion/it-tests --no-update-notifier",
    "testmonorepo": "turbo run testmonorepo --no-update-notifier",
    "testtemplates": "turbo run testtemplates --filter=@remotion/it-tests --no-update-notifier",
    "teste2e": "turbo run teste2e --filter=@remotion/example --no-update-notifier",
    "testwebrenderer": "turbo run testwebrenderer --concurrency=1 --no-update-notifier",
    "testbrowserstudio": "turbo run testbrowserstudio --concurrency=1 --no-update-notifier",
    "testlayoututils": "turbo run testlayoututils --concurrency=1 --no-update-notifier",
    "testeffectsvisual": "turbo run testeffectsvisual --concurrency=1 --no-update-notifier",
    "testlambda": "turbo run testlambda --filter=@remotion/it-tests --filter=@remotion/lambda --concurrency=1 --no-update-notifier",
    "testnextjs": "turbo run testnextjs --no-update-notifier",
    "ci": "turbo run make --concurrency=2 --no-update-notifier && turbo run test --concurrency=1 --no-update-notifier",
    "watch": "turbo watch make --concurrency=2 --experimental-write-cache",
    "makewhisperweb": "turbo run make --filter='@remotion/whisper-web'",
    "watchmedia": "turbo watch make --experimental-write-cache --filter='@remotion/media'",
    "watchwhisperweb": "turbo watch make --experimental-write-cache --filter='@remotion/whisper-web'",
    "watchdesign": "turbo watch make --experimental-write-cache --filter='@remotion/promo-pages'",
    "makewebcodecs": "turbo run make --filter='@remotion/media-parser' --filter='@remotion/webcodecs'",
    "watchmediaparser": "turbo watch make --experimental-write-cache --filter='@remotion/media-parser'",
    "watchmediautils": "turbo watch make --experimental-write-cache --filter='@remotion/media-utils'",
    "watchwebrenderer": "turbo watch make --experimental-write-cache --filter='@remotion/web-renderer'",
    "watchwebcodecs": "turbo watch make --experimental-write-cache --filter='@remotion/webcodecs'",
    "makewebrenderer": "turbo run make --filter='@remotion/web-renderer'",
    "makecore": "turbo run make --filter='remotion'",
    "watchcore": "turbo watch make --experimental-write-cache --filter='remotion'",
    "watchcli": "turbo watch make --experimental-write-cache --filter='@remotion/cli'",
    "makeplayer": "turbo run make --filter='@remotion/player'",
    "watchplayer": "turbo watch make --experimental-write-cache --filter='@remotion/player'",
    "makestudio": "turbo run make --filter='@remotion/studio' --filter='@remotion/studio-server'",
    "watchstudio": "turbo watch make --experimental-write-cache --filter='@remotion/studio' --filter='@remotion/studio-server'",
    "makelambda": "turbo run make --filter='@remotion/lambda' --filter='@remotion/streaming'",
    "watchlambda": "turbo watch make --experimental-write-cache --filter='@remotion/lambda' --filter='@remotion/streaming'",
    "makethree": "turbo run make --filter='@remotion/three'",
    "watchthree": "turbo watch make --experimental-write-cache --filter='@remotion/three'",
    "release": "bun publish.ts && bun run publishlambdaartifacts && turbo run publishprivate --concurrency=1 && git push --tags && git push",
    "publishlambdaartifacts": "bun packages/lambda/src/admin/publish-function-artifacts.ts",
    "react-scan:capture": "bun packages/.monorepo/react-scan/capture.ts",
    "react-scan:capture:brand": "bun packages/.monorepo/react-scan/capture.ts --package brand",
    "studio:cpu-profile": "bun packages/.monorepo/cpu-profile/capture.ts",
    "publishtemplates": "cd packages/it-tests && bun src/templates/publish.ts",
    "playground": "bun packages/skills-evals/src/playground.ts",
    "checkskills": "bun packages/skills/scripts/sync-agent-skills.ts --check && bun packages/skills/scripts/sync-embedded-skills.ts --check && bun packages/skills/scripts/sync-readme.ts --check && bun run validateskills",
    "syncskills": "bun packages/skills/scripts/sync-agent-skills.ts && bun packages/skills/scripts/sync-embedded-skills.ts && bun packages/skills/scripts/sync-readme.ts",
    "validateskills": "bun packages/skills/scripts/validate-links.ts",
    "cleantypes": "rm -rf packages/**/tsconfig.tsbuildinfo && rm -f packages/tsconfig.tsbuildinfo",
    "clean": "turbo run clean && rm -rf packages/**/dist && rm -rf .cache && rm -rf packages/**/tsconfig.tsbuildinfo && rm -f packages/tsconfig.tsbuildinfo && rm -rf packages/**/.turbo && rm -rf .turbo",
    "cleanall": "turbo run clean && rm -rf packages/**/dist && rm -rf packages/**/node_modules && rm -rf node_modules && rm -rf .cache && rm -rf packages/**/tsconfig.tsbuildinfo && rm -f packages/tsconfig.tsbuildinfo && rm -rf packages/**/.turbo && rm -rf .turbo",
    "prepare": "git config core.hooksPath .githooks"
  }
}
```

## manim

- 上游來源： https://github.com/ManimCommunity/manim
- 本地路徑： repos/ManimCommunity--manim
- 來源版本： ab7f9527fa2b37893aacc367e21b723845f44ef0
- 授權： "See licenseFiles"
- 授權檔： repos/ManimCommunity--manim/LICENSE, repos/ManimCommunity--manim/LICENSE.community
- 套件管理工具： See upstream README
- 建置狀態： not-run
- 使用方式： 請閱讀上游 README 的 Python、Docker 或其他執行需求

```json
{
  "engines": null,
  "scripts": {}
}
```

## audiocraft

- 上游來源： https://github.com/facebookresearch/audiocraft
- 本地路徑： repos/facebookresearch--audiocraft
- 來源版本： 896ec7c47f5e5d1e5aa1e4b260c4405328bf009d
- 授權： "See licenseFiles"
- 授權檔： repos/facebookresearch--audiocraft/LICENSE, repos/facebookresearch--audiocraft/LICENSE_weights
- 套件管理工具： See upstream README
- 建置狀態： not-run
- 使用方式： 請閱讀上游 README 的 Python、Docker 或其他執行需求

```json
{
  "engines": null,
  "scripts": {}
}
```

## librosa

- 上游來源： https://github.com/librosa/librosa
- 本地路徑： repos/librosa--librosa
- 來源版本： 036ecbc20faff330e8f36e6571b9b503d4152539
- 授權： "See licenseFiles"
- 授權檔： repos/librosa--librosa/LICENSE.md
- 套件管理工具： See upstream README
- 建置狀態： not-run
- 使用方式： 請閱讀上游 README 的 Python、Docker 或其他執行需求

```json
{
  "engines": null,
  "scripts": {}
}
```

## whisperx

- 上游來源： https://github.com/m-bain/whisperX
- 本地路徑： repos/m-bain--whisperX
- 來源版本： b904f02b7e1f26fd10fb04840d655ff27e88e464
- 授權： "See licenseFiles"
- 授權檔： repos/m-bain--whisperX/LICENSE
- 套件管理工具： See upstream README
- 建置狀態： not-run
- 使用方式： 請閱讀上游 README 的 Python、Docker 或其他執行需求

```json
{
  "engines": null,
  "scripts": {}
}
```

## ffmpeg

- 上游來源： https://github.com/FFmpeg/FFmpeg
- 本地路徑： repos/FFmpeg--FFmpeg
- 來源版本： 4da74f951349f82e77cebc00be64423ccf8f6844
- 授權： "See licenseFiles"
- 授權檔： repos/FFmpeg--FFmpeg/COPYING.GPLv2, repos/FFmpeg--FFmpeg/COPYING.GPLv3, repos/FFmpeg--FFmpeg/COPYING.LGPLv2.1, repos/FFmpeg--FFmpeg/COPYING.LGPLv3, repos/FFmpeg--FFmpeg/LICENSE.md
- 套件管理工具： See upstream README
- 建置狀態： not-run
- 使用方式： 請閱讀上游 README 的 Python、Docker 或其他執行需求

```json
{
  "engines": null,
  "scripts": {}
}
```
