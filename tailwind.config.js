/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'button-primary-background-default': 'var(--button-primary-background-default)',
        'button-primary-background-hover': 'var(--button-primary-background-hover)',
        'button-primary-background-pressed': 'var(--button-primary-background-pressed)',
        'button-primary-background-active': 'var(--button-primary-background-active)',
        'button-primary-background-disabled': 'var(--button-primary-background-disabled)',
        'button-primary-content-default': 'var(--button-primary-content-default)',
        'button-primary-content-hover': 'var(--button-primary-content-hover)',
        'button-primary-content-disabled': 'var(--button-primary-content-disabled)',

        'button-secondary-background-default': 'var(--button-secondary-background-default)',
        'button-secondary-background-hover': 'var(--button-secondary-background-hover)',
        'button-secondary-background-pressed': 'var(--button-secondary-background-pressed)',
        'button-secondary-background-disabled': 'var(--button-secondary-background-disabled)',
        'button-secondary-content-default': 'var(--button-secondary-content-default)',
        'button-secondary-content-hover': 'var(--button-secondary-content-hover)',
        'button-secondary-content-disabled': 'var(--button-secondary-content-disabled)',
        'button-secondary-border-default': 'var(--button-secondary-border-default)',
        'button-secondary-border-hover': 'var(--button-secondary-border-hover)',
        'button-secondary-border-pressed': 'var(--button-secondary-border-pressed)',
        'button-secondary-border-disabled': 'var(--button-secondary-border-disabled)',

        'button-tertiary-background-hover': 'var(--button-tertiary-background-hover)',
        'button-tertiary-background-pressed': 'var(--button-tertiary-background-pressed)',
        'button-tertiary-content-default': 'var(--button-tertiary-content-default)',
        'button-tertiary-content-hover': 'var(--button-tertiary-content-hover)',
        'button-tertiary-content-disabled': 'var(--button-tertiary-content-disabled)',

        'effect-focus-color': 'var(--effect-focus-color)',
        'effect-focus-contrast': 'var(--effect-focus-contrast)',

        'action-content-default': 'var(--action-content-default)',
        'action-content-hover': 'var(--action-content-hover)',
        'action-content-selected': 'var(--action-content-selected)',
        'action-background-selected': 'var(--action-background-selected)',
        'action-background-disabled': 'var(--action-background-disabled)',

        'link-1': 'var(--link-1)',

        'basic-content-default': 'var(--basic-content-default)',
        'basic-content-soft': 'var(--basic-content-soft)',
        'basic-content-disabled': 'var(--basic-content-disabled)',
        'basic-content-brand-primary': 'var(--basic-content-brand-primary)',
        'basic-content-inverse': 'var(--basic-content-inverse)',
        'basic-background-default': 'var(--basic-background-default)',
        'basic-background-hover': 'var(--basic-background-hover)',
        'basic-background-disabled': 'var(--basic-background-disabled)',
        'basic-background-soft-2': 'var(--basic-background-soft-2)',
        'basic-border-default': 'var(--basic-border-default)',
        'basic-border-hover': 'var(--basic-border-hover)',
        'basic-border-disabled': 'var(--basic-border-disabled)',
      },
      spacing: {
        'Component-text-to-element-gap-lg': 'var(--Component-text-to-element-gap-lg)',
        'Component-text-to-element-gap-md': 'var(--Component-text-to-element-gap-md)',
        'Component-text-to-element-gap-xs': 'var(--Component-text-to-element-gap-xs)',
        'Component-horizontal-padding-xl': 'var(--Component-horizontal-padding-xl)',
        'Component-horizontal-padding-lg': 'var(--Component-horizontal-padding-lg)',
        'Component-horizontal-padding-md': 'var(--Component-horizontal-padding-md)',
        'Component-horizontal-padding-xs': 'var(--Component-horizontal-padding-xs)',
        'Component-vertical-padding-lg': 'var(--Component-vertical-padding-lg)',
        'Component-vertical-padding-md': 'var(--Component-vertical-padding-md)',
        'Component-vertical-padding-xs': 'var(--Component-vertical-padding-xs)',
      },
      borderRadius: {
        'Button-border-radius': 'var(--Button-border-radius)',
        'Component-border-radius': 'var(--Component-border-radius)',
      },
      borderWidth: {
        'Button-border-width': 'var(--Button-border-width)',
        'Component-border-width': 'var(--Component-border-width)',
      },
      boxShadow: {
        'focus-outset': '0 0 0 2px var(--effect-focus-contrast), 0 0 0 6px var(--effect-focus-color)',
        'elevation-raised': '0 2px 6px -0.5px var(--effect-shadow-high), 0 2px 10px -1px var(--effect-shadow-high)',
      },
      fontFamily: {
        'label-md-default': 'var(--label-md-default-family)',
        'label-lg-default': 'var(--label-lg-default-family)',
        'label-sm-default': 'var(--label-sm-default-family)',
        'text-sm-default': 'var(--text-sm-default-family)',
      },
      fontSize: {
        'label-md-default': [
          'var(--label-md-default-size)',
          {
            lineHeight: 'var(--Label-MD-Default-line-height)',
            fontWeight: 'var(--text-md-default-weight)',
          },
        ],
        'label-lg-default': [
          'var(--label-lg-default-size)',
          {
            lineHeight: 'var(--Label-LG-Default-line-height)',
            fontWeight: 'var(--text-lg-default-weight)',
          },
        ],
        'label-sm-default': [
          'var(--label-sm-default-size)',
          {
            lineHeight: 'var(--Label-SM-Default-line-height)',
            fontWeight: 'var(--text-sm-default-weight)',
          },
        ],
        'text-sm-default': [
          'var(--text-sm-default-size)',
          {
            lineHeight: 'var(--text-sm-default-line-height)',
            fontWeight: 'var(--text-sm-default-weight)',
          },
        ],
      },
    },
  },
  plugins: [],
}
