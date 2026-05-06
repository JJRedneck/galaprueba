# Drawer

Modal dialog that slides in from the bottom, side, or appears centered. Built on the native `<dialog>` element so ESC, focus trap, and inert background come for free.

## Import

```tsx
import { Drawer } from '@galatea-gamma/core';
```

## Props

```ts
type DrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  position?: 'bottom' | 'right' | 'center'; // default 'bottom'
  title?: string;
  description?: string;
  icon?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
  closeAriaLabel?: string;       // default 'Close'
  className?: string;
  dismissOnScrim?: boolean;      // default true
};
```

## Positions

| Position | Shape | When to use |
|---|---|---|
| `bottom` | Bottom sheet, full-width up to 768px, rounded top corners. | Mobile / tablet primary pattern. |
| `right` | Side panel, 440–600px wide, rounded left corners, full height. | Widescreen detail / form panels. |
| `center` | Centered card, 912px max, rounded all corners, scrim around. | Widescreen confirmations and focused tasks. |

> Variants `position="left"`, `type="commercial"`, `type="scroll"`, `type="default - text action"`, and `state="partially open" | "preview"` from Figma are **not yet implemented** in this kit.

## Anatomy

```
┌─────────────────────────────────┐
│ [icon] Title              [X]   │  header (title, description, icon, close)
│        Description              │
├─────────────────────────────────┤
│ children                        │  body (scrolls if overflow)
│                                 │
├─────────────────────────────────┤
│ footer                          │  footer (typically a ButtonSet)
└─────────────────────────────────┘
```

`title`, `description`, and `icon` are all optional — passing none hides the header. The header automatically wires `aria-labelledby` / `aria-describedby` to the dialog.

## Usage

```tsx
const [open, setOpen] = useState(false);

<Drawer
  open={open}
  onOpenChange={setOpen}
  position="bottom"
  title="Confirmar operación"
  description="Revisa los detalles antes de continuar."
  footer={
    <ButtonSet style="stack">
      <Button category="primary" onClick={confirm}>Confirmar</Button>
      <Button category="secondary" onClick={() => setOpen(false)}>Cancelar</Button>
    </ButtonSet>
  }
>
  <p className="fm-font-text-sm">Cuerpo del diálogo…</p>
</Drawer>
```

## Closing

- Click the X button → `onOpenChange(false)`.
- Press ESC → `onOpenChange(false)` (native `<dialog>` behavior).
- Click the scrim → `onOpenChange(false)` unless `dismissOnScrim={false}`.

The component does not auto-close on action; the caller decides when to flip `open`.

## Tokens

| Property | Token |
|---|---|
| Panel background | `--basic-elevation-floating` |
| Scrim | `--effect-scrim` |
| Panel radius | `--Border-radius-lg` (per side per position) |
| Shadow | `--effect-shadow-soft` + `--effect-shadow-strong` (elevation-floating) |
| Header gap | `--Component-horizontal-padding-xl` |
| Title↔description gap | `--Component-vertical-padding-xs` |
| Body↔footer gap | `--Component-vertical-padding-xl` |
| Text colors | `--basic-content-default` |

Typography:
- Title: `fm-font-title-md-strong`
- Description: `fm-font-label-md`

## Accessibility

- Renders a native `<dialog>` opened with `showModal()` — focus is trapped, background is inert, ESC closes.
- The X button has `aria-label={closeAriaLabel}` (default `'Close'`).
- When `title` is set it becomes the `aria-labelledby` target; when `description` is set it becomes the `aria-describedby` target.
- For drawers without a visible title, pass a `closeAriaLabel` and ideally an `aria-label` via `className`'s peer or wrap the trigger label appropriately at the call site.
