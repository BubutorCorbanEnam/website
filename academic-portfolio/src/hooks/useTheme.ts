import { useEffect, useState } from 'react';
import type { ThemePreference } from '../types';

const storageKey = 'academic-portfolio-theme';

export function useTheme() {
  const [theme, setTheme] = useState<ThemePreference>(() => {
    return (localStorage.getItem(storageKey) as ThemePreference | null) ?? 'system';
  });

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const apply = () => {
      const shouldUseDark = theme === 'dark' || (theme === 'system' && media.matches);
      document.documentElement.classList.toggle('dark', shouldUseDark);
      document.documentElement.style.colorScheme = shouldUseDark ? 'dark' : 'light';
    };

    apply();
    media.addEventListener('change', apply);
    localStorage.setItem(storageKey, theme);
    return () => media.removeEventListener('change', apply);
  }, [theme]);

  return { theme, setTheme };
}
