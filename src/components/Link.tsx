import type { AnchorHTMLAttributes, CSSProperties, ReactNode } from 'react';

type Size = 'sm' | 'md' | 'lg';

export type LinkProps = {
  size?: Size;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  iconTop?: ReactNode;
  children?: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const textClass: Record<Size, string> = {
  lg: 'fm-font-label-lg',
  md: 'fm-font-label-md',
  sm: 'fm-font-label-sm',
};

const topGapVar: Record<Size, string> = {
  lg: 'var(--Component-text-to-element-gap-md)',
  md: 'var(--Component-text-to-element-gap-xs)',
  sm: 'var(--Component-text-to-element-gap-xs)',
};

const iconPx: Record<Size, number> = { lg: 20, md: 14, sm: 14 };

function iconBoxStyle(size: Size): CSSProperties {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: iconPx[size],
    height: iconPx[size],
    flexShrink: 0,
  };
}

export function Link({
  size = 'lg',
  iconLeft,
  iconRight,
  iconTop,
  children,
  className = '',
  ...rest
}: LinkProps) {
  const classes = ['fm-link', className].filter(Boolean).join(' ');

  const inline: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--Component-text-to-element-gap-md)',
  };

  const content = (
    <span style={inline}>
      {iconLeft && <span style={iconBoxStyle(size)}>{iconLeft}</span>}
      <span className={textClass[size]}>{children}</span>
      {iconRight && <span style={iconBoxStyle(size)}>{iconRight}</span>}
    </span>
  );

  if (iconTop) {
    return (
      <a
        className={classes}
        style={{
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: topGapVar[size],
        }}
        {...rest}
      >
        <span style={iconBoxStyle(size)}>{iconTop}</span>
        {content}
      </a>
    );
  }

  return (
    <a className={classes} style={inline} {...rest}>
      {content}
    </a>
  );
}
