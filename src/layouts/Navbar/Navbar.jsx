import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { useScrollDirection, useScrollPosition } from '../../hooks/useScrollAnimation';
import { NAV_LINKS, COMPANY_INFO } from '../../utils/constants';
import Button from '../../components/common/Button/Button';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const scrollDirection = useScrollDirection();
  const scrollPosition = useScrollPosition();
  const navigate = useNavigate();
  const location = useLocation();

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle link click
  const handleLinkClick = (linkId, path) => {
    setActiveLink(linkId);
    setIsMobileMenuOpen(false);
    
    // Special handling for portfolio - scroll to section on homepage
    if (linkId === 'portfolio') {
      if (location.pathname !== '/') {
        // If not on homepage, navigate to home first, then scroll
        navigate('/');
        setTimeout(() => {
          const portfolioSection = document.getElementById('portfolio');
          if (portfolioSection) {
            portfolioSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Already on homepage, just scroll
        const portfolioSection = document.getElementById('portfolio');
        if (portfolioSection) {
          portfolioSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  // Navbar visibility based on scroll
  const isNavbarVisible = scrollDirection === 'up' || scrollPosition < 100;

  // Navbar background based on scroll
  const isNavbarScrolled = scrollPosition > 50;

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        className={`navbar ${isNavbarScrolled ? 'navbar-scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: isNavbarVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="navbar-container">
          {/* Logo */}
          <motion.div
            className="navbar-logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" onClick={() => handleLinkClick('home', '/')}>
              <span className="logo-text gradient-text">
                {COMPANY_INFO.name}
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation Links */}
          <motion.ul
            className="navbar-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {NAV_LINKS.map((link, index) => (
              <motion.li
                key={link.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={`navbar-link ${activeLink === link.id ? 'active' : ''}`}
                  onClick={() => handleLinkClick(link.id, link.path)}
                >
                  {link.title}
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA Button - Desktop */}
          <motion.div
            className="navbar-cta"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button variant="primary" size="sm">
              Get Started
            </Button>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="navbar-mobile-toggle"
            onClick={toggleMobileMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMobileMenu}
            />

            {/* Mobile Menu Content */}
            <motion.div
              className="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {/* Mobile Menu Header */}
              <div className="mobile-menu-header">
                <span className="logo-text gradient-text">
                  {COMPANY_INFO.name}
                </span>
                <button
                  className="mobile-menu-close"
                  onClick={toggleMobileMenu}
                >
                  <FaTimes />
                </button>
              </div>

              {/* Mobile Menu Links */}
              <ul className="mobile-menu-links">
                {NAV_LINKS.map((link, index) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`mobile-menu-link ${
                        activeLink === link.id ? 'active' : ''
                      }`}
                      onClick={() => handleLinkClick(link.id, link.path)}
                    >
                      {link.title}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile Menu CTA */}
              <motion.div
                className="mobile-menu-cta"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button variant="primary" size="md" fullWidth>
                  Get Started
                </Button>
              </motion.div>

              {/* Mobile Menu Footer */}
              <motion.div
                className="mobile-menu-footer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <p>© 2024 {COMPANY_INFO.name}</p>
                <p className="mobile-menu-tagline">{COMPANY_INFO.tagline}</p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;