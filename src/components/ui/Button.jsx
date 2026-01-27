import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useMagnetic } from '../../hooks/useMagnetic';

/**
 * Button Component
 *
 * Supports 'primary' and 'outline' variants.
 * Includes magnetic hover effect for enhanced interactivity.
 */
const Button = ({
  children,
  variant = 'primary',
  className = '',
  icon: Icon,
  to,
  magnetic = true,
  ...props
}) => {
  const { ref, x, y, handleMouseMove, handleMouseLeave } = useMagnetic(0.15);

  // Base styles
  const baseStyles = "inline-flex items-center justify-between gap-4 px-8 py-4 rounded-[50px] font-bold text-lg transition-shadow duration-300 active:scale-95";

  // Variants configuration
  const variants = {
    primary: "bg-[var(--color-accent-primary)] text-black shadow-[var(--shadow-strong)] hover:shadow-[var(--shadow-glow)]",
    secondary: "bg-[#111] text-white shadow-[var(--shadow-strong)] hover:shadow-xl",
    outline: "bg-transparent border-2 border-[var(--color-border-subtle)] text-[var(--color-text-primary)] hover:border-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)]",
    ghost: "bg-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-glass-bg)]"
  };

  const isLink = to || props.href;
  const Component = to ? Link : (props.href ? 'a' : 'button');
  const linkProps = to ? { to } : (props.href ? { href: props.href } : {});

  return (
    <motion.div
      ref={ref}
      onMouseMove={magnetic ? handleMouseMove : undefined}
      onMouseLeave={magnetic ? handleMouseLeave : undefined}
      animate={{ x: magnetic ? x : 0, y: magnetic ? y : 0 }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      <Component
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...linkProps}
        {...props}
      >
        <span>{children}</span>

        {/* Icon Circle Logic to match reference */}
        {Icon && (
          <motion.span
            className={`flex items-center justify-center w-8 h-8 rounded-full ${variant === 'primary' ? 'bg-[#111] text-white' :
              variant === 'secondary' ? 'bg-[var(--color-accent-primary)] text-black' :
                'bg-[var(--color-text-primary)] text-[var(--color-bg-primary)]'
              }`}
            whileHover={{ rotate: 45 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Icon className="w-4 h-4" />
          </motion.span>
        )}
      </Component>
    </motion.div>
  );
};

export default Button;
