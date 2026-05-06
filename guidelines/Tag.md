# Tag

Pill-shaped status indicator. Use it to label a state of something — pendiente, en curso, finalizado, error, etc. Per the Figma documentation it is also the right pattern for "Status Tag" displayed at the bottom of components.

## Import

```tsx
import { Tag } from '@galatea-gamma/core';
```

## Props

```ts
type TagProps = {
  state?: 'default' | 'informative' | 'success' | 'alert' | 'error' | 'booster'; // default 'default'
  variant?: 'filled' | 'outline';                                                  // default 'filled'
  icon?: ReactNode;     // optional left icon (24×24, e.g. <ErrorIcon size="sm" />)
  children: ReactNode;  // label
  className?: string;
} & HTMLAttributes<HTMLSpanElement>;
```

> Renamed from Figma: state `Succes` → `success` (typo fixed); prop `style` → `variant` (avoids clashing with React's `style` prop).

## States

| State | Filled bg | Outline border | Use |
|---|---|---|---|
| `default` | `--basic-background-soft-2` (gray) | `--basic-border-default` | Neutral status |
| `informative` | `--feedback-background-info-soft` (blue tint) | `--basic-border-brand-primary` | Information / hint |
| `success` | `--feedback-background-success` (green) | `--feedback-border-success` | Completed / OK |
| `alert` | `--feedback-background-warning-soft` (peach) | `--feedback-border-warning-soft` | Warning, needs attention |
| `error` | `--feedback-background-error` (red) | `--feedback-border-error` | Error / blocked |
| `booster` | `--basic-background-commercial` (mint) + commercial border | `--basic-border-commercial` | Commercial / promo |

> `success` and `error` Filled use `--basic-content-inverse` (white text) because of the dark backgrounds. All other Filled and all Outline use `--basic-content-default` (black text).
> `booster` Filled is the only Filled that always renders a border.

## Variants

| Variant | Look |
|---|---|
| `filled` (default) | Solid background per state. |
| `outline` | Transparent background + 1px border per state, black text. |

## Icon

Pass any `ReactNode` to `icon` for a left-aligned 24×24 icon. Match the icon to the state at the call site:

```tsx
import { Tag, ErrorIcon, AlertIcon, CheckCircleIcon, PlaceholderIcon } from '@galatea-gamma/core';

<Tag state="error" variant="filled" icon={<ErrorIcon size="sm" tone="inverse" />}>Failed</Tag>
<Tag state="error" variant="outline" icon={<ErrorIcon size="sm" />}>Failed</Tag>
<Tag state="alert" icon={<AlertIcon size="sm" />}>Pending review</Tag>
<Tag state="success" icon={<CheckCircleIcon size="sm" />}>Completed</Tag>
<Tag state="informative" icon={<PlaceholderIcon size="sm" />}>Info</Tag>
```

## Usage

```tsx
<Tag>Default</Tag>
<Tag state="success">Completed</Tag>
<Tag state="error" variant="outline">Failed</Tag>
<Tag state="booster">Promo</Tag>
```

## Tokens

| Property | Token |
|---|---|
| Padding (no icon) | `--Component-vertical-padding-sm` × `--Component-horizontal-padding-xl` (6 × 16) |
| Padding (with icon) | `--Component-vertical-padding-xs` × (`--Component-horizontal-padding-lg` left, `--Component-horizontal-padding-xl` right) (4 × 12 / 16) |
| Border radius | `--Border-radius-md` (8px) |
| Border width | `--Component-border-width` (1px) |
| Icon ↔ label gap | `--Component-text-to-element-gap-md` (8px) |
| Typography | `fm-font-text-sm` |

## Accessibility

- `<Tag>` renders a `<span>` — it is non-interactive. Don't add `onClick`; if you need a clickable chip, use `<Button>` instead.
- The icon is presentational; it inherits `aria-hidden` behavior from the kit's icons (decorative by default).
- For dynamic status updates, wrap a region of Tags in an `aria-live="polite"` container.
