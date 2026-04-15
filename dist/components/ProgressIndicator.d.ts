type Size = 'sm' | 'md';
type Color = 'blue' | 'white' | 'black';
export type ProgressIndicatorProps = {
    size?: Size;
    color?: Color;
    className?: string;
};
export declare function ProgressIndicator({ size, color, className, }: ProgressIndicatorProps): import("react/jsx-runtime").JSX.Element;
export {};
