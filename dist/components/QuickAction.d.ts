import type { ButtonHTMLAttributes, ReactNode } from 'react';
type Size = 'xs' | 'xl';
export type QuickActionProps = {
    size?: Size;
    icon?: ReactNode;
    loading?: boolean;
    children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;
export declare function QuickAction({ size, icon, loading, children, className, disabled, onClick, ...rest }: QuickActionProps): import("react/jsx-runtime").JSX.Element;
export {};
