import { type CSSProperties, type ReactNode } from 'react';
export type DropdownProps = {
    label: string;
    value?: string | null;
    helperText?: string;
    errorMessage?: string;
    disabled?: boolean;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    children?: ReactNode;
    id?: string;
    className?: string;
    style?: CSSProperties;
};
export declare function Dropdown({ label, value, helperText, errorMessage, disabled, open: openProp, defaultOpen, onOpenChange, children, id, className, style, }: DropdownProps): import("react/jsx-runtime").JSX.Element;
