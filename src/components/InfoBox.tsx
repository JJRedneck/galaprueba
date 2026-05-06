import type { HTMLAttributes, ReactNode } from 'react';

export type InfoBoxAlign = 'left' | 'center';
export type InfoBoxSize = 'sm' | 'md';

export type InfoBoxProps = {
  media?: ReactNode;
  title?: string;
  children?: ReactNode;
  align?: InfoBoxAlign;
  size?: InfoBoxSize;
  background?: boolean;
  className?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'children' | 'className'>;

export function InfoBox({
  media,
  title,
  children,
  align = 'left',
  size = 'md',
  background = false,
  className = '',
  ...rest
}: InfoBoxProps) {
  const titleClass = size === 'md' ? 'fm-font-title-md-strong' : 'fm-font-title-sm-strong';
  const compact = !title;

  const cls = [
    'fm-info-box',
    `fm-info-box--${align}`,
    `fm-info-box--${size}`,
    compact ? 'fm-info-box--compact' : '',
    background ? 'fm-info-box--bg' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={cls} {...rest}>
      {media && <div className="fm-info-box-media">{media}</div>}
      {title || children ? (
        <div className="fm-info-box-texts">
          {title && <h3 className={`fm-info-box-title ${titleClass}`}>{title}</h3>}
          {children && <div className="fm-info-box-body fm-font-label-md">{children}</div>}
        </div>
      ) : null}
    </div>
  );
}
