/**
 * SmoothScroll
 *
 * Root Lenis instance for inertia scrolling. Lenis drives the native scroll
 * position, so Framer Motion's useScroll and CSS sticky keep working.
 * Skipped entirely for users who prefer reduced motion.
 */

import { ReactLenis } from 'lenis/react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const LENIS_OPTIONS = {
  lerp: 0.1,
  smoothWheel: true,
  wheelMultiplier: 1,
};

const SmoothScroll = ({ children }) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return children;

  return (
    <ReactLenis root options={LENIS_OPTIONS}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
