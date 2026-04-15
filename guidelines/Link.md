# Link

Inline text link. Use for navigation or any inline anchor — never style a raw `<a>` manually.

## Import

```tsx
import { Link } from '@figma-make-kit/core';
```

## Props

```ts
type LinkProps = {
  size?: 'sm' | 'md' | 'lg'; // default 'lg'
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  iconTop?: ReactNode;       // stacks the icon above the text
  children?: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;
```

## Sizes

| Size | Typography |
|---|---|
| `lg` | Label/LG (18 / 27) |
| `md` | Label/MD (16 / 24) |
| `sm` | Label/SM (14 / 20) |

## States

- **Default** — `--link-1` (#0163e8), no underline.
- **Hover** — `--action-content-hover` (#0155ca), underline.
- **Focus** — focus ring (focus-outset), text stays default.

## Examples

```tsx
<Link href="/docs">Read the docs</Link>
<Link href="/pricing" size="md">See pricing</Link>
<Link href="/back" size="sm" iconLeft={<ArrowLeftIcon />}>Back</Link>
<Link href="/learn" iconTop={<BookIcon />}>Learn more</Link>
```

## Rules

- **Always pass `href`.** A link without `href` is not a link — use `<Button category="tertiary">` instead.
- **Don't use a Link as a button.** Links go places; buttons do things.
- **`iconTop` is for compact card-like layouts** where the icon is decorative. For inline reading, use `iconLeft` or `iconRight`.
- **For external links, pass `target="_blank" rel="noopener noreferrer"`** via the rest props.
