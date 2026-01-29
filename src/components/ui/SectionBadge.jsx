/**
 * SectionBadge
 *
 * A consistent badge component used at the top of sections.
 * Dark background with uppercase text and optional animation.
 *
 * @param {string} children - Badge text content
 * @param {boolean} animated - Whether to animate on scroll (default: true)
 * @param {string} className - Additional CSS classes
 */

import { motion } from 'framer-motion';
import { fadeInScale, viewport } from '../../config/animations';

const SectionBadge = ({ children, animated = true, className = '' }) => {
  const baseClasses = `
    inline-flex items-center gap-2
    w-fit whitespace-nowrap
    bg-[var(--color-badge-bg)]
    rounded-full px-4 py-1.5
    border border-[var(--color-badge-border)]
    shadow-lg
  `;

  const textClasses = `
    text-[var(--color-badge-text)] text-[10px] font-black
    uppercase tracking-[0.2em] font-sans
  `;

  if (!animated) {
    return (
      <div className={`${baseClasses} ${className}`}>
        <span className={textClasses}>{children}</span>
      </div>
    );
  }

  return (
    <motion.div
      className={`${baseClasses} ${className}`}
      variants={fadeInScale}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <span className={textClasses}>{children}</span>
    </motion.div>
  );
};

export default SectionBadge;
