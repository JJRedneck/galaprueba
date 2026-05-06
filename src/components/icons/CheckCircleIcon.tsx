import { Icon, type IconProps } from '../Icon';

export function CheckCircleIcon({
  size = 'xs',
  ...rest
}: Omit<IconProps, 'children' | 'viewBox'>) {
  return (
    <Icon size={size} viewBox="0 0 16 16" {...rest}>
      <path
        d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
        fill="var(--feedback-content-success)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3536 5.85355L7 11.2071L3.64645 7.85355L4.35355 7.14645L7 9.79289L11.6464 5.14645L12.3536 5.85355Z"
        fill="var(--feedback-background-default)"
      />
    </Icon>
  );
}
