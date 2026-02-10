import React from 'react';
import { motion } from 'framer-motion';
import './Card.css';

/**
 * Reusable Card Component with hover animations
 * @param {string} variant - Card style (default, gradient, glass, bordered)
 * @param {boolean} hoverable - Enable hover effects
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Card content
 * @param {function} onClick - Click handler
 */
const Card = ({
  variant = 'default',
  hoverable = true,
  className = '',
  children,
  onClick,
  ...props
}) => {
  const cardClasses = `
    card-component
    card-${variant}
    ${hoverable ? 'card-hoverable' : ''}
    ${onClick ? 'card-clickable' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const cardVariants = {
    rest: { 
      scale: 1,
      y: 0
    },
    hover: { 
      scale: hoverable ? 1.03 : 1,
      y: hoverable ? -8 : 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.div
      className={cardClasses}
      onClick={onClick}
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Card Header Component
export const CardHeader = ({ children, className = '' }) => {
  return (
    <div className={`card-header ${className}`}>
      {children}
    </div>
  );
};

// Card Body Component
export const CardBody = ({ children, className = '' }) => {
  return (
    <div className={`card-body ${className}`}>
      {children}
    </div>
  );
};

// Card Footer Component
export const CardFooter = ({ children, className = '' }) => {
  return (
    <div className={`card-footer ${className}`}>
      {children}
    </div>
  );
};

// Card Image Component
export const CardImage = ({ src, alt, className = '' }) => {
  return (
    <div className={`card-image ${className}`}>
      <img src={src} alt={alt} />
    </div>
  );
};

// Card Icon Component
export const CardIcon = ({ children, variant = 'primary', className = '' }) => {
  return (
    <div className={`card-icon card-icon-${variant} ${className}`}>
      {children}
    </div>
  );
};

// Card Title Component
export const CardTitle = ({ children, className = '' }) => {
  return (
    <h3 className={`card-title ${className}`}>
      {children}
    </h3>
  );
};

// Card Description Component
export const CardDescription = ({ children, className = '' }) => {
  return (
    <p className={`card-description ${className}`}>
      {children}
    </p>
  );
};

export default Card;