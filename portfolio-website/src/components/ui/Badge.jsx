/**
 * Badge Component
 *
 * Small label component for tags, skills, and categories.
 *
 * Props:
 * - children (node): Badge text
 * - variant (string): 'default' | 'primary' | 'success' | 'warning' | 'purple'
 * - size (string): 'sm' | 'md'
 * - className (string): Additional classes
 *
 * Usage:
 * <Badge variant="primary">Python</Badge>
 * <Badge variant="success" size="sm">Completed</Badge>
 */

import { motion } from 'framer-motion';

const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}) => {
  // Base styles
  const baseStyles = 'inline-flex items-center font-medium rounded-full';

  // Variant-specific styles
  const variantStyles = {
    default: 'bg-[--color-surface-hover] text-[--color-primary-text-secondary]',
    primary: 'bg-[--color-accent-blue]/10 text-[--color-accent-blue]',
    success: 'bg-[--color-accent-green]/10 text-[--color-accent-green]',
    warning: 'bg-[--color-accent-orange]/10 text-[--color-accent-orange]',
    purple: 'bg-[--color-accent-purple]/10 text-[--color-accent-purple]',
  };

  // Size-specific styles
  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  };

  // Combine all styles
  const combinedStyles = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `.trim();

  // Subtle hover animation
  const badgeVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
  };

  return (
    <motion.span
      className={combinedStyles}
      variants={badgeVariants}
      initial="rest"
      whileHover="hover"
      {...props}
    >
      {children}
    </motion.span>
  );
};

export default Badge;
