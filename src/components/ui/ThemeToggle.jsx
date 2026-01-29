/**
 * ThemeToggle
 *
 * A floating button fixed to the bottom-right corner for toggling
 * between light and dark modes. Stays visible while scrolling.
 */

import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import useTheme from '../../hooks/useTheme';
import { springs } from '../../config/animations';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] shadow-lg border border-[var(--color-border-subtle)] cursor-pointer hover:shadow-xl transition-shadow"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={springs.button}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
