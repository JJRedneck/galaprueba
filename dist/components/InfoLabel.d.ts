import type { ReactNode } from 'react';
type Size = 'sm' | 'xs' | 'xxs';
export type InfoLabelProps = {
    size?: Size;
    head?: ReactNode;
    body?: ReactNode;
    className?: string;
};
export declare function InfoLabel({ size, head, body, className }: InfoLabelProps): import("react/jsx-runtime").JSX.Element;
export {};
