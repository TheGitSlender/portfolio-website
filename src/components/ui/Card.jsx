
import React from 'react';
import { motion } from 'framer-motion';

/**
 * Card Component
 * 
 * Base component for Bento grid items.
 * Supports hover effects and glassmorphism.
 */
const Card = ({
  children,
  className = '',
  hover = true,
  ...props
}) => {
  return (
    <motion.div
      className={`bento-card p-6 bg-[#F0F0F0] border border-[var(--color-border-subtle)] rounded-[var(--radius-xl)] shadow-[var(--shadow-card)] ${className}`}
      whileHover={hover ? {
        y: -5,
        borderColor: 'var(--color-border-hover)',
        boxShadow: 'var(--shadow-strong)'
      } : {}}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
