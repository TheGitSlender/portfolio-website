/**
 * Centralized Animation Configuration
 *
 * Shared easing curves, durations, springs, viewport settings and variants
 * so motion feels like one system across the site.
 *
 * Entrance variants animate `transform` / `opacity` as whole values (not the
 * x / y / scale shorthands) so Framer Motion runs them as hardware-accelerated
 * Web Animations — they stay smooth even while the main thread is busy
 * scrolling.
 */

// =============================================================================
// REDUCED MOTION
// =============================================================================

/**
 * Framer Motion's `reducedMotion="user"` only neutralises its x / y / scale
 * shorthands, not whole `transform` values. Entrance transforms therefore go
 * through `tf()`, which returns 'none' for visitors who prefer reduced
 * motion (so elements simply fade, or appear in place).
 */
const REDUCED_MOTION =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const tf = (value) => (REDUCED_MOTION ? 'none' : value);

// =============================================================================
// TIMING & EASING
// =============================================================================

/**
 * Easing curves.
 * - expo: long, soft landings for reveals (default for almost everything)
 * - quart: symmetric in-out for curtains and page transitions
 */
export const ease = {
  expo: [0.16, 1, 0.3, 1],
  quart: [0.76, 0, 0.24, 1],
  smooth: [0.4, 0, 0.2, 1],
};

export const durations = {
  fast: 0.35,
  base: 0.7,
  slow: 1,
  slower: 1.4,
};

// =============================================================================
// SPRINGS
// =============================================================================

export const springs = {
  cursor: { stiffness: 500, damping: 40, mass: 0.4 },
  cursorTrail: { stiffness: 180, damping: 22, mass: 0.6 },
  soft: { stiffness: 100, damping: 30, restDelta: 0.001 },
  snappy: { type: 'spring', stiffness: 400, damping: 32 },
};

// =============================================================================
// VIEWPORT
// =============================================================================

export const viewportOnce = {
  once: true,
  margin: '0px 0px -12% 0px',
};

// =============================================================================
// VARIANTS
// =============================================================================

export const fadeUp = {
  hidden: { opacity: 0, transform: tf('translateY(40px)') },
  visible: {
    opacity: 1,
    transform: tf('translateY(0px)'),
    transition: { duration: durations.slow, ease: ease.expo },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: durations.base, ease: ease.smooth },
  },
};

/** Text or blocks rising out of an overflow-hidden mask */
export const maskUp = {
  hidden: { transform: tf('translateY(110%)') },
  visible: {
    transform: tf('translateY(0%)'),
    transition: { duration: durations.slow, ease: ease.expo },
  },
};

/** Hairlines drawing in from the left */
export const lineDraw = {
  hidden: { transform: tf('scaleX(0)') },
  visible: {
    transform: tf('scaleX(1)'),
    transition: { duration: durations.slower, ease: ease.expo },
  },
};

/** Container that staggers its children */
export const stagger = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

/** Chips and small items popping in */
export const popIn = {
  hidden: { opacity: 0, transform: tf('translateY(14px) scale(0.92)') },
  visible: {
    opacity: 1,
    transform: tf('translateY(0px) scale(1)'),
    transition: { duration: durations.base, ease: ease.expo },
  },
};

// =============================================================================
// HELPERS
// =============================================================================

/** Wrap a value into the [min, max) range — used by infinite marquees */
export const wrap = (min, max, value) => {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
};
