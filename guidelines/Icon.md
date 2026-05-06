# Icon

Foundation component for icons. Each named icon (`PlaceholderIcon`, …) wraps `Icon` and supplies its own SVG paths.

## Sizes (mirror Figma `Assets-v1.0` — Size variants)

| `size` | outer (px) | Use |
|---|---|---|
| `xs` | 16 | Inline with body text, dense controls |
| `sm` | 24 | Default — buttons, form fields, nav |
| `md` | 32 | Section headers, list rows |
| `lg` | 40 | Empty-state illustrations, large affordances |

## Color

Icons inherit `color` from their parent via `currentColor`. Don't pass `fill` / `stroke` — restyle the parent instead:

```tsx
<span style={{ color: 'var(--action-content-default)' }}>
  <PlaceholderIcon size="md" />
</span>
```

Inside `<Button>`, `<Link>`, `<Input>`, the icon picks up the component's text color automatically.

## Usage

```tsx
import { PlaceholderIcon } from '@galatea-gamma/core';

<PlaceholderIcon size="md" />
<Button iconLeft={<PlaceholderIcon size="sm" />}>Lorem</Button>
```

## Accessibility

- By default the SVG is `aria-hidden="true"` (decorative). Use this when the icon sits next to descriptive text.
- Pass `aria-label` to expose the icon as a meaningful image (sets `role="img"` automatically). Only do this for icon-only affordances where the parent doesn't already carry the label.

## Adding a new icon

1. Get the SVG from Figma (`Assets-v1.0`, the icon component, **size SM** — outer 24px).
2. Drop a file in `src/components/icons/<Name>Icon.tsx`:
   ```tsx
   import { Icon, type IconProps } from '../Icon';

   export function MyNewIcon(props: Omit<IconProps, 'children' | 'viewBox'>) {
     return (
       <Icon viewBox="0 0 24 24" {...props}>
         <path d="…" fill="currentColor" />
       </Icon>
     );
   }
   ```
3. Replace any hardcoded `fill="#xxxxxx"` / `stroke="#xxxxxx"` in the Figma SVG with `currentColor`.
4. Export it from `src/index.ts`.

If an icon has size-specific paths in Figma (different drawing per size for pixel hinting), branch on `size` inside the component:

```tsx
export function MyNewIcon({ size = 'sm', ...rest }: IconProps) {
  if (size === 'xs') return <Icon size={size} viewBox="0 0 16 16" {...rest}>…</Icon>;
  if (size === 'md') return <Icon size={size} viewBox="0 0 32 32" {...rest}>…</Icon>;
  return <Icon size={size} viewBox="0 0 24 24" {...rest}>…</Icon>;
}
```

The current `PlaceholderIcon` only ships the SM (24×24) variant and lets it scale.
