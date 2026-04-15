# Coding style

How Figma Make should write code on top of this kit.

## Stack

- React 18+ (functional components, hooks)
- TypeScript
- Tailwind CSS for layout/utilities; design-token utilities are mapped in `tailwind.config.js`
- CSS variables for colors, spacing, radii, typography (see `tokens.md`)

## Import order

1. React + standard libs
2. Third-party
3. Kit components (`@figma-make-kit/core`)
4. Local components
5. Local styles

```tsx
import { useState } from 'react';
import { Button, Checkbox } from '@figma-make-kit/core';
import { MyCard } from './MyCard';
```

## Layout

- **Use Tailwind utilities for layout** (`flex`, `grid`, `gap-*`, `p-*`).
- **Use the `Component-*` spacing tokens** for gaps that match the design system rhythm: `gap-Component-text-to-element-gap-md`, `p-Component-horizontal-padding-lg`, etc.
- **Don't introduce arbitrary pixel values** when a token exists.

## Color

- **Never hardcode hex.** Use a token: `bg-basic-background-default`, `text-basic-content-default`, `var(--link-1)`, etc.
- **For new ad-hoc surfaces**, prefer `--basic-background-default` + `--basic-border-default`.

## Typography

Use the typography utilities together (font + size set the family, size, line-height, weight in one go):

```tsx
<p className="font-label-md-default text-label-md-default">Body text</p>
```

## Accessibility

- **Buttons need labels.** Icon-only buttons require `aria-label`.
- **Form controls need associated labels.** `<Checkbox label="…">` does this automatically.
- **Loading states need `aria-busy` or `role="status"`.** Built into `Button` (when `loading`) and `ProgressIndicator`.
- **Links must have `href`.** Otherwise it's a button.

## Don'ts

- **Don't restyle kit components.** No `className` overrides for color, padding, border, radius. Layout-affecting classes (`mr-2`, `flex-1`) are fine.
- **Don't recreate components.** If you need a button, use `<Button>`. If a variant is missing, ask before extending.
- **Don't write CSS-in-JS (`styled-components`, Emotion).** The kit uses Tailwind + CSS variables; stick with that.
- **Don't add new colors.** All colors come from the Foundations library.
