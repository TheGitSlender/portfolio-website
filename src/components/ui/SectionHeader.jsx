/**
 * SectionHeader
 *
 * A reusable header component for sections with animated badge and heading.
 * Combines SectionBadge and AnimatedHeading with proper spacing.
 *
 * @param {string} title - Main heading text
 * @param {string} subtitle - Badge text (optional)
 * @param {boolean} centered - Center align content (default: false)
 * @param {string} className - Additional CSS classes
 */

import { motion } from 'framer-motion';
import SectionBadge from './SectionBadge';
import AnimatedHeading from './AnimatedHeading';
import { staggerContainer, viewport } from '../../config/animations';

const SectionHeader = ({ title, subtitle, centered = false, className = '' }) => {
  return (
    <motion.div
      className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {subtitle && (
        <SectionBadge className="mb-4">{subtitle}</SectionBadge>
      )}
      <AnimatedHeading>{title}</AnimatedHeading>
    </motion.div>
  );
};

export default SectionHeader;
