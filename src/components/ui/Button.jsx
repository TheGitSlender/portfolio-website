/**
 * Button
 *
 * A versatile button component with multiple variants and magnetic hover effect.
 * Supports links (internal and external) and standard button behavior.
 *
 * @param {React.ReactNode} children - Button text content
 * @param {string} variant - Visual style: 'primary', 'secondary', 'outline', 'ghost'
 * @param {string} className - Additional CSS classes
 * @param {React.ComponentType} icon - Optional icon component to display
 * @param {string} to - Internal route (uses React Router Link)
 * @param {boolean} magnetic - Enable magnetic hover effect (default: true)
 */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useMagnetic } from '../../hooks/useMagnetic';
import { springs, iconRotate } from '../../config/animations';

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

  const baseStyles = `
    inline-flex items-center justify-between gap-4
    px-8 py-4 rounded-[50px]
    font-bold text-lg
    transition-shadow duration-300
    active:scale-95
  `;

  const variants = {
    primary: `
      bg-[var(--color-accent-primary)] text-[var(--color-text-primary)]
      shadow-[var(--shadow-strong)]
      hover:shadow-[var(--shadow-glow)]
    `,
    secondary: `
      bg-[var(--color-text-primary)] text-[var(--color-bg-primary)]
      shadow-[var(--shadow-strong)]
      hover:shadow-xl
      active:bg-[var(--color-accent-primary)] active:text-white
    `,
    outline: `
      bg-transparent
      border-2 border-[var(--color-border-subtle)]
      text-[var(--color-text-primary)]
      hover:border-[var(--color-text-primary)]
      hover:bg-[var(--color-bg-secondary)]
    `,
    ghost: `
      bg-transparent
      text-[var(--color-text-secondary)]
      hover:text-[var(--color-text-primary)]
      hover:bg-[var(--color-glass-bg)]
    `,
  };

  const iconVariants = {
    primary: 'bg-[var(--color-text-primary)] text-[var(--color-bg-primary)]',
    secondary: 'bg-[var(--color-accent-primary)] text-[var(--color-text-primary)]',
    outline: 'bg-[var(--color-text-primary)] text-[var(--color-bg-primary)]',
    ghost: 'bg-[var(--color-text-primary)] text-[var(--color-bg-primary)]',
  };

  const Component = to ? Link : props.href ? 'a' : 'button';
  const linkProps = to ? { to } : props.href ? { href: props.href } : {};

  return (
    <motion.div
      ref={ref}
      onMouseMove={magnetic ? handleMouseMove : undefined}
      onMouseLeave={magnetic ? handleMouseLeave : undefined}
      animate={{ x: magnetic ? x : 0, y: magnetic ? y : 0 }}
      transition={springs.button}
      className="inline-block"
    >
      <Component
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...linkProps}
        {...props}
      >
        <span>{children}</span>

        {Icon && (
          <motion.span
            className={`flex items-center justify-center w-8 h-8 rounded-full ${iconVariants[variant]}`}
            whileHover={iconRotate}
          >
            <Icon className="w-4 h-4" />
          </motion.span>
        )}
      </Component>
    </motion.div>
  );
};

export default Button;
