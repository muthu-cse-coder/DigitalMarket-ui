import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  // Theme modes: 'light', 'dark', 'system'
  const [themeMode, setThemeMode] = useState('system');
  
  // Accent colors: 'blue', 'purple', 'green', 'orange', 'pink'
  const [accentColor, setAccentColor] = useState('purple');
  
  // Actual applied theme (computed from themeMode and system preference)
  const [appliedTheme, setAppliedTheme] = useState('light');

  // Detect system preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      if (themeMode === 'system') {
        setAppliedTheme(e.matches ? 'dark' : 'light');
      }
    };

    // Set initial value
    if (themeMode === 'system') {
      setAppliedTheme(mediaQuery.matches ? 'dark' : 'light');
    }

    // Listen for changes
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [themeMode]);

  // Load saved preferences from localStorage
  useEffect(() => {
    const savedThemeMode = localStorage.getItem('themeMode');
    const savedAccentColor = localStorage.getItem('accentColor');

    if (savedThemeMode) {
      setThemeMode(savedThemeMode);
      if (savedThemeMode !== 'system') {
        setAppliedTheme(savedThemeMode);
      }
    }

    if (savedAccentColor) {
      setAccentColor(savedAccentColor);
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', appliedTheme);
    document.documentElement.setAttribute('data-accent', accentColor);
  }, [appliedTheme, accentColor]);

  // Change theme mode
  const changeThemeMode = (mode) => {
    setThemeMode(mode);
    localStorage.setItem('themeMode', mode);

    if (mode === 'system') {
      const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setAppliedTheme(systemPreference ? 'dark' : 'light');
    } else {
      setAppliedTheme(mode);
    }
  };

  // Change accent color
  const changeAccentColor = (color) => {
    setAccentColor(color);
    localStorage.setItem('accentColor', color);
  };

  // Toggle between light and dark
  const toggleTheme = () => {
    const newMode = appliedTheme === 'light' ? 'dark' : 'light';
    changeThemeMode(newMode);
  };

  const value = {
    themeMode,
    appliedTheme,
    accentColor,
    changeThemeMode,
    changeAccentColor,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;