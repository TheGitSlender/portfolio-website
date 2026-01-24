/**
 * AnimatedSection Component
 *
 * Wrapper component that adds scroll-triggered animations to sections.
 * Uses Framer Motion's useInView for viewport detection.
 *
 * Props:
 * - children (node): Section content
 * - className (string): Additional classes
 * - animation (string): 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight'
 * - delay (number): Animation delay in seconds
 * - threshold (number): Viewport threshold (0-1)
 * - once (boolean): Only animate once (default true)
 *
 * Usage:
 * <AnimatedSection animation="fadeUp">
 *   <YourContent />
 * </AnimatedSection>
 */

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AnimatedSection = ({
  children,
  className = '',
  animation = 'fadeUp',
  delay = 0,
  threshold = 0.2,
  once = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin: `-${Math.round(threshold * 100)}px`,
  });

  // Animation variants
  const animations = {
    fadeUp: {
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: 'easeOut',
          delay,
        },
      },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: 'easeOut',
          delay,
        },
      },
    },
    slideLeft: {
      hidden: { opacity: 0, x: 50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
          ease: 'easeOut',
          delay,
        },
      },
    },
    slideRight: {
      hidden: { opacity: 0, x: -50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
          ease: 'easeOut',
          delay,
        },
      },
    },
  };

  const selectedAnimation = animations[animation] || animations.fadeUp;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={selectedAnimation}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
