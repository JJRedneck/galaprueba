# Input

Form input with a floating label, validation states, and variants for plain text, number, date, password, and multi-line text. Wraps native `<input>` / `<textarea>` for full accessibility.

## Import

```tsx
import { Input } from '@galatea-gamma/core';
```

## Props

```ts
type InputType = 'text' | 'number' | 'date' | 'password' | 'textarea';
type InputState = 'default' | 'success' | 'error' | 'alert';

type InputProps = {
  type?: InputType;                 // default 'text'
  label?: string;                   // floating label
  value?: string;
  defaultValue?: string;
  placeholder?: string;             // shown only when label is floating
  state?: InputState;               // validation state → border + icon color
  message?: ReactNode;              // helper / error / success / alert message
  iconLeft?: ReactNode;             // leading icon (20×20)
  readOnly?: boolean;
  disabled?: boolean;
  rows?: number;                    // textarea only (default 3)
  onClear?: () => void;             // shows a × button while value is non-empty
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  id?: string;
  name?: string;
};
```

Any other native `<input>` / `<textarea>` attribute is passed through (e.g. `autoComplete`, `min`, `max`, `step`, `maxLength`).

## States

| State | How to trigger |
|---|---|
| Default | empty, unfocused — label is shown centered |
| Focus | focus ring + blue border + floating label |
| Filled | value present — floating label, optional clear × |
| Read Only | `readOnly` (grey background, no cursor edit) |
| Disabled | `disabled` |
| Error | `state="error"` + `message="…"` |
| Success | `state="success"` + `message="…"` |
| Alert | `state="alert"` + `message="…"` |

## Examples

```tsx
// Single text input with clear button
const [value, setValue] = useState('');
<Input
  label="Email"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  onClear={() => setValue('')}
/>

// Error state
<Input label="Email" state="error" message="Invalid email." />

// Password with built-in show/hide
<Input type="password" label="Password" />

// Date with calendar icon (native date picker)
<Input type="date" label="Date of birth" />

// Number
<Input type="number" label="Amount" min={0} step={0.01} />

// Multi-line
<Input type="textarea" label="Bio" rows={4} />
```

For a **double input** layout, compose two `<Input>` side by side with flex:

```tsx
<div style={{ display: 'flex', gap: 'var(--Component-horizontal-padding-xl)' }}>
  <Input label="From" />
  <Input label="To" />
</div>
```

## Rules

- **Always pass a `label`.** It doubles as the placeholder in the empty state. For icon-only or no-label cases, use a visible external `<label>` and pass `aria-label` via rest props.
- **Use `state` + `message` together.** The state drives the border and the message icon; the message drives the text below.
- **Don't restyle the border or background.** Validation state is expressed through the `state` prop, not by overriding CSS.
- **`onClear` only works for text-like inputs.** Not used for `password` (use the built-in eye toggle) or `textarea`.
- **For date, rely on the native picker.** Don't wrap the input in a custom popup.
