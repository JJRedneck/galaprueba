import type { ReactNode, SVGProps } from 'react';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg';

const OUTER_PX: Record<IconSize, number> = {
  xs: 16,
  sm: 24,
  md: 32,
  lg: 40,
};

export type IconProps = {
  size?: IconSize;
  viewBox?: string;
  children: ReactNode;
  'aria-label'?: string;
} & Omit<SVGProps<SVGSVGElement>, 'children' | 'width' | 'height' | 'viewBox'>;

export function Icon({
  size = 'sm',
  viewBox = '0 0 24 24',
  children,
  'aria-label': ariaLabel,
  ...rest
}: IconProps) {
  const px = OUTER_PX[size];
  const decorative = !ariaLabel;
  return (
    <svg
      width={px}
      height={px}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={decorative || undefined}
      role={decorative ? undefined : 'img'}
      aria-label={ariaLabel}
      style={{ display: 'block', flexShrink: 0, ...(rest.style ?? {}) }}
      {...rest}
    >
      {children}
    </svg>
  );
}
