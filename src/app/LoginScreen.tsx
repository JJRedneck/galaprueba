import { useState } from 'react';
import { Button } from '../components/Button';
import { Dropdown } from '../components/Dropdown';
import { DropdownItem } from '../components/DropdownItem';
import { Input } from '../components/Input';
import { Link } from '../components/Link';
import { QuickAction } from '../components/QuickAction';

const profiles = [
  { value: 'particular', label: 'Particular' },
  { value: 'autonomo', label: 'Autónomo' },
  { value: 'empresa', label: 'Empresa' },
];

function LockIcon() {
  return (
    <svg width="11" height="14" viewBox="0 0 11 14" fill="none" aria-hidden="true">
      <rect x="1" y="6" width="9" height="7" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <path d="M3 6V4a2.5 2.5 0 0 1 5 0v2" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M10 18s6-5.5 6-10a6 6 0 1 0-12 0c0 4.5 6 10 6 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="8" r="2.25" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" aria-hidden="true">
      <circle cx="9" cy="5.5" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M2 19c0-3.5 3.1-6 7-6s7 2.5 7 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SosIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M3 4h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-7l-4 3v-3H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <text
        x="10"
        y="11.5"
        textAnchor="middle"
        fontSize="5"
        fontWeight="700"
        fill="currentColor"
        fontFamily="inherit"
      >
        SOS
      </text>
    </svg>
  );
}

