# InfoBox

Vertical block that pairs a piece of media (icon, imagery, rich illustration) with a title and a body. Use it for empty states, feature highlights, onboarding tiles, and any "media + text + description" pattern.

## Import

```tsx
import { InfoBox } from '@galatea-gamma/core';
```

## Props

```ts
type InfoBoxProps = {
  media?: ReactNode;          // icon, image, or composed illustration
  title?: string;              // omit → "Compact" style (no title)
  children?: ReactNode;        // body text
  align?: 'left' | 'center';   // default 'left'
  size?: 'sm' | 'md';          // default 'md'
  background?: boolean;        // default false → renders as a card when true
  className?: string;
} & HTMLAttributes<HTMLDivElement>;
```

## Anatomy

```
┌──────────────┐
│ [media]      │
│ Title        │
│ Body text…   │
└──────────────┘
```

Gap rules (driven by `size` and whether `title` is present):

| Case | media → texts | title → body |
|---|---|---|
| `size="md"` Extended | 24px (`--Component-vertical-padding-2xl`) | 16px (`--Component-vertical-padding-xl`) |
| `size="sm"` Extended | 16px (`--Component-vertical-padding-xl`) | 8px (`--Component-vertical-padding-md`) |
| Compact (no title) | 8px (`--Component-vertical-padding-md`) | — |

Outer container has `max-width: 480px` to match Figma.

### Layout direction

| size + align | direction |
|---|---|
| `md` (any align) | Vertical — icon on top, texts below. |
| `sm` + `left` | **Horizontal** — icon on the left, texts on the right (`flex: 1`). |
| `sm` + `center` | Vertical — icon on top, centered. |
| Compact (no title, any size) | Vertical. |

## Variants

| Axis | Values | Behavior |
|---|---|---|
| `size` | `md` (default) / `sm` | `md` uses `Title/MD-Strong` (20px), `sm` uses `Title/SM-Strong` (18px). |
| `align` | `left` (default) / `center` | Aligns media + text horizontally. |
| `background` | `false` (default) / `true` | `true` wraps content in a card: `--basic-elevation-standard` background, `--basic-border-soft` border, `--Border-radius-lg` radius, `elevation-standard` shadow, padding 24×16. |
| (`title?`) | omit for Compact | No prop — driven by whether you pass `title`. |

## `media` slot

Pass any of the four content types from Figma as a ReactNode:

| Figma content | What to pass |
|---|---|
| Icon con BG | A 64×64 div with `background: var(--basic-background-soft-1)`, fully rounded (50%), centering a 32×32 icon (`<*Icon size="md" />`). |
| Icon sin BG | A bare `<*Icon size="…" />` (e.g. `<PlaceholderIcon size="md" />`). |

Example for "Icon con BG":

```tsx
<InfoBox
  media={
    <div
      style={{
        width: 64,
        height: 64,
        borderRadius: '50%',
        background: 'var(--basic-background-soft-1)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <PlaceholderIcon size="md" />
    </div>
  }
  title="Title"
>
  Body text…
</InfoBox>
```

The component does not constrain media size — the caller controls it.

## Usage

```tsx
<InfoBox
  media={<PlaceholderIcon size="lg" />}
  title="Title"
  size="md"
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</InfoBox>
```

```tsx
{/* Compact: no title */}
<InfoBox media={<PlaceholderIcon size="md" />} size="sm" align="center">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</InfoBox>
```

```tsx
{/* Card with background */}
<InfoBox
  media={<PlaceholderIcon size="lg" />}
  title="Title"
  background
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</InfoBox>
```

## Tokens

| Property | Token |
|---|---|
| Title (md) | `fm-font-title-md-strong` |
| Title (sm) | `fm-font-title-sm-strong` |
| Body | `fm-font-label-md` |
| Text color | `--basic-content-default` |
| Card bg | `--basic-elevation-standard` |
| Card border | `--basic-border-soft` |
| Card radius | `--Border-radius-lg` |
| Card padding | `--Component-vertical-padding-xl` × `--Component-horizontal-padding-xl` (16 × 16) |
| Card shadow | `--effect-shadow-medium` (elevation-standard composite) |
| media → texts gap (md/sm/compact) | `--Component-vertical-padding-2xl` / `-xl` / `-md` |
| title → body gap (md/sm) | `--Component-vertical-padding-xl` / `-md` |
| Outer max-width | 480px |
