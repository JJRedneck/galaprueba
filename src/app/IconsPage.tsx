import type { ComponentType } from 'react';
import { Button } from '../components/Button';
import type { IconSize } from '../components/Icon';
import { AlertIcon } from '../components/icons/AlertIcon';
import { ArrowDownIcon } from '../components/icons/ArrowDownIcon';
import { CalendarIcon } from '../components/icons/CalendarIcon';
import { CheckCircleIcon } from '../components/icons/CheckCircleIcon';
import { CloseIcon } from '../components/icons/CloseIcon';
import { DoneIcon } from '../components/icons/DoneIcon';
import { ErrorIcon } from '../components/icons/ErrorIcon';
import { EyeIcon } from '../components/icons/EyeIcon';
import { EyeOffIcon } from '../components/icons/EyeOffIcon';
import { PlaceholderIcon } from '../components/icons/PlaceholderIcon';

const icons: Array<{
  name: string;
  Component: ComponentType<{ size?: IconSize }>;
}> = [
  { name: 'AlertIcon', Component: AlertIcon },
  { name: 'ArrowDownIcon', Component: ArrowDownIcon },
  { name: 'CalendarIcon', Component: CalendarIcon },
  { name: 'CheckCircleIcon', Component: CheckCircleIcon },
  { name: 'CloseIcon', Component: CloseIcon },
  { name: 'DoneIcon', Component: DoneIcon },
  { name: 'ErrorIcon', Component: ErrorIcon },
  { name: 'EyeIcon', Component: EyeIcon },
  { name: 'EyeOffIcon', Component: EyeOffIcon },
  { name: 'PlaceholderIcon', Component: PlaceholderIcon },
];

const sizes: Array<{ key: IconSize; outer: number }> = [
  { key: 'xs', outer: 16 },
  { key: 'sm', outer: 24 },
  { key: 'md', outer: 32 },
  { key: 'lg', outer: 40 },
];

export function IconsPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="showcase">
      <div style={{ marginBottom: 24 }}>
        <Button category="tertiary" onClick={onBack}>← Volver al showcase</Button>
      </div>

      <h1>Iconos</h1>
      <p style={{ color: 'var(--basic-content-soft)', marginTop: 0 }} className="fm-font-text-sm">
        {icons.length} icono(s) — cada componente expone los tamaños xs / sm / md / lg.
        Heredan el color del padre vía <code>currentColor</code>.
      </p>

      <table
        style={{
          borderCollapse: 'collapse',
          marginTop: 16,
          width: '100%',
          maxWidth: 720,
        }}
      >
        <thead>
          <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--basic-border-soft)' }}>
            <th
              className="fm-font-label-sm"
              style={{ padding: '8px 12px', color: 'var(--basic-content-soft)' }}
            >
              Componente
            </th>
            {sizes.map(({ key, outer }) => (
              <th
                key={key}
                className="fm-font-label-sm"
                style={{ padding: '8px 12px', color: 'var(--basic-content-soft)' }}
              >
                {key} ({outer}px)
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {icons.map(({ name, Component }) => (
            <tr
              key={name}
              style={{ borderBottom: '1px solid var(--basic-border-soft)' }}
            >
              <td
                className="fm-font-label-md"
                style={{ padding: '12px', color: 'var(--basic-content-default)' }}
              >
                {name}
              </td>
              {sizes.map(({ key }) => (
                <td key={key} style={{ padding: '12px' }}>
                  <Component size={key} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