function SabadellLogo() {
  return (
    <svg
      width="156"
      height="41"
      viewBox="0 0 156 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Sabadell"
    >
      <path
        d="M15.3803 24.7541C20.5587 24.7541 24.7541 20.5587 24.7541 15.3803C24.7541 10.1954 20.5523 6 15.3803 6C10.2018 6 6 10.1954 6 15.3803C6 20.5587 10.2018 24.7541 15.3803 24.7541Z"
        fill="#006DFF"
      />
      <path
        d="M13.8832 16.0677H15.4958C15.8492 16.0677 16.2861 16.0677 16.6009 16.2476C16.9157 16.4275 17.1341 16.7937 17.1341 17.1471C17.1341 17.5326 16.9543 17.9116 16.6394 18.1172C16.2989 18.3485 15.7914 18.3228 15.393 18.3228H13.8768V16.0677H13.8832ZM13.8832 12.3541H15.2067C15.5729 12.3541 16.1511 12.3156 16.466 12.4891C16.7679 12.6689 16.9286 12.9966 16.9286 13.3371C16.9286 13.6519 16.7936 13.9925 16.5302 14.1852C16.2025 14.4294 15.7528 14.4037 15.3673 14.4037H13.8768V12.3541H13.8832ZM11.6987 10.6837V20.0575H15.8942C16.6973 20.0575 17.616 20.0575 18.297 19.5499C18.9524 19.0745 19.4471 18.3485 19.4471 17.5261C19.4471 16.3118 18.6568 15.4188 17.4939 15.1875V15.1618C18.4769 14.9112 19.1901 14.2045 19.1901 13.138C19.1901 12.2513 18.7918 11.5639 18.04 11.0884C17.3976 10.6772 16.633 10.6772 15.8942 10.6772H11.6987V10.6837Z"
        fill="white"
      />
      <path
        d="M144.937 34.3208H150V10.6839H144.937V34.3208ZM137.356 34.3208H142.419V10.6839H137.356V34.3208ZM123.851 23.4307C124.024 21.4326 124.885 19.7814 127.121 19.7814C129.325 19.7814 129.948 21.5354 130.051 23.4307H123.851ZM135.12 26.4311C135.152 24.0539 134.773 21.574 133.328 19.5758C131.882 17.5777 129.363 16.4726 126.916 16.4726C121.474 16.4726 118.403 20.6424 118.403 25.8079C118.403 31.012 121.814 34.6614 127.05 34.6614C132.974 34.6614 135.011 29.4958 135.011 28.6284L130.327 28.2815C130.327 29.9006 128.779 31.0377 127.224 31.0377C125.02 31.0377 123.844 29.348 123.844 27.2792L123.877 26.4183H135.12V26.4311ZM111.445 27.0158C111.445 27.8767 111.412 28.8083 110.995 29.5986C110.584 30.3888 109.723 31.012 108.791 31.012C106.273 31.012 106.003 27.8061 106.003 25.9107C106.003 23.8098 106.105 20.0191 109.003 20.0191C111.31 20.0191 111.451 22.9103 111.451 24.6001V27.0158H111.445ZM116.514 34.3208V10.6839H111.451V18.6764C110.352 17.0573 109.042 16.4726 107.076 16.4726C101.974 16.4726 100.664 21.6061 100.664 25.7758C100.664 29.8427 102.045 34.6678 106.966 34.6678C109.209 34.6678 110.654 33.4599 111.618 31.6031H111.689V34.3273H116.514V34.3208ZM93.5963 26.6367C93.5963 27.8767 93.6284 28.9111 92.9089 30.0162C92.3242 30.9093 91.3926 31.4618 90.3582 31.4618C88.9447 31.4618 88.1159 30.5302 88.1159 29.1553C88.1159 26.6046 91.6624 26.1613 93.5963 25.9493V26.6367ZM99.1088 34.3208C98.8326 33.4599 98.7619 32.599 98.7619 31.6995V23.5335C98.7619 21.4326 98.9354 19.5052 97.1428 18.0531C95.7294 16.8774 93.3907 16.4662 91.5918 16.4662C87.9039 16.4662 83.7727 17.7062 83.2523 21.9466L88.0452 22.3963C88.0452 20.6745 89.4587 19.8457 91.0778 19.8457C91.8359 19.8457 92.6968 20.0834 93.1466 20.6745C93.6606 21.3298 93.5963 22.2229 93.5963 22.981V23.3922C91.4633 23.5978 88.6685 23.7391 86.6703 24.4908C84.3638 25.3518 82.7448 27.1122 82.7448 29.695C82.7448 33.0038 85.1541 34.6549 88.2573 34.6549C90.8786 34.6549 92.3949 33.6591 93.8405 31.5903C93.8083 32.4833 93.8726 33.4149 94.0846 34.3144H99.1088V34.3208ZM65.7253 34.3208H68.4816C68.79 33.3892 68.9956 32.3934 69.6188 31.6353C70.8909 33.7362 72.0988 34.6678 74.6173 34.6678C79.8857 34.6678 81.7168 30.1511 81.7168 25.5702C81.7168 21.4326 80.2005 16.4726 75.202 16.4726C73.236 16.4726 71.7904 17.3014 70.9295 19.0233H70.7946V10.6839H65.7318V34.3208H65.7253ZM70.8588 24.4651C70.8588 22.6019 71.2057 19.9549 73.6536 19.9549C76.442 19.9549 76.442 23.6042 76.442 25.5702C76.442 27.4655 76.442 31.1148 73.5829 31.1148C72.6513 31.1148 71.9253 30.6651 71.4435 29.907C70.8909 29.046 70.8588 27.941 70.8588 26.9773V24.4651ZM57.765 26.6367C57.765 27.8767 57.7971 28.9111 57.0775 30.0162C56.4929 30.9093 55.5612 31.4618 54.5268 31.4618C53.1134 31.4618 52.2846 30.5302 52.2846 29.1553C52.2846 26.6046 55.8375 26.1613 57.765 25.9493V26.6367ZM63.2775 34.3208C63.0012 33.4599 62.9305 32.599 62.9305 31.6995V23.5335C62.9305 21.4326 63.104 19.5052 61.3115 18.0531C59.898 16.8774 57.5594 16.4662 55.7604 16.4662C52.0726 16.4662 47.9414 17.7062 47.421 21.9466L52.2139 22.3963C52.2139 20.6745 53.6274 19.8457 55.2464 19.8457C56.0046 19.8457 56.8655 20.0834 57.3152 20.6745C57.8292 21.3298 57.765 22.2229 57.765 22.981V23.3922C55.6319 23.5978 52.8371 23.7391 50.839 24.4908C48.526 25.3518 46.907 27.1122 46.907 29.695C46.907 33.0038 49.3163 34.6549 52.4195 34.6549C55.0408 34.6549 56.5571 33.6591 58.0027 31.5903C57.9706 32.4833 58.0348 33.4149 58.2468 34.3144H63.2775V34.3208ZM45.0117 15.888C43.5661 11.7889 40.1866 10.3369 36.0554 10.3369C33.8838 10.3369 31.8536 10.8188 30.1317 12.2644C28.442 13.6778 27.5811 15.6053 27.5811 17.8154C27.5811 22.981 31.7187 24.221 35.9205 25.0819C37.3661 25.3903 40.0581 25.7694 40.0581 27.7354C40.0581 29.7014 37.9572 30.286 36.3702 30.286C33.9224 30.286 32.1298 29.4251 31.4424 26.9451L26.3411 28.1144C27.4076 32.7339 31.4424 34.6614 35.8884 34.6614C38.2656 34.6614 40.8484 34.2116 42.7437 32.7339C44.5683 31.3204 45.6734 29.1167 45.6734 26.8102C45.6734 24.4651 44.4977 22.5056 42.5702 21.227C40.919 20.1219 38.3298 19.6401 36.4024 19.2289C35.0596 18.9847 32.9908 18.5736 32.9908 16.8517C32.9908 15.027 34.7833 14.648 36.2674 14.648C38.3684 14.648 39.6469 15.4382 40.3344 17.4428L45.0117 15.888Z"
        fill="black"
      />
    </svg>
  );
}

