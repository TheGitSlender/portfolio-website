/**
 * HeroOptionPicker — TEMPORARY
 *
 * Floating switcher used to compare hero options on the live site
 * (`/?hero=<id>`). Remove it, and the options that aren't chosen, once a
 * hero has been picked.
 */

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';
import { ease, springs } from '../../../config/animations';

const HeroOptionPicker = ({ options, activeId, onSelect }) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  useMotionValueEvent(scrollY, 'change', (latest) => setVisible(latest < window.innerHeight * 0.6));

  return (
    <motion.div
      role="radiogroup"
      aria-label="Preview hero option"
      className="fixed bottom-5 left-1/2 z-[70] flex max-w-[calc(100vw-2rem)] -translate-x-1/2 items-center gap-1 overflow-x-auto rounded-full border border-white/10 bg-ink p-1.5 text-paper shadow-lift no-scrollbar"
      initial={{ y: 120, opacity: 0 }}
      animate={visible ? { y: 0, opacity: 1 } : { y: 120, opacity: 0 }}
      transition={{ duration: 0.6, ease: ease.expo, delay: visible ? 0.2 : 0 }}
    >
      <span className="eyebrow shrink-0 px-3 text-paper/50">Hero option</span>
      {options.map((option) => {
        const active = option.id === activeId;
        return (
          <button
            key={option.id}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onSelect(option.id)}
            className="relative shrink-0 rounded-full px-4 py-2 text-sm font-medium"
          >
            {active && (
              <motion.span
                layoutId="hero-option-pill"
                className="absolute inset-0 rounded-full bg-accent"
                transition={springs.snappy}
              />
            )}
            <span className={`relative ${active ? 'text-white' : 'text-paper/70 hover:text-paper'}`}>
              {option.label}
            </span>
          </button>
        );
      })}
    </motion.div>
  );
};

export default HeroOptionPicker;
