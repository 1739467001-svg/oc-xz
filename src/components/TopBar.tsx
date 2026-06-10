import { useLang } from '@/hooks/useLang';
import { IconSun, IconMoon } from './Icons';

interface TopBarProps {
  theme: string;
  setTheme: (t: string) => void;
}

export default function TopBar({ theme, setTheme }: TopBarProps) {
  const { lang, setLang, t } = useLang();
  const nextLang = lang === 'en' ? 'zh' : 'en';

  return (
    <div style={{
      position: 'fixed',
      top: 14, right: 18,
      zIndex: 90,
      display: 'flex', gap: 8,
      animation: 'fade-in .5s .8s ease-out both',
    }}>
      <button
        onClick={() => setLang(nextLang)}
        className="glass-strong mono"
        style={{
          height: 32,
          minWidth: 58,
          border: '1px solid var(--glass-border)',
          borderRadius: 999,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
          cursor: 'pointer',
          padding: '0 10px',
          color: 'var(--ink-on-glass)',
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: 0,
          transition: 'all .25s',
        }}
        title={t('topbar.lang.toggle')}
        aria-label={t('topbar.lang.toggle')}
      >
        {lang === 'en' ? 'EN' : '中'}
        <span style={{ color: 'var(--accent)', letterSpacing: 0 }}>→</span>
        {nextLang === 'en' ? 'EN' : '中'}
      </button>

      {/* theme toggle */}
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="glass-strong"
        style={{
          height: 32, width: 32,
          border: '1px solid var(--glass-border)',
          borderRadius: 999,
          display: 'grid', placeItems: 'center',
          cursor: 'pointer',
          transition: 'all .25s',
          padding: 0,
        }}
        title={theme === 'dark' ? t('topbar.theme.light') : t('topbar.theme.dark')}
        aria-label="theme"
      >
        {theme === 'dark' ? <IconSun size={14} color="var(--ink-on-glass)" /> : <IconMoon size={14} color="var(--ink-on-glass)" />}
      </button>
    </div>
  );
}
