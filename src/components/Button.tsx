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

const base =
  'inline-flex items-center justify-center ' +
  'gap-Component-text-to-element-gap-md ' +
  'rounded-Button-border-radius ' +
  'font-label-md-default text-label-md-default ' +
  'outline-none disabled:cursor-not-allowed ' +
  'focus-visible:shadow-focus-outset';

const iconOnlyCategories: Category[] = ['icon', 'floating'];

function sizePadding(category: Category, size: Size): string {
  if (iconOnlyCategories.includes(category)) {
    return size === 'md'
      ? 'p-Component-horizontal-padding-lg'
      : 'p-Component-horizontal-padding-xs';
  }
  const py =
    size === 'md'
      ? 'py-Component-vertical-padding-lg'
      : 'py-Component-vertical-padding-xs';
  return `${py} px-Component-horizontal-padding-xl`;
}

const primaryClasses = [
  'bg-button-primary-background-default text-button-primary-content-default',
  'hover:bg-button-primary-background-hover hover:text-button-primary-content-hover',
  'active:bg-button-primary-background-pressed',
  'disabled:bg-button-primary-background-disabled disabled:text-button-primary-content-disabled',
].join(' ');

const secondaryClasses = [
  'bg-button-secondary-background-default text-button-secondary-content-default',
  'border-Button-border-width border-button-secondary-border-default',
  'hover:bg-button-secondary-background-hover hover:text-button-secondary-content-hover hover:border-button-secondary-border-hover',
  'active:bg-button-secondary-background-pressed active:border-button-secondary-border-pressed',
  'disabled:bg-button-secondary-background-disabled disabled:text-button-secondary-content-disabled disabled:border-button-secondary-border-disabled',
].join(' ');

const tertiaryClasses = [
  'bg-transparent text-button-tertiary-content-default',
  'hover:bg-button-tertiary-background-hover hover:text-button-tertiary-content-hover',
  'active:bg-button-tertiary-background-pressed',
  'disabled:text-button-tertiary-content-disabled',
].join(' ');

const floatingClasses = [
  'bg-button-secondary-background-default text-action-content-default',
  'border-Button-border-width border-button-secondary-border-default',
  'shadow-elevation-raised',
  'hover:bg-button-secondary-background-hover hover:border-button-secondary-border-hover',
  'active:bg-button-secondary-background-pressed active:border-button-secondary-border-pressed',
].join(' ');

function categoryClasses(category: Category, pressed: boolean): string {
  switch (category) {
    case 'primary':
      return primaryClasses;
    case 'secondary':
      return secondaryClasses;
    case 'tertiary':
      return tertiaryClasses;
    case 'icon':
      return tertiaryClasses;
    case 'floating':
      return floatingClasses;
    case 'toggle':
      return pressed ? primaryClasses : tertiaryClasses;
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
  const classes = [
    base,
    sizePadding(category, size),
    categoryClasses(category, pressed),
    className,
  ].join(' ');

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
