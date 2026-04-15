# Button

Pill-shaped button with six categories and two sizes. Always use `<Button>` for any clickable action — never a raw `<button>` or styled `<div>`.

## Import

```tsx
import { Button } from '@figma-make-kit/core';
```

## Props

```ts
type ButtonProps = {
  category?: 'primary' | 'secondary' | 'tertiary' | 'icon' | 'floating' | 'toggle'; // default 'primary'
  size?: 'sm' | 'md'; // default 'md'
  iconLeft?: ReactNode;   // text buttons only
  iconRight?: ReactNode;  // text buttons only
  icon?: ReactNode;       // icon-only categories ('icon', 'floating')
  pressed?: boolean;      // toggle category only
  loading?: boolean;      // shows ProgressIndicator, button stays interactive shape
  disabled?: boolean;
  children?: ReactNode;   // label
} & ButtonHTMLAttributes<HTMLButtonElement>;
```

## Categories

| Category | When to use |
|---|---|
| `primary` | Main action of a screen / form. One per view. |
| `secondary` | Adjacent action to a primary (e.g. Cancel next to Save). |
| `tertiary` | Low-emphasis action, inline in dense UI. |
| `icon` | Icon-only action where space is tight. Pass `aria-label`. |
| `floating` | Elevated icon button (FAB-style), sits over content with a shadow. Pass `aria-label`. |
| `toggle` | Stateful on/off control. Drive with `pressed`. |

## Sizes

- `md` — default. 24px tall content + 12px vertical padding = ~48px box.
- `sm` — compact. Use in dense UI (table rows, toolbars).

## Examples

```tsx
<Button onClick={save}>Save</Button>
<Button category="secondary" onClick={cancel}>Cancel</Button>
<Button category="tertiary" size="sm">More</Button>

<Button category="icon" icon={<PlusIcon />} aria-label="Add" />
<Button category="floating" icon={<PlusIcon />} aria-label="New" />

<Button loading>Saving…</Button>

<Button category="toggle" pressed={isBold} onClick={() => setBold(!isBold)}>
  B
</Button>

<Button iconLeft={<PlusIcon />}>Add item</Button>
<Button category="secondary" iconRight={<ChevronIcon />}>Next</Button>
```

## Rules

- **Icons must be SVGs.** Any SVG passed as `icon`, `iconLeft`, or `iconRight` is auto-sized to 24×24 — don't set width/height yourself.
- **Pass `aria-label` on icon-only categories** (`icon`, `floating`). Without it the button is unlabeled to assistive tech.
- **Don't use `loading` and `disabled` together** — `loading` already prevents interaction without applying disabled visual styling.
- **Don't recolor.** All colors come from `--button-*` tokens.
- **Toggle is for binary state.** For multi-state, use a different control (segmented control, dropdown).
