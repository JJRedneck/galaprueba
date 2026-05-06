import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
} from 'react';
import { ArrowDownIcon } from './icons/ArrowDownIcon';
import { ErrorIcon } from './icons/ErrorIcon';

export type DropdownProps = {
  label: string;
  value?: string | null;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: ReactNode;
  id?: string;
  className?: string;
  style?: CSSProperties;
};

export function Dropdown({
  label,
  value,
  helperText,
  errorMessage,
  disabled = false,
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  children,
  id,
  className = '',
  style,
}: DropdownProps) {
  const reactId = useId();
  const triggerId = id ?? `fm-dd-${reactId}`;
  const listboxId = `${triggerId}-listbox`;

  const isControlled = openProp !== undefined;
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const open = isControlled ? openProp : internalOpen;

  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const setOpen = useCallback(
    (next: boolean) => {
      if (!isControlled) setInternalOpen(next);
      onOpenChange?.(next);
    },
    [isControlled, onOpenChange],
  );

  useEffect(() => {
    if (!open) return;
    const onDocPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', onDocPointer);
    return () => document.removeEventListener('pointerdown', onDocPointer);
  }, [open, setOpen]);

  const onTriggerKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return;
    if (e.key === 'Escape') {
      if (open) {
        e.preventDefault();
        setOpen(false);
      }
      return;
    }
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setOpen(!open);
    }
  };

  const onListboxClick = (_e: MouseEvent<HTMLUListElement>) => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  const hasError = !!errorMessage;
  const isSelected = value != null && value !== '';
  const message = hasError ? errorMessage : helperText;

  const boxClasses = [
    'fm-dd-box',
    hasError ? 'fm-dd-box--error' : '',
    disabled ? 'fm-dd-box--disabled' : '',
    open ? 'fm-dd-box--open' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      ref={rootRef}
      className={['fm-dd', open ? 'fm-dd--open' : '', className].filter(Boolean).join(' ')}
      style={style}
    >
      <button
        ref={triggerRef}
        type="button"
        id={triggerId}
        className={boxClasses}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listboxId : undefined}
        aria-invalid={hasError || undefined}
        onClick={() => !disabled && setOpen(!open)}
        onKeyDown={onTriggerKeyDown}
      >
        <span className="fm-dd-text">
          {isSelected ? (
            <>
              <span className="fm-dd-floating fm-font-label-sm">{label}</span>
              <span className="fm-dd-value fm-font-label-md">{value}</span>
            </>
          ) : (
            <span className="fm-dd-label fm-font-label-md">{label}</span>
          )}
        </span>
        <span
          className="fm-dd-chevron"
          aria-hidden="true"
          style={{ transform: open ? 'rotate(180deg)' : undefined }}
        >
          <ArrowDownIcon size="xs" />
        </span>
      </button>

      {open && !disabled && (
        <ul
          id={listboxId}
          role="listbox"
          aria-labelledby={triggerId}
          className="fm-dd-listbox"
          onClick={onListboxClick}
        >
          {children}
        </ul>
      )}

      {message && (
        <div className={`fm-dd-message ${hasError ? 'fm-dd-message--error' : ''}`}>
          {hasError && (
            <span className="fm-dd-message-icon" aria-hidden="true">
              <ErrorIcon size="xs" />
            </span>
          )}
          <span className="fm-font-label-sm">{message}</span>
        </div>
      )}
    </div>
  );
}
