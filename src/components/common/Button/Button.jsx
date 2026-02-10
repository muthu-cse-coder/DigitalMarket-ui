import React from 'react';
import { motion } from 'framer-motion';
import './Button.css';

/**
 * Reusable Button Component with animations
 * @param {string} variant - Button style variant (primary, secondary, outline, ghost)
 * @param {string} size - Button size (sm, md, lg)
 * @param {boolean} fullWidth - Full width button
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Button content
 * @param {React.ReactNode} icon - Icon element
 * @param {string} iconPosition - Icon position (left, right)
 * @param {boolean} loading - Loading state
 * @param {boolean} disabled - Disabled state
 * @param {function} onClick - Click handler
 */
const Button = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  icon = null,
  iconPosition = 'right',
  loading = false,
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) => {
  // Button class names based on props
  const buttonClasses = `
    btn-component
    btn-${variant}
    btn-${size}
    ${fullWidth ? 'btn-full-width' : ''}
    ${loading ? 'btn-loading' : ''}
    ${disabled ? 'btn-disabled' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  // Animation variants
  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  return (
    <motion.button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
      variants={buttonVariants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      {...props}
    >
      {/* Loading Spinner */}
      {loading && (
        <span className="btn-spinner">
          <svg className="animate-spin" viewBox="0 0 24 24">
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
              fill="none"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </span>
      )}

      {/* Icon - Left */}
      {icon && iconPosition === 'left' && !loading && (
        <span className="btn-icon btn-icon-left">{icon}</span>
      )}

      {/* Button Text */}
      {children && <span className="btn-text">{children}</span>}

      {/* Icon - Right */}
      {icon && iconPosition === 'right' && !loading && (
        <span className="btn-icon btn-icon-right">{icon}</span>
      )}
    </motion.button>
  );
};

export default Button;