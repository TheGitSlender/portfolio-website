/**
 * PageTransition
 *
 * Wraps each routed page. On navigation, five ink columns sweep up from the
 * bottom to cover the outgoing page (exit), then continue up and off the top
 * to uncover the incoming one (enter), staggered left to right.
 *
 * App's <AnimatePresence mode="wait"> sequences exit → enter. The very first
 * page load skips the enter sweep (the preloader or nothing plays instead).
 *
 * The new page mounts while the screen is fully covered, which is when the
 * scroll position is reset (or moved to the requested #section by Home).
 */

import { useEffect, useLayoutEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useLenis } from 'lenis/react';
import { ease } from '../../config/animations';

const COLUMNS = 5;
const STAGGER = 0.045;

let hasMountedOnce = false;

const PageTransition = ({ children }) => {
  const [isFirstPage] = useState(() => !hasMountedOnce);
  const { hash } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    hasMountedOnce = true;
  }, []);

  useLayoutEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
    lenis?.scrollTo(0, { immediate: true, force: true });
    // Only on mount: later Lenis instance changes must not yank the page up
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[95] flex">
        {Array.from({ length: COLUMNS }, (_, i) => (
          <motion.div
            key={i}
            className="h-full flex-1 bg-ink"
            // overlap columns by 1px to avoid hairline gaps on fractional widths
            style={{ marginRight: i < COLUMNS - 1 ? -1 : 0 }}
            initial={{ y: isFirstPage ? '-100%' : '0%' }}
            animate={{
              y: '-100%',
              transition: { duration: 0.65, ease: ease.quart, delay: 0.1 + i * STAGGER },
            }}
            exit={{
              y: ['100%', '0%'],
              transition: { duration: 0.55, ease: ease.quart, delay: i * STAGGER },
            }}
          />
        ))}
      </div>
      {children}
    </>
  );
};

export default PageTransition;
