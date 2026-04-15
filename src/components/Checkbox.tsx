import { useEffect, useId, useRef, useState } from 'react';
import type { CSSProperties, InputHTMLAttributes, ReactNode } from 'react';

export type CheckboxProps = {
  label?: ReactNode;
  indeterminate?: boolean;
  errorMessage?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'>;

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8.5l3.2 3.2L13 5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DashIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3.5 8h9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function ErrorIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="7" fill="#b3001b" />
      <path
        d="M4.5 4.5l5 5M9.5 4.5l-5 5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const boxBase: CSSProperties = {
  boxSizing: 'border-box',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: '32px',
  height: '32px',
  minWidth: '32px',
  minHeight: '32px',
  maxWidth: '32px',
  maxHeight: '32px',
  padding: 0,
  lineHeight: 0,
  borderRadius: 'var(--Component-border-radius)',
  borderStyle: 'solid',
  borderWidth: 'var(--Component-border-width)',
  transition: 'background-color 120ms, border-color 120ms',
};

function boxStyle(disabled: boolean, isChecked: boolean, hovered: boolean): CSSProperties {
  if (disabled && isChecked) {
    return {
      ...boxBase,
      background: 'var(--action-background-disabled)',
      borderColor: 'var(--action-background-disabled)',
      color: 'var(--action-content-selected)',
    };
  }
  if (disabled) {
    return {
      ...boxBase,
      background: 'var(--basic-background-disabled)',
      borderColor: 'var(--basic-border-disabled)',
      color: 'transparent',
    };
  }
  if (isChecked) {
    return {
      ...boxBase,
      background: 'var(--action-background-selected)',
      borderColor: 'var(--action-background-selected)',
      color: 'var(--action-content-selected)',
    };
  }
  return {
    ...boxBase,
    background: hovered ? 'var(--basic-background-hover)' : 'var(--basic-background-default)',
    borderColor: hovered ? 'var(--basic-border-hover)' : 'var(--basic-border-default)',
    color: 'transparent',
  };
}

export function Checkbox({
  label,
  indeterminate = false,
  errorMessage,
  checked,
  disabled = false,
  id,
  className = '',
  ...rest
}: CheckboxProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const autoId = useId();
  const inputId = id ?? autoId;
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (inputRef.current) inputRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  const isChecked = !!checked || indeterminate;

  const rowStyle: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--Component-text-to-element-gap-lg)',
    cursor: disabled ? 'not-allowed' : 'pointer',
  };

  const row = (
    <label
      htmlFor={inputId}
      className="fm-checkbox-row"
      style={rowStyle}
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        style={{
          position: 'relative',
          display: 'inline-block',
          width: '32px',
          height: '32px',
          flexShrink: 0,
          lineHeight: 0,
          verticalAlign: 'top',
        }}
      >
        <input
          ref={inputRef}
          id={inputId}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          aria-checked={indeterminate ? 'mixed' : undefined}
          aria-invalid={errorMessage ? true : undefined}
          className="peer"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            opacity: 0,
            margin: 0,
            padding: 0,
            border: 0,
            appearance: 'none',
            WebkitAppearance: 'none',
            cursor: 'inherit',
          }}
          {...rest}
        />
        <span
          className={`fm-checkbox-box peer-focus-visible:shadow-focus-outset ${
            !disabled && !isChecked ? 'fm-checkbox-unchecked' : ''
          }`}
          style={boxStyle(disabled, isChecked, hovered)}
        >
          {isChecked && (indeterminate ? <DashIcon /> : <CheckIcon />)}
        </span>
      </span>
      {label != null && (
        <span
          className="font-label-md-default text-label-md-default"
          style={{
            color: disabled ? 'var(--basic-content-disabled)' : 'var(--basic-content-default)',
          }}
        >
          {label}
        </span>
      )}
    </label>
  );

  if (errorMessage) {
    return (
      <div
        className={className}
        style={{
          display: 'inline-flex',
          flexDirection: 'column',
          gap: 'var(--Component-horizontal-padding-xs)',
        }}
      >
        {row}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--Component-text-to-element-gap-md)',
          }}
        >
          <ErrorIcon />
          <span
            className="font-text-sm-default text-text-sm-default"
            style={{ color: 'var(--basic-content-soft)' }}
          >
            {errorMessage}
          </span>
        </div>
      </div>
    );
  }

  return <div className={className}>{row}</div>;
}
