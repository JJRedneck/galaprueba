import type { ReactNode } from 'react';

type Size = 'sm' | 'xs' | 'xxs';

export type InfoLabelProps = {
  size?: Size;
  head?: ReactNode;
  body?: ReactNode;
  className?: string;
};

const bodyTypographyBySize: Record<Size, string> = {
  sm: 'font-label-lg-default text-label-lg-default',
  xs: 'font-label-md-default text-label-md-default',
  xxs: 'font-label-sm-default text-label-sm-default',
};

export function InfoLabel({ size = 'sm', head, body, className = '' }: InfoLabelProps) {
  return (
    <div
      className={[
        'flex flex-col gap-Component-text-to-element-gap-xs py-Component-vertical-padding-xs',
        className,
      ].join(' ')}
    >
      <span className="font-text-sm-default text-text-sm-default text-basic-content-soft">
        {head}
      </span>
      <span className={`${bodyTypographyBySize[size]} text-basic-content-default`}>
        {body}
      </span>
    </div>
  );
}
