/**
 * ScrollProgress
 *
 * Hairline accent bar along the top edge that tracks page scroll.
 */

import { motion, useScroll, useSpring } from 'framer-motion';
import { springs } from '../../config/animations';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, springs.soft);

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-accent"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
