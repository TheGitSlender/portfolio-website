/**
 * ParallaxSection Component
 *
 * Wrapper component that adds parallax scrolling effect to its children.
 * Uses Framer Motion for smooth, GPU-accelerated animations.
 *
 * Props:
 * - children (node): Content to apply parallax to
 * - speed (number): Parallax speed (0.1 to 1, default 0.3)
 * - direction (string): 'up' or 'down' (default 'up')
 * - className (string): Additional classes
 *
 * Usage:
 * <ParallaxSection speed={0.5}>
 *   <YourContent />
 * </ParallaxSection>
 */

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const ParallaxSection = ({
  children,
  speed = 0.3,
  direction = 'up',
  className = '',
}) => {
  const ref = useRef(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Get scroll progress relative to element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Calculate parallax offset
  const multiplier = direction === 'up' ? -1 : 1;
  const offset = 100 * speed * multiplier;

  // Transform scroll progress to y position
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [offset, -offset]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxSection;
