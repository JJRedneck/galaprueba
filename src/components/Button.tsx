import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { ProgressIndicator } from './ProgressIndicator';

type Category = 'primary' | 'secondary' | 'tertiary' | 'icon' | 'floating' | 'toggle';
type Size = 'sm' | 'md';

export type ButtonProps = {
  category?: Category;
  size?: Size;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  icon?: ReactNode;
  pressed?: boolean;
  loading?: boolean;
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const iconOnlyCategories: Category[] = ['icon', 'floating'];

function sizeClass(category: Category, size: Size): string {
  if (iconOnlyCategories.includes(category)) {
    return size === 'md' ? 'fm-btn--icon-md' : 'fm-btn--icon-sm';
  }
  return size === 'md' ? 'fm-btn--md' : 'fm-btn--sm';
}

function variantClass(category: Category, pressed: boolean): string {
  switch (category) {
    case 'primary':
      return 'fm-btn--primary';
    case 'secondary':
      return 'fm-btn--secondary';
    case 'tertiary':
    case 'icon':
      return 'fm-btn--tertiary';
    case 'floating':
      return 'fm-btn--floating';
    case 'toggle':
      return pressed ? 'fm-btn--primary' : 'fm-btn--tertiary';
  }
}

export function Button({
  category = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  icon,
  pressed = false,
  loading = false,
  children,
  className = '',
  disabled,
  onClick,
  ...rest
}: ButtonProps) {
  const isIconOnly = iconOnlyCategories.includes(category);
  const classes = ['fm-btn', sizeClass(category, size), variantClass(category, pressed), className]
    .filter(Boolean)
    .join(' ');

  const ariaPressed = category === 'toggle' ? pressed : undefined;
  const loadingColor = category === 'primary' || (category === 'toggle' && pressed) ? 'white' : 'blue';

  const iconSlot = (node: ReactNode) => (
    <span
      className="fm-icon-24"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '24px',
        height: '24px',
        flexShrink: 0,
      }}
    >
      {node}
    </span>
  );

  return (
    <button
      className={classes}
      disabled={disabled}
      aria-pressed={ariaPressed}
      aria-busy={loading || undefined}
      aria-disabled={loading || undefined}
      onClick={loading ? undefined : onClick}
      {...rest}
    >
      {loading ? (
        <ProgressIndicator size="sm" color={loadingColor} />
      ) : isIconOnly ? (
        iconSlot(icon)
      ) : (
        <>
          {iconLeft && iconSlot(iconLeft)}
          {children}
          {iconRight && iconSlot(iconRight)}
        </>
      )}
    </button>
  );
}
