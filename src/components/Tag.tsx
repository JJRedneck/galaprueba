import type { HTMLAttributes, ReactNode } from 'react';

export type TagState = 'default' | 'informative' | 'success' | 'alert' | 'error' | 'booster';
export type TagVariant = 'filled' | 'outline';

export type TagProps = {
  state?: TagState;
  variant?: TagVariant;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
} & Omit<HTMLAttributes<HTMLSpanElement>, 'children' | 'className'>;

export function Tag({
  state = 'default',
  variant = 'filled',
  icon,
  children,
  className = '',
  ...rest
}: TagProps) {
  const cls = [
    'fm-tag',
    `fm-tag--${state}`,
    `fm-tag--${variant}`,
    icon ? 'fm-tag--with-icon' : '',
    'fm-font-text-sm',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={cls} {...rest}>
      {icon && <span className="fm-tag-icon">{icon}</span>}
      <span className="fm-tag-label">{children}</span>
    </span>
  );
}
