import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Theme = 'light' | 'dark' | 'system';

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggle: () => void;
}

/**
 * Persisted under `taskflow-theme` — the same key is read by the inline
 * script in index.html to prevent a flash of the wrong theme before hydration.
 */
export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'system',
      setTheme: (theme) => set({ theme }),
      toggle: () => {
        const resolved = resolveTheme(get().theme);
        set({ theme: resolved === 'dark' ? 'light' : 'dark' });
      },
    }),
    { name: 'taskflow-theme' },
  ),
);

export function resolveTheme(theme: Theme): 'light' | 'dark' {
  if (theme === 'system') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }
  return theme;
}
