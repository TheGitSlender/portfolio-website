/**
 * Reveal
 *
 * Generic scroll-triggered entrance wrapper (fade + rise by default).
 *
 * @param {string} as       - Element to render
 * @param {object} variants - hidden/visible variants (defaults to fadeUp)
 * @param {number} delay    - Seconds before the entrance starts
 */

import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../../config/animations';

const Reveal = ({ children, as = 'div', variants = fadeUp, delay = 0, className = '', ...rest }) => {
  const Tag = motion[as];
  const timedVariants = delay
    ? {
        ...variants,
        visible: {
          ...variants.visible,
          transition: { ...variants.visible.transition, delay },
        },
      }
    : variants;

  return (
    <Tag
      className={className}
      variants={timedVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
