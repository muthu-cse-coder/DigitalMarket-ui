import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPlay, FaRocket, FaStar } from 'react-icons/fa';
import Button from '../../common/Button/Button';
import { fadeIn, textVariant, staggerContainer } from '../../../animations/variants';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Background Elements */}
      <div className="hero-background">
        <div className="hero-gradient-1"></div>
        <div className="hero-gradient-2"></div>
        <div className="hero-gradient-3"></div>
      </div>

      {/* Floating Elements */}
      <div className="hero-floating-elements">
        <motion.div
          className="floating-shape shape-1"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="floating-shape shape-2"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="floating-shape shape-3"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          animate="show"
        >
          {/* Badge */}
          <motion.div
            className="hero-badge"
            variants={fadeIn('down', 0.2)}
          >
            <FaStar className="hero-badge-icon" />
            <span>Trusted by 500+ Companies Worldwide</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="hero-heading"
            variants={textVariant(0.3)}
          >
            Transform Your
            <span className="gradient-text"> Digital Presence</span>
            <br />
            Into Revenue
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="hero-subheading"
            variants={fadeIn('up', 0.4)}
          >
            We help businesses grow through data-driven digital marketing 
            strategies that deliver measurable results. From SEO to social 
            media, we've got you covered.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="hero-cta"
            variants={fadeIn('up', 0.5)}
          >
            <Button 
              variant="primary" 
              size="lg"
              icon={<FaRocket />}
              iconPosition="right"
            >
              Get Started Free
            </Button>
            <Button 
              variant="white" 
              size="lg"
              icon={<FaPlay />}
              iconPosition="left"
            >
              Watch Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="hero-stats"
            variants={fadeIn('up', 0.6)}
          >
            <div className="hero-stat">
              <h3 className="hero-stat-number gradient-text">500+</h3>
              <p className="hero-stat-label">Projects Completed</p>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <h3 className="hero-stat-number gradient-text">98%</h3>
              <p className="hero-stat-label">Client Satisfaction</p>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <h3 className="hero-stat-number gradient-text">15+</h3>
              <p className="hero-stat-label">Years Experience</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Image/Illustration */}
        <motion.div
          className="hero-visual"
          variants={fadeIn('left', 0.5)}
          initial="hidden"
          animate="show"
        >
          {/* 3D Card Effect */}
          <div className="hero-card-container">
            <motion.div
              className="hero-card"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Dashboard Mockup */}
              <div className="hero-dashboard">
                {/* Header */}
                <div className="dashboard-header">
                  <div className="dashboard-logo"></div>
                  <div className="dashboard-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                {/* Content */}
                <div className="dashboard-content">
                  {/* Chart */}
                  <div className="dashboard-chart">
                    <motion.div
                      className="chart-bar"
                      initial={{ height: 0 }}
                      animate={{ height: '60%' }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                    <motion.div
                      className="chart-bar"
                      initial={{ height: 0 }}
                      animate={{ height: '80%' }}
                      transition={{ duration: 1, delay: 0.7 }}
                    />
                    <motion.div
                      className="chart-bar"
                      initial={{ height: 0 }}
                      animate={{ height: '45%' }}
                      transition={{ duration: 1, delay: 0.9 }}
                    />
                    <motion.div
                      className="chart-bar"
                      initial={{ height: 0 }}
                      animate={{ height: '90%' }}
                      transition={{ duration: 1, delay: 1.1 }}
                    />
                    <motion.div
                      className="chart-bar"
                      initial={{ height: 0 }}
                      animate={{ height: '70%' }}
                      transition={{ duration: 1, delay: 1.3 }}
                    />
                  </div>

                  {/* Stats Cards */}
                  <div className="dashboard-stats">
                    <motion.div
                      className="stat-card"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.5 }}
                    >
                      <div className="stat-icon stat-icon-1"></div>
                      <div className="stat-info">
                        <div className="stat-line"></div>
                        <div className="stat-line short"></div>
                      </div>
                    </motion.div>
                    <motion.div
                      className="stat-card"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.7 }}
                    >
                      <div className="stat-icon stat-icon-2"></div>
                      <div className="stat-info">
                        <div className="stat-line"></div>
                        <div className="stat-line short"></div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div
                className="floating-badge badge-1"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaRocket />
                <span>+350%</span>
              </motion.div>

              <motion.div
                className="floating-badge badge-2"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaStar />
                <span>5.0</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div
          className="scroll-mouse"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="scroll-wheel"></div>
        </motion.div>
        <p>Scroll to explore</p>
      </motion.div>
    </section>
  );
};

export default Hero;