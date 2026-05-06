import { useId, useState } from 'react';
import type {
  ChangeEvent,
  CSSProperties,
  FocusEvent,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from 'react';
import { AlertIcon } from './icons/AlertIcon';
import { CalendarIcon } from './icons/CalendarIcon';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import { CloseIcon } from './icons/CloseIcon';
import { EyeIcon } from './icons/EyeIcon';
import { EyeOffIcon } from './icons/EyeOffIcon';

type InputType = 'text' | 'number' | 'date' | 'password' | 'textarea';
type InputState = 'default' | 'success' | 'error' | 'alert';

type NativeInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'size' | 'onChange' | 'value' | 'defaultValue'
>;
type NativeTextareaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'onChange' | 'value' | 'defaultValue'
>;

export type InputProps = {
  type?: InputType;
  label?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  state?: InputState;
  message?: ReactNode;
  iconLeft?: ReactNode;
  readOnly?: boolean;
  disabled?: boolean;
  rows?: number;
  onClear?: () => void;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  className?: string;
  style?: CSSProperties;
  id?: string;
  name?: string;
} & Omit<NativeInputProps, 'className' | 'style' | 'id' | 'name' | 'placeholder' | 'readOnly' | 'disabled'> &
  Omit<NativeTextareaProps, 'className' | 'style' | 'id' | 'name' | 'placeholder' | 'readOnly' | 'disabled' | 'rows'>;

function ErrorIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="7" fill="var(--feedback-content-error)" />
      <path d="M4.5 4.5l5 5M9.5 4.5l-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function messageIcon(state: InputState) {
  if (state === 'error') return <ErrorIcon />;
  if (state === 'success') return <CheckCircleIcon size="xs" />;
  if (state === 'alert') return <AlertIcon size="xs" />;
  return null;
}

export function Input({
  type = 'text',
  label,
  value: controlledValue,
  defaultValue,
  placeholder,
  state = 'default',
  message,
  iconLeft,
  readOnly = false,
  disabled = false,
  rows = 3,
  onClear,
  onChange,
  onFocus,
  onBlur,
  className = '',
  style,
  id,
  name,
  ...rest
}: InputProps) {
  const autoId = useId();
  const inputId = id ?? autoId;

  const isControlled = controlledValue !== undefined;
  const [uncontrolled, setUncontrolled] = useState<string>(defaultValue ?? '');
  const value = isControlled ? (controlledValue as string) : uncontrolled;

  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const hasValue = value != null && value !== '';
  // Date always shows browser UI, and textarea should always show the field.
  const floating = focused || hasValue || type === 'date' || type === 'textarea';

  const boxClasses = [
    'fm-input-box',
    floating ? 'fm-input-box--floating' : '',
    focused ? 'fm-input-box--focus' : '',
    disabled ? 'fm-input-box--disabled' : '',
    readOnly ? 'fm-input-box--readonly' : '',
    state === 'error' ? 'fm-input-box--error' : '',
    state === 'success' ? 'fm-input-box--success' : '',
    state === 'alert' ? 'fm-input-box--alert' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (!isControlled) setUncontrolled(event.target.value);
    onChange?.(event);
  };

  const handleFocus = <T extends HTMLElement>(event: FocusEvent<T>) => {
    setFocused(true);
    (onFocus as ((e: FocusEvent<T>) => void) | undefined)?.(event);
  };

  const handleBlur = <T extends HTMLElement>(event: FocusEvent<T>) => {
    setFocused(false);
    (onBlur as ((e: FocusEvent<T>) => void) | undefined)?.(event);
  };

  const nativeType = type === 'password' && showPassword ? 'text' : type;
  const showClearButton =
    !!onClear && hasValue && !disabled && !readOnly && type !== 'textarea' && type !== 'password';

  const leading = iconLeft ?? (type === 'date' ? <CalendarIcon size="sm" /> : null);

  const renderField = () => {
    if (type === 'textarea') {
      return (
        <textarea
          id={inputId}
          name={name}
          className="fm-input-native fm-input-native--textarea"
          value={value}
          placeholder={floating ? placeholder : undefined}
          readOnly={readOnly}
          disabled={disabled}
          rows={rows}
          aria-invalid={state === 'error' || undefined}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...(rest as NativeTextareaProps)}
        />
      );
    }
    return (
      <input
        id={inputId}
        name={name}
        type={nativeType}
        className="fm-input-native"
        value={value}
        placeholder={floating ? placeholder : undefined}
        readOnly={readOnly}
        disabled={disabled}
        aria-invalid={state === 'error' || undefined}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...(rest as NativeInputProps)}
      />
    );
  };

  const msgColor =
    disabled || readOnly ? 'var(--basic-content-disabled)' : 'var(--basic-content-soft)';

  return (
    <div className={`fm-input ${className}`} style={style}>
      <label htmlFor={inputId} className={boxClasses}>
        {leading && (
          <span className="fm-input-icon fm-input-icon--leading" aria-hidden="true">
            {leading}
          </span>
        )}
        <span className="fm-input-text">
          {label && (
            <span
              className={floating ? 'fm-input-label fm-input-label--floating' : 'fm-input-label'}
            >
              {label}
            </span>
          )}
          {renderField()}
        </span>

        {type === 'password' && !disabled && (
          <button
            type="button"
            className="fm-input-icon-btn"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            aria-pressed={showPassword}
            onClick={() => setShowPassword((p) => !p)}
            tabIndex={-1}
          >
            {showPassword ? <EyeOffIcon size="sm" /> : <EyeIcon size="sm" />}
          </button>
        )}

        {showClearButton && (
          <button
            type="button"
            className="fm-input-icon-btn"
            aria-label="Clear"
            onClick={(e) => {
              e.preventDefault();
              if (!isControlled) setUncontrolled('');
              onClear?.();
            }}
            tabIndex={-1}
          >
            <CloseIcon size="xs" />
          </button>
        )}
      </label>

      {message != null && (
        <div className="fm-input-message" style={{ color: msgColor }}>
          {messageIcon(state)}
          <span className="fm-font-label-sm">{message}</span>
        </div>
      )}
    </div>
  );
}