export function LoginScreen() {
  const [profile, setProfile] = useState<string | null>('particular');
  const [doc, setDoc] = useState('');
  const [pwd, setPwd] = useState('');
  const selectedProfileLabel = profiles.find((p) => p.value === profile)?.label ?? null;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: 380,
        margin: '0 auto',
        padding: 'var(--Component-vertical-padding-xl) var(--Component-horizontal-padding-xl)',
        background: 'var(--basic-background-default)',
        boxSizing: 'border-box',
        gap: 'var(--Elements-extralarge)',
      }}
    >
      {/* Header */}
      <header
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--Component-vertical-padding-md)',
          width: '100%',
        }}
      >
        <SabadellLogo />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--Component-text-to-element-gap-md)',
            color: 'var(--basic-content-default)',
          }}
        >
          <LockIcon />
          <span className="fm-font-text-sm">
            Estás en un{' '}
            <Link href="#" size="sm">
              entorno seguro
            </Link>
          </span>
        </div>
      </header>

      {/* Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--Elements-extralarge)',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--Elements-base)' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--Component-text-to-element-gap-xl)',
            }}
          >
            <Dropdown label="Tu perfil de acceso" value={selectedProfileLabel}>
              {profiles.map((p) => (
                <DropdownItem
                  key={p.value}
                  selected={profile === p.value}
                  onClick={() => setProfile(p.value)}
                >
                  {p.label}
                </DropdownItem>
              ))}
            </Dropdown>
            <Input
              label="DNI / NIE / Pasaporte"
              value={doc}
              onChange={(e) => setDoc(e.target.value)}
            />
          </div>
          <Input
            type="password"
            label="Contraseña"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--Component-vertical-padding-xl)',
            width: '100%',
          }}
        >
          <Button type="submit" disabled={!doc || !pwd} style={{ width: '100%' }}>
            Entrar
          </Button>
          <Button category="tertiary" style={{ width: '100%' }}>
            ¿Necesitas ayuda para acceder?
          </Button>
        </div>
      </form>

      {/* Version */}
      <p
        className="fm-font-text-sm"
        style={{ color: 'var(--basic-content-soft)', textAlign: 'center', margin: 0 }}
      >
        Versión: 24.1.0-190338976
      </p>

      {/* Sticky panel: Quick Actions */}
      <div
        style={{
          display: 'flex',
          gap: 'var(--Component-horizontal-padding-md)',
          justifyContent: 'center',
          width: '100%',
          padding:
            'var(--Component-vertical-padding-lg) var(--Component-horizontal-padding-xl)',
        }}
      >
        <QuickAction
          icon={<PinIcon />}
          style={{ flex: '1 0 0', maxWidth: 120, minWidth: 76, width: 'auto' }}
        >
          Cajeros y oficinas
        </QuickAction>
        <QuickAction
          icon={<UserIcon />}
          style={{ flex: '1 0 0', maxWidth: 120, minWidth: 76, width: 'auto' }}
        >
          Hazte cliente
        </QuickAction>
        <QuickAction
          icon={<SosIcon />}
          style={{ flex: '1 0 0', maxWidth: 120, minWidth: 76, width: 'auto' }}
        >
          Emergencia
        </QuickAction>
      </div>
    </div>
  );
}
