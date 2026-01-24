/**
 * useScrollAnimation Hook
 *
 * Custom hook for scroll-triggered animations.
 * Returns animation state based on element visibility in viewport.
 *
 * Features:
 * - Configurable threshold for trigger point
 * - Option to animate only once or repeatedly
 * - Respects prefers-reduced-motion
 *
 * Usage:
 * const { ref, isInView, shouldAnimate } = useScrollAnimation({ threshold: 0.2 });
 * <div ref={ref} style={{ opacity: isInView ? 1 : 0 }}>Content</div>
 */

import { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';

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
 * Main scroll animation hook
 */
const useScrollAnimation = ({
  threshold = 0.2,
  once = true,
  amount = 'some',
} = {}) => {
  const ref = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Use Framer Motion's useInView hook
  const isInView = useInView(ref, {
    once,
    amount,
    margin: `-${Math.round(threshold * 100)}px`,
  });

  // If user prefers reduced motion, always show content
  const shouldAnimate = !prefersReducedMotion;
  const isVisible = prefersReducedMotion ? true : isInView;

  return {
    ref,
    isInView: isVisible,
    shouldAnimate,
    prefersReducedMotion,
  };
};

export { usePrefersReducedMotion };
export default useScrollAnimation;
