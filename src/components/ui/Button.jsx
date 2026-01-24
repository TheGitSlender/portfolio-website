
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * Button Component
 * 
 * Supports 'primary' and 'outline' variants.
 * specific types like 'submit' or default 'button'
 * can be rendered as a Link if 'to' prop is provided
 */
const Button = ({
  children,
  variant = 'primary',
  className = '',
  icon: Icon,
  to,
  ...props
}) => {
  // Base styles
  const baseStyles = "inline-flex items-center justify-between gap-4 px-8 py-4 rounded-[50px] font-bold text-lg transition-all duration-300 transform active:scale-95";

  // Variants configuration
  const variants = {
    // User requested: Orange bg, dark text, strong shadow
    primary: "bg-[var(--color-accent-primary)] text-black shadow-[var(--shadow-strong)] hover:shadow-[var(--shadow-glow)] hover:scale-[1.02]",

    // Dark variant (like the "Get in touch" button in reference)
    secondary: "bg-[#111] text-white shadow-[var(--shadow-strong)] hover:shadow-xl hover:scale-[1.02]",

    outline: "bg-transparent border-2 border-[var(--color-border-subtle)] text-[var(--color-text-primary)] hover:border-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)]",
    ghost: "bg-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-glass-bg)]"
  };

  const Component = to ? Link : motion.button;
  const linkProps = to ? { to } : {};
  const motionProps = to ? {} : { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 } };

  return (
    <Component
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...linkProps}
      {...motionProps}
      {...props}
    >
      <span>{children}</span>

      {/* Icon Circle Logic to match reference */}
      {Icon && (
        <span className={`flex items-center justify-center w-8 h-8 rounded-full ${variant === 'primary' ? 'bg-[#111] text-white' :
            variant === 'secondary' ? 'bg-[var(--color-accent-primary)] text-black' :
              'bg-[var(--color-text-primary)] text-[var(--color-bg-primary)]'
          }`}>
          <Icon className="w-4 h-4" />
        </span>
      )}
    </Component>
  );
};

export default Button;
