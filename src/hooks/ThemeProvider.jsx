/**
 * ThemeProvider
 *
 * Manages light/dark theme state with localStorage persistence.
 * Applies the "dark" class to <html> for CSS variable overrides.
 *
 * @param {ReactNode} children - Child components
 */

import { useCallback, useLayoutEffect, useMemo, useState } from 'react';
import ThemeContext from './ThemeContext';

const readStoredTheme = () => {
  try {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') return stored;
  } catch {
    // Storage blocked (private mode, sandboxed iframe): fall back to default
  }
  return 'light';
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(readStoredTheme);

  // Layout effect so the class flips in the same commit as the state change;
  // the View Transitions theme switch snapshots the DOM right after it.
  useLayoutEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // Non-critical: theme just won't persist
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
