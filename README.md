# Figma Make Kit · Core Components

React + Tailwind component library that mirrors the Core Components design system in Figma. Designed to be published as a [Figma Make kit](https://help.figma.com/hc/en-us/articles/39241689698839-Get-started-with-Make-kits).

## Components

- `Button` — primary, secondary, tertiary, icon, floating, toggle (sm/md)
- `Checkbox` — with label, indeterminate, error/required state
- `Link` — sm / md / lg, optional left/right/top icons
- `InfoLabel` — head + body, sm / xs / xxs
- `ProgressIndicator` — sm / md, blue / white / black

## Local development

```bash
npm install
npm run dev          # showcase at http://localhost:5173
npm run build        # produces dist/ (lib bundle + types + styles)
```

## Consume the built library

```ts
import { Button, Checkbox, Link, InfoLabel, ProgressIndicator } from '@figma-make-kit/core';
import '@figma-make-kit/core/styles.css';
```

The `styles.css` import ships the design tokens (CSS variables) and Tailwind utilities the components rely on. Without it the components render unstyled.

## Publish to Figma Make

Per the [Figma Make kits guide](https://help.figma.com/hc/en-us/articles/39241689698839-Get-started-with-Make-kits), publishing happens **inside Figma Make**, not via `npm publish`:

1. Open the kit project in **Figma Make**.
2. Click **Publish kit** in the top-right corner.
3. Move it into an organization project (if it's still in drafts).
4. Set a **name** and **thumbnail**.
5. Configure the package — leave defaults or override `package.json` / `vite.config.ts` / scope (`@your-org/...`) / version.
6. Click **Publish**. An organization admin then approves and enables it for the team.

This repo is structured to be uploaded as-is:

| What Figma needs | Where it lives |
|---|---|
| Library entry | `src/index.ts` |
| Built bundle | `dist/index.js` + `dist/index.d.ts` + `dist/styles.css` |
| Package config | `package.json` (scope `@figma-make-kit/core`, peer deps for React) |
| Vite config | `vite.config.ts` (lib mode) |
| Guidelines for the AI | `guidelines/*.md` (one per component + tokens + coding style) |

Before uploading, run `npm run build` so `dist/` is fresh.

## Project layout

```
.
├── src/
│   ├── index.ts                # library entry — exports all components
│   ├── index.css               # tokens + tailwind + custom .fm-* rules
│   ├── styles/tokens.css       # all design tokens (CSS variables)
│   ├── components/             # component implementations
│   └── app/                    # local showcase (not part of the published kit)
├── guidelines/                 # markdown docs that teach Figma Make how to use the kit
├── dist/                       # build output
├── package.json
├── vite.config.ts              # lib build
├── vite.dev.config.ts          # dev server (showcase)
├── tsconfig.lib.json           # emits .d.ts for the lib
└── tailwind.config.js
```

## Versioning

Bump `version` in `package.json` whenever components change. Figma Make supports updating an existing kit to a new package version, which notifies consuming teams.
