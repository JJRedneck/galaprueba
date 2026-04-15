import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';
import { InfoLabel } from '../components/InfoLabel';
import { Link } from '../components/Link';
import { ProgressIndicator } from '../components/ProgressIndicator';
import { useState } from 'react';
import './App.css';

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 py-4 border-b border-gray-200">
      <div className="w-32 text-sm text-gray-500">{label}</div>
      <div className="flex items-center gap-3 flex-wrap">{children}</div>
    </div>
  );
}

function App() {
  const [toggled, setToggled] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-3xl font-semibold mb-8">Button · Figma Make Kit</h1>

      <h2 className="text-xl font-medium mt-8 mb-2">Primary</h2>
      <Row label="MD"><Button>Lorem</Button><Button disabled>Lorem</Button><Button loading>Lorem</Button></Row>
      <Row label="SM"><Button size="sm">Lorem</Button><Button size="sm" disabled>Lorem</Button><Button size="sm" loading>Lorem</Button></Row>

      <h2 className="text-xl font-medium mt-8 mb-2">Secondary</h2>
      <Row label="MD"><Button category="secondary">Lorem</Button><Button category="secondary" disabled>Lorem</Button><Button category="secondary" loading>Lorem</Button></Row>
      <Row label="SM"><Button category="secondary" size="sm">Lorem</Button><Button category="secondary" size="sm" disabled>Lorem</Button></Row>

      <h2 className="text-xl font-medium mt-8 mb-2">Tertiary</h2>
      <Row label="MD"><Button category="tertiary">Lorem</Button><Button category="tertiary" disabled>Lorem</Button><Button category="tertiary" loading>Lorem</Button></Row>
      <Row label="SM"><Button category="tertiary" size="sm">Lorem</Button><Button category="tertiary" size="sm" disabled>Lorem</Button></Row>

      <h2 className="text-xl font-medium mt-8 mb-2">Icon (icon-only)</h2>
      <Row label="MD"><Button category="icon" icon={<PlusIcon />} aria-label="Add" /><Button category="icon" icon={<PlusIcon />} disabled aria-label="Add" /></Row>
      <Row label="SM"><Button category="icon" size="sm" icon={<PlusIcon />} aria-label="Add" /><Button category="icon" size="sm" icon={<PlusIcon />} disabled aria-label="Add" /></Row>

      <h2 className="text-xl font-medium mt-8 mb-2">Floating (elevation)</h2>
      <Row label="MD"><Button category="floating" icon={<PlusIcon />} aria-label="Add" /></Row>
      <Row label="SM"><Button category="floating" size="sm" icon={<PlusIcon />} aria-label="Add" /></Row>

      <h2 className="text-xl font-medium mt-8 mb-2">Toggle (pressed prop)</h2>
      <Row label="MD">
        <Button category="toggle" pressed={toggled} onClick={() => setToggled((p) => !p)}>
          {toggled ? 'Pressed' : 'Unpressed'}
        </Button>
        <Button category="toggle" pressed>Pressed</Button>
        <Button category="toggle">Unpressed</Button>
      </Row>

      <h1 className="text-3xl font-semibold mt-16 mb-8">Progress Indicator</h1>
      <Row label="MD">
        <ProgressIndicator size="md" color="blue" />
        <div className="bg-basic-content-default p-2 rounded"><ProgressIndicator size="md" color="white" /></div>
        <ProgressIndicator size="md" color="black" />
      </Row>
      <Row label="SM">
        <ProgressIndicator size="sm" color="blue" />
        <div className="bg-basic-content-default p-2 rounded"><ProgressIndicator size="sm" color="white" /></div>
        <ProgressIndicator size="sm" color="black" />
      </Row>

      <h1 className="text-3xl font-semibold mt-16 mb-8">Info label</h1>
      <Row label="SM"><InfoLabel size="sm" head="Head text" body="Body text" /></Row>
      <Row label="XS"><InfoLabel size="xs" head="Head text" body="Body text" /></Row>
      <Row label="XXS"><InfoLabel size="xxs" head="Head text" body="Body text" /></Row>

      <h2 className="text-xl font-medium mt-8 mb-2">With icons (text buttons)</h2>
      <Row label="MD"><Button iconLeft={<PlusIcon />}>Lorem</Button><Button category="secondary" iconRight={<PlusIcon />}>Lorem</Button></Row>

      <h1 className="text-3xl font-semibold mt-16 mb-8">Checkbox</h1>
      <Row label="Default"><Checkbox label="Text" checked={checked} onChange={(e) => setChecked(e.target.checked)} /></Row>
      <Row label="Selected"><Checkbox label="Text" checked readOnly /></Row>
      <Row label="Indeterminate"><Checkbox label="Text" indeterminate readOnly /></Row>
      <Row label="Disabled off"><Checkbox label="Text" disabled /></Row>
      <Row label="Disabled on"><Checkbox label="Text" disabled checked readOnly /></Row>
      <Row label="Required"><Checkbox label="Text" errorMessage="Required." /></Row>

      <h1 className="text-3xl font-semibold mt-16 mb-8">Link</h1>
      <Row label="LG"><Link href="#" size="lg">Link</Link><Link href="#" size="lg" iconLeft={<PlusIcon />}>Link</Link><Link href="#" size="lg" iconRight={<PlusIcon />}>Link</Link><Link href="#" size="lg" iconTop={<PlusIcon />}>Link</Link></Row>
      <Row label="MD"><Link href="#" size="md">Link</Link><Link href="#" size="md" iconLeft={<PlusIcon />}>Link</Link><Link href="#" size="md" iconRight={<PlusIcon />}>Link</Link><Link href="#" size="md" iconTop={<PlusIcon />}>Link</Link></Row>
      <Row label="SM"><Link href="#" size="sm">Link</Link><Link href="#" size="sm" iconLeft={<PlusIcon />}>Link</Link><Link href="#" size="sm" iconRight={<PlusIcon />}>Link</Link><Link href="#" size="sm" iconTop={<PlusIcon />}>Link</Link></Row>
    </div>
  );
}

export default App;
