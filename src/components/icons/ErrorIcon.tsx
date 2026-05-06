import { Icon, type IconProps } from '../Icon';

export type ErrorIconTone = 'default' | 'inverse';

export type ErrorIconProps = Omit<IconProps, 'children' | 'viewBox'> & {
  /**
   * Visual tone.
   * - `default`: red circle + white marks. Use over light backgrounds (Tag Error Outline).
   * - `inverse`: white circle + black marks. Use over dark/red backgrounds (Tag Error Filled).
   */
  tone?: ErrorIconTone;
};

export function ErrorIcon({ size = 'xs', tone = 'default', ...rest }: ErrorIconProps) {
  const circle = tone === 'inverse' ? 'var(--basic-content-inverse)' : 'var(--feedback-content-error)';
  const mark = tone === 'inverse' ? 'var(--basic-content-default)' : 'var(--basic-content-inverse)';

  return (
    <Icon size={size} viewBox="0 0 24 24" {...rest}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill={circle}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5056 16.6371L7.36275 8.49429L8.49412 7.36292L16.637 15.5058L15.5056 16.6371Z"
        fill={mark}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.36274 15.5058L15.5054 7.36293L16.6368 8.49429L8.49412 16.6371L7.36274 15.5058Z"
        fill={mark}
      />
      <path d="M12 10.87L13.1314 12.0014L12 13.1327L10.8686 12.0014L12 10.87Z" fill={mark} />
    </Icon>
  );
}
