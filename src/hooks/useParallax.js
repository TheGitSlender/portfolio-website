/**
 * useParallax Hook
 *
 * Custom hook for parallax scroll effects.
 * Returns transform values based on scroll position.
 *
 * Features:
 * - Configurable speed and direction
 * - Smooth interpolation
 * - Respects prefers-reduced-motion
 *
 * Usage:
 * const { y, opacity } = useParallax({ speed: 0.5 });
 * <motion.div style={{ y, opacity }}>Content</motion.div>
 */

import { useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

/**
 * Check if user prefers reduced motion
 */
const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

/**
 * Main parallax hook
 *
 * @param {Object} options
 * @param {number} options.speed - Parallax speed (0.1 to 1, default 0.5)
 * @param {string} options.direction - 'up' or 'down' (default 'up')
 * @param {boolean} options.fadeOut - Whether to fade out on scroll (default false)
 * @param {Object} options.scrollRange - Custom scroll range [start, end]
 */
const useParallax = ({
  speed = 0.5,
  direction = 'up',
  fadeOut = false,
  scrollRange = [0, 500],
} = {}) => {
  const ref = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Get scroll progress
  const { scrollY } = useScroll();

  // Calculate parallax offset based on direction
  const multiplier = direction === 'up' ? 1 : -1;
  const offset = scrollRange[1] * speed * multiplier;

  // Create parallax transform
  const rawY = useTransform(
    scrollY,
    scrollRange,
    [0, prefersReducedMotion ? 0 : offset]
  );

  // Add spring physics for smoother motion
  const y = useSpring(rawY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Optional opacity fade
  const opacity = useTransform(
    scrollY,
    scrollRange,
    fadeOut && !prefersReducedMotion ? [1, 0] : [1, 1]
  );

  // Scale effect (optional)
  const scale = useTransform(
    scrollY,
    scrollRange,
    prefersReducedMotion ? [1, 1] : [1, 1 - speed * 0.1]
  );

  return {
    ref,
    y,
    opacity,
    scale,
    scrollY,
    prefersReducedMotion,
  };
};

export { usePrefersReducedMotion };
export default useParallax;
