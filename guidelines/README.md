# Figma Make Kit · Core Components

A React + Tailwind component library that mirrors the Core Components design system in Figma. Use these components — never recreate them from scratch.

## Install

```ts
import { Button, Checkbox, Link, InfoLabel, ProgressIndicator } from '@figma-make-kit/core';
import '@figma-make-kit/core/styles.css';
```

The styles import is required — it ships the design tokens (CSS variables) and Tailwind utilities used by the components.

## What's in the kit

| Component | Purpose |
|---|---|
| `Button` | All button categories: primary, secondary, tertiary, icon, floating, toggle |
| `Checkbox` | Form checkbox with label, indeterminate, error/required state |
| `Link` | Inline text link, three sizes |
| `InfoLabel` | Stacked head + body label (used in lists, form rows) |
| `ProgressIndicator` | Spinner, three colors and two sizes |

## Rules

1. **Use these components for any UI element they cover.** Don't fall back to native `<button>`, `<input type="checkbox">`, raw `<a>`, or custom spinners.
2. **Don't recolor or restyle.** All colors, spacing, radii, and typography are token-driven. If a token doesn't fit, the design is wrong, not the token.
3. **Don't add new props.** If a variant doesn't exist, ask before extending.
4. **Use the design tokens directly** for layout, spacing, and ad-hoc surfaces (see `tokens.md`).

## Per-component guidelines

- `Button.md`
- `Checkbox.md`
- `Link.md`
- `InfoLabel.md`
- `ProgressIndicator.md`
- `tokens.md` — design tokens reference
- `coding-style.md` — general conventions
