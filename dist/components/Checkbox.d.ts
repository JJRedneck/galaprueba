import type { InputHTMLAttributes, ReactNode } from 'react';
export type CheckboxProps = {
    label?: ReactNode;
    indeterminate?: boolean;
    errorMessage?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'>;
export declare function Checkbox({ label, indeterminate, errorMessage, checked, disabled, id, className, ...rest }: CheckboxProps): import("react/jsx-runtime").JSX.Element;
