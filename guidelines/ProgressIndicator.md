# ProgressIndicator

Spinning arc loader. Use for indeterminate loading. For determinate progress (with a known percentage), use a different control (not yet in the kit).

## Import

```tsx
import { ProgressIndicator } from '@figma-make-kit/core';
```

## Props

```ts
type ProgressIndicatorProps = {
  size?: 'sm' | 'md';            // default 'md' (md=48px, sm=24px)
  color?: 'blue' | 'white' | 'black'; // default 'blue'
  className?: string;
};
```

## Color → token mapping

| Prop | Token |
|---|---|
| `blue` | `--basic-content-brand-primary` (#006dff) |
| `white` | `--basic-content-inverse` (#ffffff) — use on dark backgrounds |
| `black` | `--basic-content-default` (#000000) |

## Examples

```tsx
<ProgressIndicator />
<ProgressIndicator size="sm" />
<ProgressIndicator color="white" />  // place on a dark surface
```

## Rules

- **`white` is only for dark backgrounds.** It's invisible on light surfaces.
- **The `Button` already uses this internally** when `loading` is true — don't render a ProgressIndicator inside a Button manually.
- **Always announce loading to assistive tech.** The component has `role="status"` + `aria-label="Loading"` built in.
- **Don't put two spinners on the same screen** unless they represent independent regions of loading.
