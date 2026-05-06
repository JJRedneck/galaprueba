import type { HTMLAttributes, ReactNode } from 'react';

export type ButtonSetStyle = 'inline' | 'stack';

export type ButtonSetProps = {
  style?: ButtonSetStyle;
  children?: ReactNode;
  className?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'children' | 'className'>;

export function ButtonSet({
  style = 'inline',
  children,
  className = '',
  ...rest
}: ButtonSetProps) {
  const cls = ['fm-button-set', `fm-button-set--${style}`, className]
    .filter(Boolean)
    .join(' ');
  return (
    <div className={cls} {...rest}>
      {children}
    </div>
  );
}
