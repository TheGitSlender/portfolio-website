/**
 * Cursor
 *
 * Trailing cursor follower, rendered on top of the native pointer:
 * - a small dot that inverts what's beneath it (mix-blend difference)
 * - grows a little over links and buttons
 * - becomes an accent badge with a label over elements marked
 *   `data-cursor="View"` (project cards, achievement rows...); add
 *   `data-cursor-variant="ink"` where the hover state is itself accent
 *
 * Only mounts on hover-capable fine pointers.
 */

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { springs } from '../../config/animations';
import { useFinePointer } from '../../hooks/useMediaQuery';

const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label';

const SIZES = { idle: 12, hover: 40, label: 66 };

const Follower = () => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, springs.cursorTrail);
  const springY = useSpring(y, springs.cursorTrail);
  const [state, setState] = useState({ visible: false, hover: false, label: null, variant: null });

  useEffect(() => {
    const handleMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setState((prev) => (prev.visible ? prev : { ...prev, visible: true }));
    };

    const handleOver = (event) => {
      const target = event.target instanceof Element ? event.target : null;
      const labelled = target?.closest('[data-cursor]');
      const label = labelled?.getAttribute('data-cursor') ?? null;
      const variant = labelled?.getAttribute('data-cursor-variant') ?? null;
      const hover = Boolean(target?.closest(INTERACTIVE));
      setState((prev) =>
        prev.label === label && prev.hover === hover && prev.variant === variant
          ? prev
          : { ...prev, label, hover, variant }
      );
    };

    const hide = () => setState((prev) => ({ ...prev, visible: false }));
    const show = () => setState((prev) => ({ ...prev, visible: true }));

    window.addEventListener('pointermove', handleMove, { passive: true });
    document.addEventListener('pointerover', handleOver, { passive: true });
    document.documentElement.addEventListener('mouseleave', hide);
    document.documentElement.addEventListener('mouseenter', show);

    return () => {
      window.removeEventListener('pointermove', handleMove);
      document.removeEventListener('pointerover', handleOver);
      document.documentElement.removeEventListener('mouseleave', hide);
      document.documentElement.removeEventListener('mouseenter', show);
    };
  }, [x, y]);

  const mode = state.label ? 'label' : state.hover ? 'hover' : 'idle';
  const size = SIZES[mode];

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[200]"
      // Blend on this element: it is the stacking context, so a blend mode on
      // the inner dot would only mix with this transparent group, not the page.
      style={{ x: springX, y: springY, mixBlendMode: mode === 'label' ? 'normal' : 'difference' }}
    >
      {/* Fixed-size disc scaled with `transform` (compositor-friendly) rather than
          animating width/height on the main thread */}
      <motion.div
        className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
        style={{ width: SIZES.label, height: SIZES.label }}
        animate={{
          transform: `scale(${size / SIZES.label})`,
          opacity: state.visible ? 1 : 0,
          backgroundColor: mode !== 'label' ? '#ffffff' : state.variant === 'ink' ? '#0a0a0a' : '#ff3700',
        }}
        transition={{ type: 'spring', stiffness: 320, damping: 28, mass: 0.6 }}
      >
        <AnimatePresence>
          {state.label && (
            <motion.span
              key={state.label}
              className="eyebrow text-[10px] text-white"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.25 }}
            >
              {state.label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const Cursor = () => {
  const finePointer = useFinePointer();
  return finePointer ? <Follower /> : null;
};

export default Cursor;
