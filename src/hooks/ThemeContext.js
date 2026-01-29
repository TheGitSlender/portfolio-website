/**
 * ThemeContext
 *
 * Shared React context for theme state.
 */

import { createContext } from 'react';

const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} });

export default ThemeContext;
