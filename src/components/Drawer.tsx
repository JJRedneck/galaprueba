import {
  useEffect,
  useId,
  useRef,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from 'react';
import { Button } from './Button';
import { CloseIcon } from './icons/CloseIcon';

export type DrawerPosition = 'bottom' | 'right' | 'center';

export type DrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  position?: DrawerPosition;
  title?: string;
  description?: string;
  icon?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
  closeAriaLabel?: string;
  className?: string;
  /** When false, clicking the scrim does not close the drawer. */
  dismissOnScrim?: boolean;
};

export function Drawer({
  open,
  onOpenChange,
  position = 'bottom',
  title,
  description,
  icon,
  footer,
  children,
  closeAriaLabel = 'Close',
  className = '',
  dismissOnScrim = true,
}: DrawerProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descId = useId();

  // Sync `open` prop to <dialog>'s native modal state.
  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    if (open && !dlg.open) {
      dlg.showModal();
    } else if (!open && dlg.open) {
      dlg.close();
    }
  }, [open]);

  // Native close (ESC key, .close() call) → propagate to consumer.
  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    const handle = () => onOpenChange(false);
    dlg.addEventListener('close', handle);
    return () => dlg.removeEventListener('close', handle);
  }, [onOpenChange]);

  // Click on the dialog itself (= the scrim area, outside the panel) closes.
  const handleScrimClick = (e: ReactMouseEvent<HTMLDialogElement>) => {
    if (!dismissOnScrim) return;
    if (e.target === dialogRef.current) {
      onOpenChange(false);
    }
  };

  const labelledBy = title ? titleId : undefined;
  const describedBy = description ? descId : undefined;

  return (
    <dialog
      ref={dialogRef}
      className={['fm-drawer', `fm-drawer--${position}`, className].filter(Boolean).join(' ')}
      onClick={handleScrimClick}
      aria-labelledby={labelledBy}
      aria-describedby={describedBy}
    >
      <div className="fm-drawer-panel" role="document">
        <div className="fm-drawer-close">
          <Button
            category="icon"
            size="md"
            icon={<CloseIcon />}
            onClick={() => onOpenChange(false)}
            aria-label={closeAriaLabel}
          />
        </div>

        {(title || description || icon) && (
          <header className="fm-drawer-header">
            {icon && <div className="fm-drawer-icon">{icon}</div>}
            <div className="fm-drawer-titles">
              {title && (
                <h2 id={titleId} className="fm-drawer-title fm-font-title-md-strong">
                  {title}
                </h2>
              )}
              {description && (
                <p id={descId} className="fm-drawer-description fm-font-label-md">
                  {description}
                </p>
              )}
            </div>
          </header>
        )}

        <div className="fm-drawer-body">{children}</div>

        {footer && <footer className="fm-drawer-footer">{footer}</footer>}
      </div>
    </dialog>
  );
}
