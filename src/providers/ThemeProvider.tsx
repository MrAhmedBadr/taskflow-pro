import { useEffect } from 'react';
import { resolveTheme, useThemeStore } from '@/store/theme.store';

/**
 * Applies the resolved theme to <html> and keeps it in sync with the
 * OS preference when the user selects "system".
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useThemeStore((s) => s.theme);

  useEffect(() => {
    const root = document.documentElement;
    const apply = () => root.classList.toggle('dark', resolveTheme(theme) === 'dark');
    apply();

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    if (theme === 'system') {
      media.addEventListener('change', apply);
      return () => media.removeEventListener('change', apply);
    }
  }, [theme]);

  return <>{children}</>;
}
