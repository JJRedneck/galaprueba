# Figma Make Kit · Core Components

A React + Tailwind component library that mirrors the Core Components design system in Figma. Use these components — never recreate them from scratch.

## Install

```ts
import { Button, Checkbox, Link, InfoLabel, ProgressIndicator } from '@galatea-gamma/core';
import '@galatea-gamma/core/styles.css';
```

The styles import is required — it ships the design tokens (CSS variables) and Tailwind utilities used by the components.

## What's in the kit

| Component | Purpose |
|---|---|
| `Button` | All button categories: primary, secondary, tertiary, icon, floating, toggle |
| `ButtonSet` | Layout container for groups of buttons (inline or stack) |
| `Checkbox` | Form checkbox with label, indeterminate, error/required state |
| `Drawer` | Modal panel that slides from the bottom or right, or appears centered |
| `Dropdown` | Single-select dropdown (Input + Expanded types) |
| `DropdownItem` | Row used inside a dropdown listbox (option / selected / no-results) |
| `Icon` + `*Icon` | Icon foundation with 4 sizes (xs/sm/md/lg). One component per icon, all inherit `currentColor`. |
| `InfoBox` | Media + title + body block (extended/compact, with optional card background) |
| `Link` | Inline text link, three sizes |
| `InfoLabel` | Stacked head + body label (used in lists, form rows) |
| `ProgressIndicator` | Spinner, three colors and two sizes |
| `QuickAction` | Compact tappable action with circular icon and label (XS / XL) |
| `Tag` | Pill-shaped status indicator (6 states × filled/outline, optional icon) |

## Rules

1. **Use these components for any UI element they cover.** Don't fall back to native `<button>`, `<input type="checkbox">`, raw `<a>`, or custom spinners.
2. **Don't recolor or restyle.** All colors, spacing, radii, and typography are token-driven. If a token doesn't fit, the design is wrong, not the token.
3. **Don't add new props.** If a variant doesn't exist, ask before extending.
4. **Use the design tokens directly** for layout, spacing, and ad-hoc surfaces (see `tokens.md`).

## Per-component guidelines

- `Button.md`
- `ButtonSet.md`
- `Checkbox.md`
- `Drawer.md`
- `Dropdown.md`
- `DropdownItem.md`
- `Icon.md`
- `InfoBox.md`
- `Link.md`
- `InfoLabel.md`
- `ProgressIndicator.md`
- `Tag.md`
- `QuickAction.md`
- `tokens.md` — design tokens reference
- `coding-style.md` — general conventions
