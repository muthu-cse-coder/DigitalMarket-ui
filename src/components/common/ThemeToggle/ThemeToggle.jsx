import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaSun, 
  FaMoon, 
  FaDesktop,
  FaChevronDown,
  FaCheck
} from 'react-icons/fa';
import { useTheme } from '../../../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { themeMode, appliedTheme, accentColor, changeThemeMode, changeAccentColor } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { id: 'light', label: 'Light', icon: <FaSun /> },
    { id: 'dark', label: 'Dark', icon: <FaMoon /> },
    { id: 'system', label: 'System', icon: <FaDesktop /> },
  ];

  const accentColors = [
    { id: 'purple', label: 'Purple', color: '#a855f7' },
    { id: 'blue', label: 'Blue', color: '#3b82f6' },
    { id: 'green', label: 'Green', color: '#22c55e' },
    { id: 'orange', label: 'Orange', color: '#f97316' },
    { id: 'pink', label: 'Pink', color: '#ec4899' },
  ];

  const currentTheme = themes.find(t => t.id === themeMode);
  const currentAccent = accentColors.find(a => a.id === accentColor);

  return (
    <div className="theme-toggle-wrapper">
      {/* Toggle Button */}
      <motion.button
        className="theme-toggle-button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="theme-icon">
          {appliedTheme === 'dark' ? <FaMoon /> : <FaSun />}
        </span>
        <FaChevronDown className={`dropdown-icon ${isOpen ? 'open' : ''}`} />
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="theme-toggle-backdrop"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown Content */}
            <motion.div
              className="theme-toggle-dropdown"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {/* Theme Mode Section */}
              <div className="dropdown-section">
                <h4 className="dropdown-section-title">Theme Mode</h4>
                <div className="theme-options">
                  {themes.map((theme) => (
                    <button
                      key={theme.id}
                      className={`theme-option ${themeMode === theme.id ? 'active' : ''}`}
                      onClick={() => {
                        changeThemeMode(theme.id);
                        setIsOpen(false);
                      }}
                    >
                      <span className="theme-option-icon">{theme.icon}</span>
                      <span className="theme-option-label">{theme.label}</span>
                      {themeMode === theme.id && (
                        <FaCheck className="theme-option-check" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="dropdown-divider"></div>

              {/* Accent Color Section */}
              <div className="dropdown-section">
                <h4 className="dropdown-section-title">Accent Color</h4>
                <div className="accent-colors">
                  {accentColors.map((accent) => (
                    <button
                      key={accent.id}
                      className={`accent-color-option ${accentColor === accent.id ? 'active' : ''}`}
                      onClick={() => changeAccentColor(accent.id)}
                      title={accent.label}
                    >
                      <span 
                        className="accent-color-circle"
                        style={{ 
                          background: accent.color,
                          boxShadow: accentColor === accent.id 
                            ? `0 0 0 2px var(--bg-primary), 0 0 0 4px ${accent.color}` 
                            : 'none'
                        }}
                      ></span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeToggle;