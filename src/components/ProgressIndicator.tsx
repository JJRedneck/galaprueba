type Size = 'sm' | 'md';
type Color = 'blue' | 'white' | 'black';

export type ProgressIndicatorProps = {
  size?: Size;
  color?: Color;
  className?: string;
};

const sizePx: Record<Size, number> = { sm: 24, md: 48 };
const strokeWidthPx: Record<Size, number> = { sm: 2, md: 2 };

const strokeVar: Record<Color, string> = {
  blue: 'var(--basic-content-brand-primary)',
  white: 'var(--basic-content-inverse)',
  black: 'var(--basic-content-default)',
};

export function ProgressIndicator({
  size = 'md',
  color = 'blue',
  className = '',
}: ProgressIndicatorProps) {
  const px = sizePx[size];
  const sw = strokeWidthPx[size];
  const r = (px - sw) / 2;
  const c = px / 2;

  const startAngle = -80;
  const endAngle = 190;
  const toXY = (angle: number) => {
    const rad = (angle * Math.PI) / 180;
    return { x: c + r * Math.cos(rad), y: c + r * Math.sin(rad) };
  };
  const start = toXY(startAngle);
  const end = toXY(endAngle);
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;

  return (
    <svg
      className={`animate-spin ${className}`}
      width={px}
      height={px}
      viewBox={`0 0 ${px} ${px}`}
      fill="none"
      role="status"
      aria-label="Loading"
    >
      <path
        d={`M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y}`}
        stroke={strokeVar[color]}
        strokeWidth={sw}
        strokeLinecap="round"
      />
    </svg>
  );
}
