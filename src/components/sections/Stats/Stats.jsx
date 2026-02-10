import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaRocket, 
  FaStar, 
  FaUsers, 
  FaTrophy,
  FaChartLine,
  FaAward
} from 'react-icons/fa';
import { STATS } from '../../../utils/constants';
import { fadeIn, staggerContainer, scaleIn } from '../../../animations/variants';
import './Stats.css';

const Stats = () => {
  return (
    <section className="stats-section">
      {/* Background Decoration */}
      <div className="stats-decoration">
        <div className="stats-blob stats-blob-1"></div>
        <div className="stats-blob stats-blob-2"></div>
      </div>

      <div className="stats-container">
        {/* Section Header */}
        <motion.div
          className="stats-header"
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="stats-subtitle">Our Track Record</span>
          <h2 className="stats-title">
            Numbers That Speak For
            <span className="gradient-text"> Themselves</span>
          </h2>
          <p className="stats-description">
            We've helped hundreds of businesses achieve their digital marketing 
            goals with measurable results and exceptional service.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="stats-grid"
          variants={staggerContainer(0.2, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {STATS.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="stats-info"
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="stats-info-card">
            <FaAward className="stats-info-icon" />
            <div className="stats-info-content">
              <h4>Award-Winning Agency</h4>
              <p>Recognized for excellence in digital marketing innovation</p>
            </div>
          </div>
          <div className="stats-info-card">
            <FaChartLine className="stats-info-icon" />
            <div className="stats-info-content">
              <h4>Data-Driven Results</h4>
              <p>Every strategy backed by analytics and performance metrics</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Stat Card Component with Counter Animation
const StatCard = ({ stat, index }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  // Extract number from string (e.g., "500+" => 500)
  const extractNumber = (str) => {
    const match = str.match(/\d+/);
    return match ? parseInt(match[0]) : 0;
  };

  // Get suffix from string (e.g., "500+" => "+", "98%" => "%")
  const getSuffix = (str) => {
    return str.replace(/\d+/g, '');
  };

  const targetNumber = extractNumber(stat.number);
  const suffix = getSuffix(stat.number);

  // Animate counter when in view
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = targetNumber / (duration / 16); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= targetNumber) {
          setCount(targetNumber);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, targetNumber]);

  // Get icon based on stat label
  const getIcon = () => {
    const label = stat.label.toLowerCase();
    if (label.includes('project')) return <FaRocket />;
    if (label.includes('satisfaction') || label.includes('client')) return <FaStar />;
    if (label.includes('team') || label.includes('member')) return <FaUsers />;
    if (label.includes('experience') || label.includes('year')) return <FaTrophy />;
    return <FaChartLine />;
  };

  return (
    <motion.div
      ref={ref}
      className="stat-card"
      variants={scaleIn(index * 0.1)}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
    >
      {/* Background Gradient */}
      <div className="stat-card-gradient"></div>

      {/* Icon */}
      <div className="stat-card-icon">
        {getIcon()}
      </div>

      {/* Number */}
      <div className="stat-card-number">
        <motion.span
          className="stat-number-value gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {count}{suffix}
        </motion.span>
      </div>

      {/* Label */}
      <p className="stat-card-label">{stat.label}</p>

      {/* Progress Bar */}
      <motion.div
        className="stat-card-progress"
        initial={{ width: 0 }}
        animate={isInView ? { width: '100%' } : {}}
        transition={{ duration: 1.5, delay: index * 0.1 }}
      >
        <div className="stat-card-progress-fill"></div>
      </motion.div>
    </motion.div>
  );
};

export default Stats;