import type { AnchorHTMLAttributes, ReactNode } from 'react';

type Size = 'sm' | 'md' | 'lg';

export type LinkProps = {
  size?: Size;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  iconTop?: ReactNode;
  children?: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const textClass: Record<Size, string> = {
  lg: 'font-label-lg-default text-label-lg-default',
  md: 'font-label-md-default text-label-md-default',
  sm: 'font-label-sm-default text-label-sm-default',
};

const topGap: Record<Size, string> = {
  lg: 'gap-Component-text-to-element-gap-md',
  md: 'gap-Component-text-to-element-gap-xs',
  sm: 'gap-Component-text-to-element-gap-xs',
};

const iconBoxClass: Record<Size, string> = {
  lg: 'inline-flex items-center justify-center w-5 h-5',
  md: 'inline-flex items-center justify-center w-3.5 h-3.5',
  sm: 'inline-flex items-center justify-center w-3.5 h-3.5',
};

export function Link({
  size = 'lg',
  iconLeft,
  iconRight,
  iconTop,
  children,
  className = '',
  ...rest
}: LinkProps) {
  const color = 'fm-link';
  const focus = 'outline-none focus-visible:shadow-focus-outset rounded-sm';

  const content = (
    <span className="inline-flex items-center gap-Component-text-to-element-gap-md">
      {iconLeft && <span className={iconBoxClass[size]}>{iconLeft}</span>}
      <span className={textClass[size]}>{children}</span>
      {iconRight && <span className={iconBoxClass[size]}>{iconRight}</span>}
    </span>
  );

  if (iconTop) {
    return (
      <a
        className={`inline-flex flex-col items-start ${topGap[size]} ${color} ${focus} ${className}`}
        {...rest}
      >
        <span className={iconBoxClass[size]}>{iconTop}</span>
        {content}
      </a>
    );
  }

  return (
    <a className={`inline-flex items-center ${color} ${focus} ${className}`} {...rest}>
      {content}
    </a>
  );
}
