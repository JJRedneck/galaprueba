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
| `--action-content-disabled` | `#9eccff` | Disabled action text/icon |
| `--action-background-hover` | `#d8e9ff` | Hover surface for action cards (e.g. QuickAction XL) |
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
| `--basic-background-alternative` | `#d8e9ff` | Subtle accent background for focused affordances |
| `--basic-background-soft-1` | `#fafafa` | Subtle background tier 1 (lighter than soft-2) |
| `--basic-background-soft-2` | `#eeeeee` | Subtle background (e.g. spinner track, default Tag) |
| `--basic-background-commercial` | `#ccecda` | Commercial / Booster background |
| `--basic-elevation-overlay` | `#ffffff` | Surface for floating overlays (dropdown popup, tooltip) |
| `--basic-elevation-floating` | `#ffffff` | Surface for floating panels with shadow (Drawer panel) |
| `--basic-elevation-standard` | `#ffffff` | Surface for standard elevated containers |
| `--basic-border-default` | `#919191` | Default border |
| `--basic-border-hover` | `#444444` | Hover border |
| `--basic-border-soft` | `#e0e0e0` | Soft border for cards/containers |
| `--basic-border-disabled` | `#e0e0e0` | Disabled border |
| `--basic-border-brand-primary` | `#006dff` | Brand-primary border (Informative Tag outline) |
| `--basic-border-commercial` | `#9cc3ad` | Commercial / Booster border |

### Feedback (status)
| Token | Value | Use |
|---|---|---|
| `--feedback-content-error` | `#be0028` | Error text/icon |
| `--feedback-content-success` | `#008626` | Success text/icon |
| `--feedback-content-warning` | `#c78616` | Warning text/icon |
| `--feedback-border-error` | `#be0028` | Error border (Tag outline) |
| `--feedback-border-success` | `#008626` | Success border |
| `--feedback-border-warning` | `#c78616` | Warning border (strong) |
| `--feedback-border-warning-soft` | `#fbca8b` | Warning border (soft, Alert Tag) |
| `--feedback-background-default` | `#e0e0e0` | Generic feedback bg |
| `--feedback-background-error` | `#be0028` | Error filled bg |
| `--feedback-background-success` | `#008626` | Success filled bg |
| `--feedback-background-info-soft` | `#d8e9ff` | Informative soft bg (Tag) |
| `--feedback-background-warning-soft` | `#fbca8b` | Warning soft bg (Alert Tag) |

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
| `--effect-shadow-soft` | Soft shadow color for overlays |
| `--effect-shadow-medium` | Standard card elevation shadow color |
| `--effect-shadow-high` | Elevated shadow |
| `--effect-gradient-skeleton-start` | Skeleton gradient start (`#e0e0e0`) |
| `--effect-gradient-skeleton-end` | Skeleton gradient end (`#eeeeee`) |

## Spacing

| Token | Value |
|---|---|
| `--Elements-minimum` | 8px (tight gap between an icon/imagery and its label) |
| `--Elements-base` | 16px (page-level form/section gap) |
| `--Elements-large` | 24px |
| `--Elements-extralarge` | 32px (page-level major section gap) |
| `--Component-text-to-element-gap-xl` | 16px |
| `--Component-text-to-element-gap-lg` | 12px |
| `--Component-text-to-element-gap-md` | 8px |
| `--Component-text-to-element-gap-xs` | 4px |
| `--Component-horizontal-padding-3xl` | 48px |
| `--Component-horizontal-padding-2xl` | 24px |
| `--Component-horizontal-padding-xl` | 16px |
| `--Component-horizontal-padding-lg` | 12px |
| `--Component-horizontal-padding-md` | 8px |
| `--Component-horizontal-padding-xs` | 4px |
| `--Component-vertical-padding-3xl` | 48px |
| `--Component-vertical-padding-2xl` | 24px |
| `--Component-vertical-padding-xl` | 16px |
| `--Component-vertical-padding-lg` | 12px |
| `--Component-vertical-padding-md` | 8px |
| `--Component-vertical-padding-sm` | 6px |
| `--Component-vertical-padding-xs` | 4px |

## Radius / borders

| Token | Value |
|---|---|
| `--Component-border-radius` | 4px |
| `--Component-border-width` | 1px |
| `--Border-radius-sm` | 4px |
| `--Border-radius-md` | 8px |
| `--Border-radius-lg` | 16px |
| `--Button-border-radius` | 50px (pill) |
| `--Button-border-width` | 1px |

## Typography

Each scale has `family`, `size`, `weight`, and `line-height` tokens. Available scales:
- `Label/LG-Default` — 18 / 27 / 400
- `Label/MD-Default` — 16 / 24 / 400
- `Label/MD-Strong` — 16 / 24 / 700
- `Label/SM-Default` — 14 / 20 / 400
- `Text/SM-Default` — 14 / 21 / 400
- `Title/SM-Strong` — 18 / 27 / 600
- `Title/MD-Strong` — 20 / 24 / 600

Utility classes: `fm-font-label-lg`, `fm-font-label-md`, `fm-font-label-md-strong`, `fm-font-label-sm`, `fm-font-text-sm`, `fm-font-title-sm-strong`, `fm-font-title-md-strong` — each bundles family + size + line-height + weight.

## Adding new tokens

Always add to `src/styles/tokens.css` first, then to `tailwind.config.js` if you want a Tailwind utility for it. Token names must match Figma exactly.
