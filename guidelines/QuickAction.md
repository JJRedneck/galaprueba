# QuickAction

A compact, tappable action with a circular icon and a label below it. Used in grids of shortcuts (XS) or as a card-style entry point (XL).

```tsx
import { QuickAction } from '@galatea-gamma/core';

<QuickAction icon={<PlusIcon />} onClick={...}>Add</QuickAction>
<QuickAction size="xl" icon={<PlusIcon />} onClick={...}>Add new item</QuickAction>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `'xs' \| 'xl'` | `'xs'` | XS = 90px circle-on-top action; XL = 240px card |
| `icon` | `ReactNode` | — | SVG icon (rendered at 14px) |
| `loading` | `boolean` | `false` | Skeleton state — replaces icon and label with shimmering placeholders |
| `disabled` | `boolean` | `false` | Disables interaction |
| `children` | `ReactNode` | — | Label text |
| …all `<button>` attributes | | | Forwarded to the underlying `<button>` |

## States (handled by CSS, not props)

`hover`, `active` (pressed), and `focus-visible` are styled automatically. Don't pass them as props.

## Accessibility

- Renders as a `<button type="button">` — needs no extra role.
- Pass an `aria-label` if the label is purely decorative; otherwise the visible text is the accessible name.
- `loading` sets `aria-busy` and disables the click handler.
