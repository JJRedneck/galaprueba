import { Icon, type IconProps } from '../Icon';

const PATH_XS =
  'M14.2929 5L15 5.73329L8 13L1 5.73329L1.70711 5L8 11.5335L14.2929 5Z';

export function ArrowDownIcon({
  size = 'xs',
  ...rest
}: Omit<IconProps, 'children' | 'viewBox'>) {
  return (
    <Icon size={size} viewBox="0 0 16 16" {...rest}>
      <path fillRule="evenodd" clipRule="evenodd" d={PATH_XS} fill="currentColor" />
    </Icon>
  );
}
