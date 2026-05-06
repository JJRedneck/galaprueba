# ButtonSet

Layout container for groups of `<Button>`. Use it whenever a screen, modal, drawer, or section needs to render two or more actions side by side or stacked.

## Import

```tsx
import { ButtonSet, Button } from '@galatea-gamma/core';
```

## Props

```ts
type ButtonSetProps = {
  style?: 'inline' | 'stack'; // default 'inline'
  children?: ReactNode;       // expected: <Button> elements
  className?: string;
} & HTMLAttributes<HTMLDivElement>;
```

## Styles

| Style | Layout | When to use |
|---|---|---|
| `inline` | Horizontal row, wraps if needed. | Desktop / wide containers. Primary+Secondary side by side. |
| `stack` | Vertical column, full-width buttons. | Mobile / narrow containers. Drawer footer on bottom sheet. |

The gap between buttons is `--Component-text-to-element-gap-xl` (16px) in both styles.

In `stack`, children are forced to `width: 100%` so all buttons share the full width of the container.

## Usage

```tsx
<ButtonSet style="stack">
  <Button category="primary">Confirmar</Button>
  <Button category="secondary">Cancelar</Button>
  <Button category="tertiary">Más opciones</Button>
</ButtonSet>
```

```tsx
<ButtonSet style="inline">
  <Button category="primary">Save</Button>
  <Button category="secondary">Cancel</Button>
</ButtonSet>
```

## Pairing with Drawer

The Drawer's `footer` slot is the canonical home for a `ButtonSet`. On mobile/tablet drawers (`position="bottom"`) use `style="stack"`; on side or center drawers use `style="inline"`.

```tsx
<Drawer
  open={open}
  onOpenChange={setOpen}
  position="bottom"
  title="Título"
  footer={
    <ButtonSet style="stack">
      <Button category="primary">Aceptar</Button>
      <Button category="secondary">Cancelar</Button>
    </ButtonSet>
  }
>
  …
</Drawer>
```

## Tokens

- `--Component-text-to-element-gap-xl` — gap between buttons (16px).

No color, border, radius, or typography tokens — the ButtonSet is layout-only; visual weight comes from each `<Button>`.
