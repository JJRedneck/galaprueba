import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Size = 'xs' | 'xl';

export type QuickActionProps = {
  size?: Size;
  icon?: ReactNode;
  loading?: boolean;
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function QuickAction({
  size = 'xs',
  icon,
  loading = false,
  children,
  className = '',
  disabled,
  onClick,
  ...rest
}: QuickActionProps) {
  const classes = ['fm-qa', `fm-qa--${size}`, loading ? 'fm-qa--loading' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      className={classes}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      onClick={loading ? undefined : onClick}
      {...rest}
    >
      <span className="fm-qa-icon" aria-hidden="true">
        {loading ? null : icon}
      </span>
      <span className="fm-qa-label">{loading ? null : children}</span>
    </button>
  );
}
