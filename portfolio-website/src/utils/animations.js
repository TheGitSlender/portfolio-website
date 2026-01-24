/**
 * Animation Utilities
 *
 * Reusable Framer Motion animation variants for consistent animations
 * throughout the portfolio.
 *
 * Usage:
 * import { fadeInUp, staggerContainer } from '../utils/animations';
 * <motion.div variants={fadeInUp} initial="hidden" animate="visible">
 */

// ============================================
// FADE ANIMATIONS
// ============================================

/**
 * Fade in from bottom (most common)
 */
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

/**
 * Fade in from top
 */
export const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

/**
 * Simple fade in (no movement)
 */
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

/**
 * Fade in from left
 */
export const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

/**
 * Fade in from right
 */
export const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// ============================================
// STAGGER CONTAINERS
// ============================================

/**
 * Container that staggers children animations
 * Use with child elements that have their own variants
 */
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/**
 * Faster stagger for smaller elements (badges, icons)
 */
export const staggerContainerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

/**
 * Slower stagger for larger elements (cards, sections)
 */
export const staggerContainerSlow = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// ============================================
// HOVER ANIMATIONS
// ============================================

/**
 * Card hover effect (lift + shadow)
 */
export const cardHover = {
  rest: {
    y: 0,
    boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 10px 30px rgba(0,0,0,0.08)',
  },
  hover: {
    y: -8,
    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

/**
 * Button hover effect (subtle scale)
 */
export const buttonHover = {
  rest: { scale: 1 },
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
};

/**
 * Icon hover effect (scale + rotate)
 */
export const iconHover = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: { duration: 0.2 },
  },
};

// ============================================
// PAGE TRANSITIONS
// ============================================

/**
 * Page enter/exit animation
 */
export const pageTransition = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

/**
 * Page with slide effect
 */
export const pageSlide = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

// ============================================
// HERO SECTION ANIMATIONS
// ============================================

/**
 * Hero container with staggered children
 */
export const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

/**
 * Hero text elements
 */
export const heroItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // Custom easing
    },
  },
};

// ============================================
// SCALE ANIMATIONS
// ============================================

/**
 * Scale in from center
 */
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

/**
 * Scale out (for exit animations)
 */
export const scaleOut = {
  visible: { opacity: 1, scale: 1 },
  hidden: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Create a delayed variant of any animation
 * @param {object} variant - Base animation variant
 * @param {number} delay - Delay in seconds
 */
export const withDelay = (variant, delay) => ({
  ...variant,
  visible: {
    ...variant.visible,
    transition: {
      ...variant.visible.transition,
      delay,
    },
  },
});

/**
 * Create a custom stagger container
 * @param {number} stagger - Stagger delay between children
 * @param {number} delay - Initial delay before first child
 */
export const createStaggerContainer = (stagger = 0.1, delay = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});
