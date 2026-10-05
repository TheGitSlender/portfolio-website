/**
 * RotatingWords
 *
 * Cycles through phrases with a vertical mask slide. The container reserves
 * the height of one line; phrases enter from below and exit upward.
 */

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ease, tf } from '../../config/animations';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const RotatingWords = ({ words, interval = 2600, play = true, className = '' }) => {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!play || prefersReducedMotion) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [play, prefersReducedMotion, interval, words.length]);

  return (
    <span className={`relative inline-grid overflow-hidden pb-[0.12em] align-bottom ${className}`}>
      <span className="sr-only">{words.join(', ')}</span>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={words[index]}
          aria-hidden="true"
          className="col-start-1 row-start-1 whitespace-nowrap"
          initial={{ transform: tf('translateY(110%)') }}
          animate={{ transform: tf('translateY(0%)') }}
          exit={{ transform: tf('translateY(-110%)') }}
          transition={{ duration: 0.8, ease: ease.expo }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default RotatingWords;
