# Dropdown

Single-select dropdown with a labeled trigger and a listbox of `<DropdownItem>` rows. Implements types **Input** and **Expanded**.

```tsx
import { Dropdown, DropdownItem } from '@galatea-gamma/core';

const [value, setValue] = useState<string | null>(null);

<Dropdown label="Country" value={value} helperText="Pick one">
  <DropdownItem selected={value === 'es'} onClick={() => setValue('es')}>Spain</DropdownItem>
  <DropdownItem selected={value === 'fr'} onClick={() => setValue('fr')}>France</DropdownItem>
</Dropdown>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | — | Floating label. Shown alone in `Default`; collapses above the value when filled. |
| `value` | `string \| null` | — | Display text of the currently selected option. Drives the "Selected" visual. |
| `helperText` | `string` | — | Subtle helper line below the trigger |
| `errorMessage` | `string` | — | Replaces helper, paints the trigger border red, prefixes message with an error icon |
| `disabled` | `boolean` | `false` | Greys out the trigger and prevents opening |
| `open` / `defaultOpen` | `boolean` | `false` | Controlled / uncontrolled open state |
| `onOpenChange` | `(open: boolean) => void` | — | Fires whenever open changes (user click, key, item-click, click-outside) |
| `children` | `ReactNode` | — | `<DropdownItem>` rows. Rendered only when open. |

## Behaviour

- Click trigger or press `Enter` / `Space` / `ArrowDown` → toggle open.
- `Escape` → close.
- Click outside or click any item → close (and refocus the trigger).
- `<DropdownItem onClick>` is the only place selection state lives — the consumer keeps `value` and decides what to do.

## Accessibility

- Trigger is a `<button aria-haspopup="listbox" aria-expanded>`.
- Listbox is `<ul role="listbox" aria-labelledby={triggerId}>`.
- `errorMessage` sets `aria-invalid` on the trigger.
- `<DropdownItem>` already exposes `role="option"` and `aria-selected`.

## Out of scope (this component)

- `Autocomplete` and `Multiselect` types (search input, checkbox rows) — not implemented yet.
- Arrow-key navigation through items (active-descendant). The trigger only opens/closes; option-level keyboard nav will land when those types arrive.
