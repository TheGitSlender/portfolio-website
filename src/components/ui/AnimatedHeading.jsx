/**
 * AnimatedHeading
 *
 * A heading component with text reveal animation.
 * Text slides up from below its container on scroll.
 *
 * @param {string} children - Heading text (can include line breaks via <br />)
 * @param {string} as - HTML heading element (h1, h2, h3, etc.)
 * @param {string} className - Additional CSS classes
 * @param {boolean} animated - Whether to animate (default: true)
 */

import { motion } from 'framer-motion';
import { textReveal, viewport } from '../../config/animations';

const AnimatedHeading = ({
  children,
  as = 'h2',
  className = '',
  animated = true,
}) => {
  const Tag = as;
  const baseClasses = `
    text-5xl md:text-7xl font-black
    italic tracking-tighter leading-[0.85]
    font-serif
  `;

  if (!animated) {
    return (
      <Tag className={`${baseClasses} ${className}`}>
        {children}
      </Tag>
    );
  }

  return (
    <div className="overflow-hidden">
      <motion.div
        variants={textReveal}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <Tag className={`${baseClasses} ${className}`}>
          {children}
        </Tag>
      </motion.div>
    </div>
  );
};

export default AnimatedHeading;
