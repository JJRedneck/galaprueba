import type { AnchorHTMLAttributes, ReactNode } from 'react';
type Size = 'sm' | 'md' | 'lg';
export type LinkProps = {
    size?: Size;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    iconTop?: ReactNode;
    children?: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;
export declare function Link({ size, iconLeft, iconRight, iconTop, children, className, ...rest }: LinkProps): import("react/jsx-runtime").JSX.Element;
export {};
