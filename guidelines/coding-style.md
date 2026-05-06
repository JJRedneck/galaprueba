# Coding style

How Figma Make should write code on top of this kit.

## Stack

- React 18+ (functional components, hooks)
- TypeScript
- Plain CSS — design tokens exposed as CSS variables (see `tokens.md`)
- No Tailwind, no CSS-in-JS

## Import order

1. React + standard libs
2. Third-party
3. Kit components (`@galatea-gamma/core`)
4. Local components
5. Local styles

```tsx
import { useState } from 'react';
import { Button, Checkbox } from '@galatea-gamma/core';
import { MyCard } from './MyCard';
```

## Layout

- **Use plain CSS** (flex/grid, padding, gap) in stylesheets or inline `style={{}}`.
- **Use the `--Component-*` spacing variables** for gaps that match the design system rhythm: `gap: var(--Component-text-to-element-gap-md)`, `padding: var(--Component-horizontal-padding-lg)`.
- **Don't introduce arbitrary pixel values** when a token exists.

## Color

- **Never hardcode hex.** Use a token via CSS var: `color: var(--basic-content-default)`, `background: var(--basic-background-default)`, `color: var(--link-1)`.
- **For ad-hoc surfaces**, prefer `--basic-background-default` + `--basic-border-default`.

## Typography

The kit ships four typography utility classes (each bundles family + size + line-height + weight):

```tsx
<p className="fm-font-label-md">Body text</p>
```

Available: `fm-font-label-lg`, `fm-font-label-md`, `fm-font-label-sm`, `fm-font-text-sm`.

## Accessibility

- **Buttons need labels.** Icon-only buttons require `aria-label`.
- **Form controls need associated labels.** `<Checkbox label="…">` does this automatically.
- **Loading states need `aria-busy` or `role="status"`.** Built into `Button` (when `loading`) and `ProgressIndicator`.
- **Links must have `href`.** Otherwise it's a button.

## Don'ts

- **Don't restyle kit components.** No `className` overrides for color, padding, border, radius. Layout-affecting styles (`marginRight`, `flex: 1`) are fine via `style={{}}` or an external class.
- **Don't recreate components.** If you need a button, use `<Button>`. If a variant is missing, ask before extending.
- **Don't write CSS-in-JS (`styled-components`, Emotion) or bring in Tailwind.** The kit is plain CSS + CSS variables — stick with that.
- **Don't add new colors.** All colors come from the Foundations library.
