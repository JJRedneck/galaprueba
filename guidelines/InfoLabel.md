# InfoLabel

A small two-line label: `head` (caption) on top, `body` (value) below. Use for list rows, key/value pairs, summary cards, and form review screens.

## Import

```tsx
import { InfoLabel } from '@figma-make-kit/core';
```

## Props

```ts
type InfoLabelProps = {
  size?: 'sm' | 'xs' | 'xxs'; // default 'sm'
  head?: ReactNode;            // small caption (always Text/SM)
  body?: ReactNode;            // the value (size determines its typography)
  className?: string;
};
```

## Sizes

| Size | Body typography |
|---|---|
| `sm` | Label/LG (18 / 27) |
| `xs` | Label/MD (16 / 24) |
| `xxs` | Label/SM (14 / 20) |

`head` is always `Text/SM-Default` regardless of size.

## Color

- `head` → `--basic-content-soft` (#646464)
- `body` → `--basic-content-default` (#000)

## Examples

```tsx
<InfoLabel head="Email" body="jorge@example.com" />
<InfoLabel size="xs" head="Total" body="$1,240" />
<InfoLabel size="xxs" head="Updated" body="2 min ago" />
```

## Rules

- **`head` is for the caption / field name.** Keep it short — single word or short phrase.
- **`body` is for the value.** Don't put paragraphs here; for prose use raw text + tokens.
- **Don't use `<InfoLabel>` for headings.** It's not semantic — use `<h1>`–`<h6>`.
