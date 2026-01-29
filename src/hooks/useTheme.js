/**
 * useTheme Hook
 *
 * Provides access to the current theme and toggle function.
 *
 * @returns {{ theme: 'light' | 'dark', toggleTheme: () => void }}
 */

import { useContext } from 'react';
import ThemeContext from './ThemeContext';

const useTheme = () => useContext(ThemeContext);

export default useTheme;
