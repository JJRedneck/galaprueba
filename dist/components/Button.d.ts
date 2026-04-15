import type { ButtonHTMLAttributes, ReactNode } from 'react';
type Category = 'primary' | 'secondary' | 'tertiary' | 'icon' | 'floating' | 'toggle';
type Size = 'sm' | 'md';
export type ButtonProps = {
    category?: Category;
    size?: Size;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    icon?: ReactNode;
    pressed?: boolean;
    loading?: boolean;
    children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;
export declare function Button({ category, size, iconLeft, iconRight, icon, pressed, loading, children, className, disabled, onClick, ...rest }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
