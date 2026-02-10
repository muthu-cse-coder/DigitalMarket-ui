import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Input.css';

/**
 * Reusable Input Component
 * @param {string} type - Input type (text, email, password, tel, etc.)
 * @param {string} label - Input label
 * @param {string} placeholder - Input placeholder
 * @param {string} value - Input value
 * @param {function} onChange - Change handler
 * @param {string} error - Error message
 * @param {boolean} required - Required field
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} icon - Icon element
 * @param {boolean} disabled - Disabled state
 */
const Input = ({
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  error,
  required = false,
  className = '',
  icon = null,
  disabled = false,
  name,
  id,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputId = id || name || `input-${Math.random().toString(36).substr(2, 9)}`;

  const inputClasses = `
    input-field
    ${error ? 'input-error' : ''}
    ${isFocused ? 'input-focused' : ''}
    ${icon ? 'input-with-icon' : ''}
    ${disabled ? 'input-disabled' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className="input-component">
      {/* Label */}
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
          {required && <span className="input-required">*</span>}
        </label>
      )}

      {/* Input Container */}
      <div className="input-container">
        {/* Icon */}
        {icon && (
          <span className="input-icon">
            {icon}
          </span>
        )}

        {/* Input Field */}
        <motion.input
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={inputClasses}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          whileFocus={{ scale: 1.01 }}
          {...props}
        />
      </div>

      {/* Error Message */}
      {error && (
        <motion.span
          className="input-error-message"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {error}
        </motion.span>
      )}
    </div>
  );
};

// Textarea Component
export const Textarea = ({
  label,
  placeholder,
  value,
  onChange,
  error,
  required = false,
  className = '',
  disabled = false,
  rows = 4,
  name,
  id,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const textareaId = id || name || `textarea-${Math.random().toString(36).substr(2, 9)}`;

  const textareaClasses = `
    input-field
    textarea-field
    ${error ? 'input-error' : ''}
    ${isFocused ? 'input-focused' : ''}
    ${disabled ? 'input-disabled' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className="input-component">
      {/* Label */}
      {label && (
        <label htmlFor={textareaId} className="input-label">
          {label}
          {required && <span className="input-required">*</span>}
        </label>
      )}

      {/* Textarea Field */}
      <motion.textarea
        id={textareaId}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={textareaClasses}
        disabled={disabled}
        rows={rows}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        whileFocus={{ scale: 1.01 }}
        {...props}
      />

      {/* Error Message */}
      {error && (
        <motion.span
          className="input-error-message"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {error}
        </motion.span>
      )}
    </div>
  );
};

// Select Component
export const Select = ({
  label,
  value,
  onChange,
  error,
  required = false,
  className = '',
  disabled = false,
  options = [],
  placeholder = 'Select an option',
  name,
  id,
  ...props
}) => {
  const selectId = id || name || `select-${Math.random().toString(36).substr(2, 9)}`;

  const selectClasses = `
    input-field
    select-field
    ${error ? 'input-error' : ''}
    ${disabled ? 'input-disabled' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className="input-component">
      {/* Label */}
      {label && (
        <label htmlFor={selectId} className="input-label">
          {label}
          {required && <span className="input-required">*</span>}
        </label>
      )}

      {/* Select Field */}
      <select
        id={selectId}
        name={name}
        value={value}
        onChange={onChange}
        className={selectClasses}
        disabled={disabled}
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {/* Error Message */}
      {error && (
        <motion.span
          className="input-error-message"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {error}
        </motion.span>
      )}
    </div>
  );
};

export default Input;