import type { LiHTMLAttributes, ReactNode } from 'react';
import { DoneIcon } from './icons/DoneIcon';

type Variant = 'option' | 'no-results';

export type DropdownItemProps = {
  variant?: Variant;
  selected?: boolean;
  multiline?: boolean;
  children?: ReactNode;
} & Omit<LiHTMLAttributes<HTMLLIElement>, 'role' | 'aria-selected'>;

export function DropdownItem({
  variant = 'option',
  selected = false,
  multiline = false,
  className = '',
  children,
  ...rest
}: DropdownItemProps) {
  const isOption = variant === 'option';
  const classes = [
    'fm-di',
    `fm-di--${variant}`,
    multiline ? 'fm-di--multiline' : '',
    selected ? 'fm-di--selected' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const isStrong = selected || variant === 'no-results';
  const labelClass = isStrong ? 'fm-font-label-md-strong' : 'fm-font-label-md';

  return (
    <li
      className={classes}
      role={isOption ? 'option' : 'status'}
      aria-selected={isOption ? selected : undefined}
      {...rest}
    >
      <span className={`fm-di-label ${labelClass}`}>{children}</span>
      {isOption && selected && (
        <span className="fm-di-check" aria-hidden="true">
          <DoneIcon size="xs" />
        </span>
      )}
    </li>
  );
}
