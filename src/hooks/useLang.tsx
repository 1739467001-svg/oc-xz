import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { Lang } from '@/types';
import { t as translate } from '@/lib/i18n';

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextValue>({
  lang: 'en',
  setLang: () => {},
  t: (key: string) => key,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('zealwish.lang');
    return saved === 'zh' ? 'zh' : 'en';
  });

  const setLang = useCallback((v: Lang) => {
    setLangState(v);
    localStorage.setItem('zealwish.lang', v);
  }, []);

  const t = useCallback((key: string) => translate(key, lang), [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
