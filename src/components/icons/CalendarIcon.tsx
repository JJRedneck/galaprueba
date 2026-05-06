import { Icon, type IconProps } from '../Icon';

const PATH_XS =
  'M10.3987 3.5V4.4H11.3987V3.5H13.9991V5.4H1.9991V3.5H4.6021V4.4H5.6021V3.5H10.3987ZM1.9991 6.4V14H13.9991V6.4H1.9991ZM1 2.5H4.6021V1H5.6021V2.5H10.3987V1H11.3987V2.5H15V15H1V2.5Z';

const PATH_SM =
  'M15.5385 5.6V7.8H17.1385V5.6H20.4V8.92726H3.6V5.6H7.15151V7.8H8.75151V5.6H15.5385ZM3.6 10.5273V20.4H20.4V10.5273H3.6ZM2 4H7.15151V2H8.75151V4H15.5385V2H17.1385V4H22V22H2V4Z';

export function CalendarIcon({
  size = 'sm',
  ...rest
}: Omit<IconProps, 'children' | 'viewBox'>) {
  if (size === 'xs') {
    return (
      <Icon size={size} viewBox="0 0 16 16" {...rest}>
        <path fillRule="evenodd" clipRule="evenodd" d={PATH_XS} fill="currentColor" />
      </Icon>
    );
  }
  return (
    <Icon size={size} viewBox="0 0 24 24" {...rest}>
      <path fillRule="evenodd" clipRule="evenodd" d={PATH_SM} fill="currentColor" />
    </Icon>
  );
}
