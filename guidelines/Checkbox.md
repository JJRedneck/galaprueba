# Checkbox

Form checkbox with a label, indeterminate state, and inline error message. Wraps a native `<input type="checkbox">` for full accessibility.

## Import

```tsx
import { Checkbox } from '@figma-make-kit/core';
```

## Props

```ts
type CheckboxProps = {
  label?: ReactNode;
  indeterminate?: boolean;
  errorMessage?: string;     // when set, renders the "Required" / error layout
  checked?: boolean;
  disabled?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'>;
```

## States

| State | How to trigger |
|---|---|
| Default | `checked={false}` |
| Hover | mouse over (handled internally) |
| Focus | tab (focus ring) |
| Selected | `checked={true}` |
| Indeterminate | `indeterminate={true}` |
| Disabled (off) | `disabled` |
| Disabled (on) | `disabled checked` |
| Required / Error | `errorMessage="…"` |

## Examples

```tsx
const [agreed, setAgreed] = useState(false);

<Checkbox
  label="I agree to the terms"
  checked={agreed}
  onChange={(e) => setAgreed(e.target.checked)}
/>

<Checkbox label="Select all" indeterminate readOnly />

<Checkbox label="Subscribe" disabled />

<Checkbox
  label="Accept policy"
  errorMessage="Required."
  checked={agreed}
  onChange={(e) => setAgreed(e.target.checked)}
/>
```

## Rules

- **Always pass a `label`** unless space forbids it; if there's no visible label, pass `aria-label` via the rest props.
- **Use `indeterminate` for parent rows** when only some children are checked. Don't use it as a third state.
- **Use `errorMessage` for inline form validation** (e.g. "Required.", "Must accept terms"). The component renders the red error icon and message below.
- **Don't put a checkbox inside a clickable parent.** The label already handles click-to-toggle.
- **The box is always 32×32.** Don't override its size.
