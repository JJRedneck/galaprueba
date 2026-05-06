# DropdownItem

A single row inside a dropdown listbox. Designed to be rendered as a child of a `<ul role="listbox">`.

```tsx
import { DropdownItem } from '@galatea-gamma/core';

<ul role="listbox">
  <DropdownItem onClick={...}>Dropdown option</DropdownItem>
  <DropdownItem selected onClick={...}>Selected option</DropdownItem>
  <DropdownItem variant="no-results">No results</DropdownItem>
</ul>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'option' \| 'no-results'` | `'option'` | `option` is interactive; `no-results` is a non-interactive bold notice |
| `selected` | `boolean` | `false` | (option only) Highlights the row, makes the label bold, and shows a trailing checkmark |
| `multiline` | `boolean` | `false` | Allows the label to wrap; otherwise truncates with an ellipsis |
| `children` | `ReactNode` | — | Label text |
| …all `<li>` attributes | | | Forwarded to the underlying `<li>` |

## States (handled by CSS)

`hover` is styled automatically on `option` rows. `no-results` is non-interactive (no hover, default cursor).

## Accessibility

- Renders as `<li role="option">` for `option` variant — must live inside an element with `role="listbox"`.
- `selected` sets `aria-selected="true"` so screen readers announce the current selection.
- `no-results` renders as `<li role="status">` so it's announced when shown.
- The bold + checkmark indicator is purely visual; the accessible state comes from `aria-selected`.

## Pending

The `checkbox` variant (multi-select) is not implemented yet — it depends on the `Checkbox` component, which is being rebuilt.
