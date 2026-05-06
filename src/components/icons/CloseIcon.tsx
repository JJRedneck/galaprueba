import { Icon, type IconProps } from '../Icon';

const PATH_XS =
  'M14.2933 1L15 1.70675L8.70664 8L15 14.2933L14.2933 15L8 8.70664L1.70675 15L1 14.2933L7.29336 8L1 1.70675L1.70675 1L8 7.29336L14.2933 1Z';

export function CloseIcon({
  size = 'xs',
  ...rest
}: Omit<IconProps, 'children' | 'viewBox'>) {
  return (
    <Icon size={size} viewBox="0 0 16 16" {...rest}>
      <path fillRule="evenodd" clipRule="evenodd" d={PATH_XS} fill="currentColor" />
    </Icon>
  );
}
