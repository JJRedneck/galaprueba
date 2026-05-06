import { Icon, type IconProps } from '../Icon';

const PATH_XS = 'M14.2936 3L15 3.72049L5.90213 13L1 8L1.70639 7.27951L5.90213 11.5591L14.2936 3Z';

export function DoneIcon({
  size = 'xs',
  ...rest
}: Omit<IconProps, 'children' | 'viewBox'>) {
  return (
    <Icon size={size} viewBox="0 0 16 16" {...rest}>
      <path fillRule="evenodd" clipRule="evenodd" d={PATH_XS} fill="currentColor" />
    </Icon>
  );
}
