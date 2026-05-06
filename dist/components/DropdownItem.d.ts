import type { LiHTMLAttributes, ReactNode } from 'react';
type Variant = 'option' | 'no-results';
export type DropdownItemProps = {
    variant?: Variant;
    selected?: boolean;
    multiline?: boolean;
    children?: ReactNode;
} & Omit<LiHTMLAttributes<HTMLLIElement>, 'role' | 'aria-selected'>;
export declare function DropdownItem({ variant, selected, multiline, className, children, ...rest }: DropdownItemProps): import("react/jsx-runtime").JSX.Element;
export {};
