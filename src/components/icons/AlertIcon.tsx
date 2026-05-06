import { Icon, type IconProps } from '../Icon';

export function AlertIcon({
  size = 'xs',
  ...rest
}: Omit<IconProps, 'children' | 'viewBox'>) {
  return (
    <Icon size={size} viewBox="0 0 16 16" {...rest}>
      <path
        d="M7.99992 1C7.14707 1 6.66573 1.45541 6.3647 2.02375L1.19937 12.2671C0.916147 12.8048 0.935894 13.5504 1.25087 14.0689C1.56573 14.5872 2.12947 15.0026 2.73618 15L13.2635 15C13.8676 15.0038 14.4324 14.5889 14.7481 14.0704C15.0639 13.5516 15.084 12.8053 14.801 12.2681L9.63516 2.02379C9.33411 1.45541 8.85277 1 7.99992 1Z"
        fill="var(--feedback-content-warning)"
      />
      <path
        d="M7.5 5.25V9.75H8.5V5.25H7.5Z"
        fill="var(--basic-background-hover)"
      />
      <path
        d="M8 12.75C8.41421 12.75 8.75 12.4142 8.75 12C8.75 11.5858 8.41421 11.25 8 11.25C7.58579 11.25 7.25 11.5858 7.25 12C7.25 12.4142 7.58579 12.75 8 12.75Z"
        fill="var(--basic-background-hover)"
      />
    </Icon>
  );
}
