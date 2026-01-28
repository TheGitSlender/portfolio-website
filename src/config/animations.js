/**
 * Centralized Animation Configuration
 *
 * Standardized animation variants, transitions, springs, and viewport settings
 * for consistent motion design across the portfolio.
 */

// =============================================================================
// TIMING & EASING
// =============================================================================

/**
 * Standard durations for animations
 */
export const durations = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  verySlow: 1.2,
};

/**
 * Easing curves for different animation types
 */
export const easings = {
  default: [0.25, 0.1, 0.25, 1],
  textReveal: [0.33, 1, 0.68, 1],
  smooth: [0.4, 0, 0.2, 1],
  bounce: [0.68, -0.55, 0.265, 1.55],
  accordion: [0.04, 0.62, 0.23, 0.98],
};

// =============================================================================
// SPRING CONFIGURATIONS
// =============================================================================

/**
 * Spring presets for physics-based animations
 */
export const springs = {
  button: { type: 'spring', stiffness: 150, damping: 15, mass: 0.1 },
  card: { type: 'spring', stiffness: 200, damping: 20 },
  accordion: { type: 'spring', stiffness: 300, damping: 30 },
  gentle: { type: 'spring', stiffness: 100, damping: 15 },
  snappy: { type: 'spring', stiffness: 400, damping: 30 },
  badge: { type: 'spring', stiffness: 200, damping: 15 },
};

// =============================================================================
// VIEWPORT CONFIGURATION
// =============================================================================

/**
 * Standard viewport settings for scroll-triggered animations
 */
export const viewport = {
  once: true,
  margin: '-80px',
};

/**
 * Viewport with custom margins
 */
export const viewportWithMargin = (margin = '-80px') => ({
  once: true,
  margin,
});

// =============================================================================
// ANIMATION VARIANTS
// =============================================================================

/**
 * Fade up animation - most common entry animation
 */
export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.normal,
      ease: easings.default,
    },
  },
};

/**
 * Fade in with scale - for badges and small elements
 */
export const fadeInScale = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: durations.normal,
      ease: easings.default,
    },
  },
};

/**
 * Text reveal animation - slides text up from below
 */
export const textReveal = {
  hidden: { y: '100%' },
  visible: {
    y: 0,
    transition: {
      duration: durations.slow - 0.2,
      ease: easings.textReveal,
    },
  },
};

/**
 * Fade from right - for secondary content
 */
export const fadeFromRight = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.slow - 0.2,
      ease: easings.default,
    },
  },
};

/**
 * Card entrance animation
 */
export const cardEntrance = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: durations.slow,
      ease: easings.default,
    },
  },
};

/**
 * Simple fade animation
 */
export const fade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: durations.normal,
    },
  },
};

// =============================================================================
// CONTAINER VARIANTS (with stagger)
// =============================================================================

/**
 * Standard stagger delay for children
 */
export const STAGGER_DELAY = 0.1;

/**
 * Container for staggered children animations
 */
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER_DELAY,
      delayChildren: 0.1,
    },
  },
};

/**
 * Container with custom stagger configuration
 */
export const staggerContainerWithConfig = (stagger = STAGGER_DELAY, delay = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

/**
 * Fast stagger for small items like tags
 */
export const fastStaggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.3,
    },
  },
};

// =============================================================================
// HOVER ANIMATIONS
// =============================================================================

/**
 * Standard hover lift effect
 */
export const hoverLift = {
  y: -5,
  transition: { duration: durations.fast },
};

/**
 * Card hover with scale
 */
export const cardHover = {
  scale: 1.02,
  zIndex: 50,
  boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
};

/**
 * Icon rotation on hover
 */
export const iconRotate = {
  rotate: 45,
  transition: { type: 'spring', stiffness: 300, damping: 20 },
};

// =============================================================================
// SPECIAL ANIMATIONS
// =============================================================================

/**
 * Progress line animation (for timeline)
 */
export const progressLine = {
  initial: { height: 0 },
  animate: { height: '100%' },
  transition: {
    duration: 1.5,
    ease: 'easeOut',
  },
};

/**
 * Progress bar animation
 */
export const progressBar = (progress) => ({
  initial: { width: 0 },
  animate: { width: `${progress}%` },
  transition: {
    duration: 1.5,
    ease: 'easeOut',
  },
});

/**
 * Accordion content animation
 */
export const accordionContent = {
  initial: { height: 0, opacity: 0 },
  animate: { height: 'auto', opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: {
    duration: durations.normal,
    ease: easings.accordion,
  },
};

/**
 * Underline reveal animation (for hero)
 */
export const underlineReveal = {
  initial: { scaleX: 0 },
  animate: { scaleX: 1 },
  transition: {
    duration: durations.slow - 0.2,
    delay: 0.8,
    ease: easings.default,
  },
};

/**
 * Floating animation for decorative elements
 */
export const float = {
  y: [-5, 5, -5],
  transition: {
    duration: 6,
    ease: 'easeInOut',
    repeat: Infinity,
  },
};

/**
 * Ring rotation animation
 */
export const ringRotate = (duration = 40, reverse = false) => ({
  rotate: reverse ? -360 : 360,
  transition: {
    duration,
    ease: 'linear',
    repeat: Infinity,
  },
});

// =============================================================================
// PAGE TRANSITIONS
// =============================================================================

/**
 * Page entry/exit animation
 */
export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: {
    duration: durations.fast,
  },
};

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Create a delayed variant of any animation
 */
export const withDelay = (variants, delay) => ({
  ...variants,
  visible: {
    ...variants.visible,
    transition: {
      ...variants.visible.transition,
      delay,
    },
  },
});

/**
 * Create indexed delay for list items
 */
export const indexedDelay = (index, baseDelay = 0.1) => ({
  delay: index * baseDelay,
});

export default {
  durations,
  easings,
  springs,
  viewport,
  viewportWithMargin,
  fadeUp,
  fadeInScale,
  textReveal,
  fadeFromRight,
  cardEntrance,
  fade,
  staggerContainer,
  staggerContainerWithConfig,
  fastStaggerContainer,
  hoverLift,
  cardHover,
  iconRotate,
  progressLine,
  progressBar,
  accordionContent,
  underlineReveal,
  float,
  ringRotate,
  pageTransition,
  withDelay,
  indexedDelay,
  STAGGER_DELAY,
};
