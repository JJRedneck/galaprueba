# Design Tokens

All tokens are CSS custom properties on `:root`, mirroring the Figma Foundations library 1:1 (slashes → dashes, case preserved).

Use them via `var(--token-name)` in `style={{}}` or via Tailwind utilities mapped in `tailwind.config.js`.

## Color

### Action (interactive surfaces)
| Token | Value | Use |
|---|---|---|
| `--action-content-default` | `#006dff` | Default action text/icon |
| `--action-content-hover` | `#0155ca` | Hover action text/icon |
| `--action-content-selected` | `#ffffff` | Text/icon on selected action |
| `--action-background-selected` | `#006dff` | Background of selected control (e.g. checked checkbox) |
| `--action-background-disabled` | `#cce2ff` | Background of disabled selected control |

### Basic (neutral surfaces and content)
| Token | Value | Use |
|---|---|---|
| `--basic-content-default` | `#000000` | Body text |
| `--basic-content-soft` | `#646464` | Secondary/helper text |
| `--basic-content-disabled` | `#7c7c7c` | Disabled text |
| `--basic-content-brand-primary` | `#006dff` | Brand-primary text/icon |
| `--basic-content-inverse` | `#ffffff` | Text/icon on dark backgrounds |
| `--basic-background-default` | `#ffffff` | Default surface |
| `--basic-background-hover` | `#fafafa` | Hover surface |
| `--basic-background-disabled` | `#fafafa` | Disabled surface |
| `--basic-background-soft-2` | `#eeeeee` | Subtle background (e.g. spinner track) |
| `--basic-border-default` | `#919191` | Default border |
| `--basic-border-hover` | `#444444` | Hover border |
| `--basic-border-disabled` | `#e0e0e0` | Disabled border |

### Link
| Token | Value | Use |
|---|---|---|
| `--link-1` | `#0163e8` | Default link color |

### Button (use only inside `<Button>` — don't reapply manually)
Tokens scoped to button categories: `--button-primary-*`, `--button-secondary-*`, `--button-tertiary-*`. See `tokens.css`.

### Effects
| Token | Use |
|---|---|
| `--effect-focus-color` | Outer ring color of focus outline |
| `--effect-focus-contrast` | Inner ring color of focus outline |
| `--effect-shadow-high` | Elevated shadow |

## Spacing

| Token | Value |
|---|---|
| `--Component-text-to-element-gap-lg` | 12px |
| `--Component-text-to-element-gap-md` | 8px |
| `--Component-text-to-element-gap-xs` | 4px |
| `--Component-horizontal-padding-xl` | 16px |
| `--Component-horizontal-padding-lg` | 12px |
| `--Component-horizontal-padding-md` | 8px |
| `--Component-horizontal-padding-xs` | 4px |
| `--Component-vertical-padding-lg` | 12px |
| `--Component-vertical-padding-md` | 8px |
| `--Component-vertical-padding-xs` | 4px |

## Radius / borders

| Token | Value |
|---|---|
| `--Component-border-radius` | 4px |
| `--Component-border-width` | 1px |
| `--Button-border-radius` | 50px (pill) |
| `--Button-border-width` | 1px |

## Typography

Each scale has `family`, `size`, `weight`, and `line-height` tokens. Available scales:
- `Label/LG-Default` — 18 / 27 / 400
- `Label/MD-Default` — 16 / 24 / 400
- `Label/SM-Default` — 14 / 20 / 400
- `Text/SM-Default` — 14 / 21 / 400

Tailwind utilities: `font-label-md-default text-label-md-default` (etc.) — they apply family + size + line-height + weight together.

## Adding new tokens

Always add to `src/styles/tokens.css` first, then to `tailwind.config.js` if you want a Tailwind utility for it. Token names must match Figma exactly.
