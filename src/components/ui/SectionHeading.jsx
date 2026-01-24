/**
 * SectionHeading Component
 *
 * Consistent heading component for all page sections.
 *
 * Props:
 * - title (string): Main heading text
 * - subtitle (string): Optional subtitle/description
 * - align (string): 'left' | 'center'
 * - className (string): Additional classes
 *
 * Usage:
 * <SectionHeading title="About Me" subtitle="Get to know my background" />
 * <SectionHeading title="Projects" align="center" />
 */

import { motion } from 'framer-motion';

const SectionHeading = ({
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  // Alignment classes
  const alignmentStyles = {
    left: 'text-left',
    center: 'text-center mx-auto',
  };

  // Animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: 0.1,
      },
    },
  };

  return (
    <div className={`mb-12 max-w-2xl ${alignmentStyles[align]} ${className}`}>
      <motion.h2
        className="text-3xl font-bold text-[--color-primary-text] md:text-4xl lg:text-5xl"
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          className="mt-4 text-lg text-[--color-primary-text-secondary] md:text-xl"
          variants={subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
