import { Button } from '../components/Button';
import { ButtonSet } from '../components/ButtonSet';
import { Drawer } from '../components/Drawer';
import { Dropdown } from '../components/Dropdown';
import { InfoBox } from '../components/InfoBox';
import { DropdownItem } from '../components/DropdownItem';
import { PlaceholderIcon } from '../components/icons/PlaceholderIcon';
import { LoginScreen } from './LoginScreen';
import { Input } from '../components/Input';
import { Link } from '../components/Link';
import { ProgressIndicator } from '../components/ProgressIndicator';
import { QuickAction } from '../components/QuickAction';
import { Tag } from '../components/Tag';
import { AlertIcon } from '../components/icons/AlertIcon';
import { CheckCircleIcon } from '../components/icons/CheckCircleIcon';
import { ErrorIcon } from '../components/icons/ErrorIcon';
import { useEffect, useState } from 'react';
import { IconsPage } from './IconsPage';
import './App.css';

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="showcase-row">
      <div className="showcase-row-label">{label}</div>
      <div className="showcase-row-items">{children}</div>
    </div>
  );
}

function IconWithBg() {
  return (
    <div
      style={{
        width: 64,
        height: 64,
        borderRadius: '50%',
        background: 'var(--basic-background-soft-1)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <PlaceholderIcon size="md" />
    </div>
  );
}

function App() {
  const getView = () => (window.location.hash === '#/icons' ? 'icons' : 'showcase');
  const [view, setView] = useState<'showcase' | 'icons'>(getView);
  useEffect(() => {
    const onHash = () => setView(getView());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  const goTo = (target: 'showcase' | 'icons') => {
    window.location.hash = target === 'icons' ? '#/icons' : '';
  };

  if (view === 'icons') return <IconsPage onBack={() => goTo('showcase')} />;
  return <Showcase onShowAllIcons={() => goTo('icons')} />;
}

function Showcase({ onShowAllIcons }: { onShowAllIcons: () => void }) {
  const [toggled, setToggled] = useState(false);
  const [single, setSingle] = useState('');
  const [email, setEmail] = useState('user@example.com');
  const [pwd, setPwd] = useState('sup3rsecret');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [bio, setBio] = useState('');
  const [country, setCountry] = useState<string | null>(null);
  const [drawerBottom, setDrawerBottom] = useState(false);
  const [drawerRight, setDrawerRight] = useState(false);
  const [drawerCenter, setDrawerCenter] = useState(false);
  const countries = [
    { value: 'es', label: 'Spain' },
    { value: 'fr', label: 'France' },
    { value: 'pt', label: 'Portugal' },
    { value: 'it', label: 'Italy' },
    { value: 'de', label: 'Germany' },
  ];
  const selectedCountry = countries.find((c) => c.value === country)?.label ?? null;

  return (
    <div className="showcase">
      <h1>Login screen (sample)</h1>
      <LoginScreen />

      <h1>Button · Figma Make Kit</h1>

      <h2>Primary</h2>
      <Row label="MD"><Button>Lorem</Button><Button disabled>Lorem</Button><Button loading>Lorem</Button></Row>
      <Row label="SM"><Button size="sm">Lorem</Button><Button size="sm" disabled>Lorem</Button><Button size="sm" loading>Lorem</Button></Row>

      <h2>Secondary</h2>
      <Row label="MD"><Button category="secondary">Lorem</Button><Button category="secondary" disabled>Lorem</Button><Button category="secondary" loading>Lorem</Button></Row>
      <Row label="SM"><Button category="secondary" size="sm">Lorem</Button><Button category="secondary" size="sm" disabled>Lorem</Button></Row>

      <h2>Tertiary</h2>
      <Row label="MD"><Button category="tertiary">Lorem</Button><Button category="tertiary" disabled>Lorem</Button><Button category="tertiary" loading>Lorem</Button></Row>
      <Row label="SM"><Button category="tertiary" size="sm">Lorem</Button><Button category="tertiary" size="sm" disabled>Lorem</Button></Row>

      <h2>Icon (icon-only)</h2>
      <Row label="MD"><Button category="icon" icon={<PlaceholderIcon />} aria-label="Add" /><Button category="icon" icon={<PlaceholderIcon />} disabled aria-label="Add" /></Row>
      <Row label="SM"><Button category="icon" size="sm" icon={<PlaceholderIcon />} aria-label="Add" /><Button category="icon" size="sm" icon={<PlaceholderIcon />} disabled aria-label="Add" /></Row>

      <h2>Floating (elevation)</h2>
      <Row label="MD"><Button category="floating" icon={<PlaceholderIcon />} aria-label="Add" /></Row>
      <Row label="SM"><Button category="floating" size="sm" icon={<PlaceholderIcon />} aria-label="Add" /></Row>

      <h2>Toggle (pressed prop)</h2>
      <Row label="MD">
        <Button category="toggle" pressed={toggled} onClick={() => setToggled((p) => !p)}>
          {toggled ? 'Pressed' : 'Unpressed'}
        </Button>
        <Button category="toggle" pressed>Pressed</Button>
        <Button category="toggle">Unpressed</Button>
      </Row>

      <h1>Progress Indicator</h1>
      <Row label="MD">
        <ProgressIndicator size="md" color="blue" />
        <div className="showcase-dark-swatch"><ProgressIndicator size="md" color="white" /></div>
        <ProgressIndicator size="md" color="black" />
      </Row>
      <Row label="SM">
        <ProgressIndicator size="sm" color="blue" />
        <div className="showcase-dark-swatch"><ProgressIndicator size="sm" color="white" /></div>
        <ProgressIndicator size="sm" color="black" />
      </Row>

<h2>With icons (text buttons)</h2>
      <Row label="MD"><Button iconLeft={<PlaceholderIcon />}>Lorem</Button><Button category="secondary" iconRight={<PlaceholderIcon />}>Lorem</Button></Row>

      <h1>Dropdown</h1>
      <Row label="Default">
        <Dropdown label="Country" value={selectedCountry} helperText="Helper example">
          {countries.map((c) => (
            <DropdownItem
              key={c.value}
              selected={country === c.value}
              onClick={() => setCountry(c.value)}
            >
              {c.label}
            </DropdownItem>
          ))}
        </Dropdown>
      </Row>
      <Row label="Error">
        <Dropdown label="Country" value={selectedCountry} errorMessage="Required field.">
          {countries.map((c) => (
            <DropdownItem
              key={c.value}
              selected={country === c.value}
              onClick={() => setCountry(c.value)}
            >
              {c.label}
            </DropdownItem>
          ))}
        </Dropdown>
      </Row>
      <Row label="Disabled">
        <Dropdown label="Country" disabled helperText="Helper example" />
      </Row>
      <Row label="Disabled selected">
        <Dropdown label="Country" value="Spain" disabled helperText="Helper example" />
      </Row>

      <h1>Dropdown Item</h1>
      <Row label="List">
        <ul role="listbox" style={{ width: 320, margin: 0, padding: 0, listStyle: 'none' }}>
          <DropdownItem onClick={() => {}}>Dropdown option</DropdownItem>
          <DropdownItem selected onClick={() => {}}>Selected option</DropdownItem>
          <DropdownItem onClick={() => {}}>Another option that is way too long to fit on one line and will be truncated</DropdownItem>
          <DropdownItem multiline onClick={() => {}}>Another option that is way too long to fit on one line, with multiline enabled so it wraps</DropdownItem>
          <DropdownItem variant="no-results">No results</DropdownItem>
        </ul>
      </Row>

      <h1>Icons</h1>
      <Row label="Sizes">
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 16 }}>
          <PlaceholderIcon size="xs" />
          <PlaceholderIcon size="sm" />
          <PlaceholderIcon size="md" />
          <PlaceholderIcon size="lg" />
        </span>
      </Row>
      <Row label="Color via parent">
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 16 }}>
          <span style={{ color: 'var(--basic-content-default)' }}><PlaceholderIcon size="md" /></span>
          <span style={{ color: 'var(--action-content-default)' }}><PlaceholderIcon size="md" /></span>
          <span style={{ color: 'var(--basic-content-soft)' }}><PlaceholderIcon size="md" /></span>
          <span style={{ color: 'var(--feedback-content-error)' }}><PlaceholderIcon size="md" /></span>
        </span>
      </Row>
      <Row label="">
        <Button category="secondary" onClick={onShowAllIcons}>Ver todos los iconos</Button>
      </Row>

      <h1>Quick Action</h1>
      <h2>XS</h2>
      <Row label="Default"><QuickAction size="xs" icon={<PlaceholderIcon />}>Lorem</QuickAction></Row>
      <Row label="Disabled"><QuickAction size="xs" icon={<PlaceholderIcon />} disabled>Lorem</QuickAction></Row>
      <Row label="Skeleton"><QuickAction size="xs" loading>Lorem</QuickAction></Row>

      <h2>XL</h2>
      <Row label="Default"><QuickAction size="xl" icon={<PlaceholderIcon />}>Lorem</QuickAction></Row>
      <Row label="Disabled"><QuickAction size="xl" icon={<PlaceholderIcon />} disabled>Lorem</QuickAction></Row>
      <Row label="Skeleton"><QuickAction size="xl" loading>Lorem</QuickAction></Row>

      <h1>Input</h1>
      <h2>Single</h2>
      <Row label="Default">
        <Input
          label="Label"
          value={single}
          onChange={(e) => setSingle(e.target.value)}
          onClear={() => setSingle('')}
          message="Helper example"
        />
      </Row>
      <Row label="Filled">
        <Input
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onClear={() => setEmail('')}
        />
      </Row>
      <Row label="Error">
        <Input label="Label" defaultValue="Wrong value" state="error" message="This field is invalid." />
      </Row>
      <Row label="Success">
        <Input label="Label" defaultValue="Valid value" state="success" message="Looks good." />
      </Row>
      <Row label="Alert">
        <Input label="Label" defaultValue="Check this" state="alert" message="Double-check this value." />
      </Row>
      <Row label="Read only">
        <Input label="Label" defaultValue="Read-only content" readOnly message="Helper example" />
      </Row>
      <Row label="Disabled">
        <Input label="Label" disabled message="Helper example" />
      </Row>

      <h2>Number</h2>
      <Row label="Default">
        <Input type="number" label="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </Row>

      <h2>Date</h2>
      <Row label="Default">
        <Input type="date" label="Date" value={date} onChange={(e) => setDate(e.target.value)} />
      </Row>

      <h2>Password</h2>
      <Row label="Default">
        <Input
          type="password"
          label="Password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          message="Use 8+ characters."
        />
      </Row>

      <h2>Text area</h2>
      <Row label="Default">
        <Input type="textarea" label="Bio" value={bio} onChange={(e) => setBio(e.target.value)} rows={4} />
      </Row>

      <h2>Doble (compose two inputs)</h2>
      <Row label="MD">
        <div style={{ display: 'flex', gap: 'var(--Component-horizontal-padding-xl)', width: '100%' }}>
          <Input label="From" />
          <Input label="To" />
        </div>
      </Row>

      <h1>Tag</h1>
      <h2>Filled · no icon</h2>
      <Row label="States">
        <Tag state="default">Label state indicator</Tag>
        <Tag state="informative">Label state indicator</Tag>
        <Tag state="success">Label state indicator</Tag>
        <Tag state="alert">Label state indicator</Tag>
        <Tag state="error">Label state indicator</Tag>
        <Tag state="booster">Label state indicator</Tag>
      </Row>

      <h2>Outline · no icon</h2>
      <Row label="States">
        <Tag state="default" variant="outline">Label state indicator</Tag>
        <Tag state="informative" variant="outline">Label state indicator</Tag>
        <Tag state="success" variant="outline">Label state indicator</Tag>
        <Tag state="alert" variant="outline">Label state indicator</Tag>
        <Tag state="error" variant="outline">Label state indicator</Tag>
        <Tag state="booster" variant="outline">Label state indicator</Tag>
      </Row>

      <h2>Filled · with icon</h2>
      <Row label="States">
        <Tag state="default" icon={<PlaceholderIcon size="sm" />}>Label state indicator</Tag>
        <Tag state="informative" icon={<PlaceholderIcon size="sm" />}>Label state indicator</Tag>
        <Tag state="success" icon={<CheckCircleIcon size="sm" />}>Label state indicator</Tag>
        <Tag state="alert" icon={<AlertIcon size="sm" />}>Label state indicator</Tag>
        <Tag state="error" icon={<ErrorIcon size="sm" tone="inverse" />}>Label state indicator</Tag>
        <Tag state="booster" icon={<PlaceholderIcon size="sm" />}>Label state indicator</Tag>
      </Row>

      <h2>Outline · with icon</h2>
      <Row label="States">
        <Tag state="default" variant="outline" icon={<PlaceholderIcon size="sm" />}>Label state indicator</Tag>
        <Tag state="informative" variant="outline" icon={<PlaceholderIcon size="sm" />}>Label state indicator</Tag>
        <Tag state="success" variant="outline" icon={<CheckCircleIcon size="sm" />}>Label state indicator</Tag>
        <Tag state="alert" variant="outline" icon={<AlertIcon size="sm" />}>Label state indicator</Tag>
        <Tag state="error" variant="outline" icon={<ErrorIcon size="sm" />}>Label state indicator</Tag>
        <Tag state="booster" variant="outline" icon={<PlaceholderIcon size="sm" />}>Label state indicator</Tag>
      </Row>

      <h1>Info Box</h1>
      <h2>Extended (with title)</h2>
      <Row label="MD · Left">
        <div style={{ width: 320 }}>
          <InfoBox media={<IconWithBg />} title="Title" size="md" align="left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta nunc ipsum, sed tincidunt dolor scelerisque at.
          </InfoBox>
        </div>
      </Row>
      <Row label="SM · Left">
        <div style={{ width: 320 }}>
          <InfoBox media={<IconWithBg />} title="Title" size="sm" align="left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta nunc ipsum, sed tincidunt dolor scelerisque at.
          </InfoBox>
        </div>
      </Row>
      <Row label="SM · Center">
        <div style={{ width: 320 }}>
          <InfoBox media={<IconWithBg />} title="Title" size="sm" align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </InfoBox>
        </div>
      </Row>

      <h2>Compact (no title)</h2>
      <Row label="SM · Center">
        <div style={{ width: 118 }}>
          <InfoBox media={<PlaceholderIcon size="md" />} size="sm" align="center">
            Text
          </InfoBox>
        </div>
      </Row>

      <h2>With background (card)</h2>
      <Row label="MD · Left">
        <div style={{ width: 320 }}>
          <InfoBox media={<IconWithBg />} title="Title" size="md" align="left" background>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta nunc ipsum, sed tincidunt dolor scelerisque at.
          </InfoBox>
        </div>
      </Row>
      <Row label="SM · Center">
        <div style={{ width: 320 }}>
          <InfoBox media={<IconWithBg />} title="Title" size="sm" align="center" background>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </InfoBox>
        </div>
      </Row>

      <h1>Button Set</h1>
      <Row label="Inline">
        <ButtonSet style="inline">
          <Button>Lorem</Button>
          <Button category="secondary">Lorem</Button>
        </ButtonSet>
      </Row>
      <Row label="Stack">
        <div style={{ width: 320 }}>
          <ButtonSet style="stack">
            <Button>Lorem</Button>
            <Button category="secondary">Lorem</Button>
            <Button category="tertiary">Lorem</Button>
          </ButtonSet>
        </div>
      </Row>

      <h1>Drawer</h1>
      <Row label="Bottom">
        <Button category="secondary" onClick={() => setDrawerBottom(true)}>Open bottom</Button>
      </Row>
      <Row label="Right">
        <Button category="secondary" onClick={() => setDrawerRight(true)}>Open right</Button>
      </Row>
      <Row label="Center">
        <Button category="secondary" onClick={() => setDrawerCenter(true)}>Open center</Button>
      </Row>

      <Drawer
        open={drawerBottom}
        onOpenChange={setDrawerBottom}
        position="bottom"
        icon={<PlaceholderIcon size="lg" />}
        title="Content title"
        description="Replace this descrtext with your content."
        footer={
          <ButtonSet style="stack">
            <Button onClick={() => setDrawerBottom(false)}>Lorem</Button>
            <Button category="secondary" onClick={() => setDrawerBottom(false)}>Lorem</Button>
            <Button category="tertiary" onClick={() => setDrawerBottom(false)}>Lorem</Button>
          </ButtonSet>
        }
      >
        <p className="fm-font-label-md" style={{ margin: 0 }}>
          Body content goes here. Use this drawer to confirm an action, surface a form,
          or present focused information.
        </p>
      </Drawer>

      <Drawer
        open={drawerRight}
        onOpenChange={setDrawerRight}
        position="right"
        title="Content title"
        description="Replace this descrtext with your content."
        footer={
          <ButtonSet style="inline">
            <Button onClick={() => setDrawerRight(false)}>Lorem</Button>
            <Button category="secondary" onClick={() => setDrawerRight(false)}>Lorem</Button>
          </ButtonSet>
        }
      >
        <p className="fm-font-label-md" style={{ margin: 0 }}>
          Side panel content. Best for detail views and forms on widescreen.
        </p>
      </Drawer>

      <Drawer
        open={drawerCenter}
        onOpenChange={setDrawerCenter}
        position="center"
        title="Content title"
        description="Replace this descrtext with your content."
        footer={
          <ButtonSet style="inline">
            <Button onClick={() => setDrawerCenter(false)}>Lorem</Button>
            <Button category="secondary" onClick={() => setDrawerCenter(false)}>Lorem</Button>
          </ButtonSet>
        }
      >
        <p className="fm-font-label-md" style={{ margin: 0 }}>
          Centered modal content. Use for focused confirmations on widescreen.
        </p>
      </Drawer>

      <h1>Link</h1>
      <Row label="LG"><Link href="#" size="lg">Link</Link><Link href="#" size="lg" iconLeft={<PlaceholderIcon />}>Link</Link><Link href="#" size="lg" iconRight={<PlaceholderIcon />}>Link</Link><Link href="#" size="lg" iconTop={<PlaceholderIcon />}>Link</Link></Row>
      <Row label="MD"><Link href="#" size="md">Link</Link><Link href="#" size="md" iconLeft={<PlaceholderIcon />}>Link</Link><Link href="#" size="md" iconRight={<PlaceholderIcon />}>Link</Link><Link href="#" size="md" iconTop={<PlaceholderIcon />}>Link</Link></Row>
      <Row label="SM"><Link href="#" size="sm">Link</Link><Link href="#" size="sm" iconLeft={<PlaceholderIcon />}>Link</Link><Link href="#" size="sm" iconRight={<PlaceholderIcon />}>Link</Link><Link href="#" size="sm" iconTop={<PlaceholderIcon />}>Link</Link></Row>
    </div>
  );
}

export default App;
