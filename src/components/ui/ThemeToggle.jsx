/**
 * ThemeToggle
 *
 * Round icon button that switches light/dark. Where the View Transitions API
 * is available, the new theme spreads from the click point as a circle.
 */

import { flushSync } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import useTheme from '../../hooks/useTheme';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const isDark = theme === 'dark';

  const handleClick = (event) => {
    if (!document.startViewTransition || prefersReducedMotion) {
      toggleTheme();
      return;
    }

    const { clientX: x, clientY: y } = event;
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
    const transition = document.startViewTransition(() => {
      flushSync(toggleTheme);
    });

    transition.ready
      .then(() => {
        document.documentElement.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
          {
            duration: 750,
            easing: 'cubic-bezier(0.76, 0, 0.24, 1)',
            pseudoElement: '::view-transition-new(root)',
          }
        );
      })
      .catch(() => {
        // Transition skipped (e.g. tab hidden): the theme has still switched
      });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-current/20 transition-colors hover:border-accent hover:text-accent ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: 18, rotate: -90, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          exit={{ y: -18, rotate: 90, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
