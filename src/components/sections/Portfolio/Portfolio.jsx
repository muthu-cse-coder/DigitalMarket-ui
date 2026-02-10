import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaArrowRight, 
  FaExternalLinkAlt,
  FaTrophy,
  FaChartLine,
  FaUsers,
  FaDollarSign
} from 'react-icons/fa';
import Card from '../../common/Card/Card';
import Button from '../../common/Button/Button';
import { PORTFOLIO } from '../../../utils/constants';
import { fadeIn, staggerContainer, scaleIn } from '../../../animations/variants';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(PORTFOLIO);

  // Get unique categories
  const categories = ['All', ...new Set(PORTFOLIO.map(project => project.category))];

  // Filter projects
  const handleFilter = (category) => {
    setActiveFilter(category);
    
    if (category === 'All') {
      setFilteredProjects(PORTFOLIO);
    } else {
      const filtered = PORTFOLIO.filter(project => project.category === category);
      setFilteredProjects(filtered);
    }
  };

  return (
    <section className="portfolio-section" id="portfolio">
      {/* Background Elements */}
      <div className="portfolio-background">
        <div className="portfolio-circle portfolio-circle-1"></div>
        <div className="portfolio-circle portfolio-circle-2"></div>
      </div>

      <div className="portfolio-container">
        {/* Section Header */}
        <motion.div
          className="portfolio-header"
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="portfolio-subtitle">Our Success Stories</span>
          <h2 className="portfolio-title">
            Real Results for
            <span className="gradient-text"> Real Businesses</span>
          </h2>
          <p className="portfolio-description">
            Discover how we've helped businesses across industries achieve 
            remarkable growth through strategic digital marketing campaigns.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="portfolio-filters"
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => handleFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="portfolio-grid"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <PortfolioCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="portfolio-view-more"
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Button 
            variant="outline" 
            size="lg"
            icon={<FaArrowRight />}
            iconPosition="right"
          >
            View All Case Studies
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

// Portfolio Card Component
const PortfolioCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Get result icon
  const getResultIcon = (key) => {
    if (key.toLowerCase().includes('traffic') || key.toLowerCase().includes('lead')) {
      return <FaUsers />;
    }
    if (key.toLowerCase().includes('revenue') || key.toLowerCase().includes('sales') || 
        key.toLowerCase().includes('roi') || key.toLowerCase().includes('order')) {
      return <FaDollarSign />;
    }
    if (key.toLowerCase().includes('conversion') || key.toLowerCase().includes('engagement') ||
        key.toLowerCase().includes('awareness') || key.toLowerCase().includes('follower') ||
        key.toLowerCase().includes('signup')) {
      return <FaChartLine />;
    }
    return <FaTrophy />;
  };

  return (
    <motion.div
      className="portfolio-card-wrapper"
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card variant="default" hoverable={false} className="portfolio-card">
        {/* Project Image */}
        <div className="portfolio-image-wrapper">
          <img 
            src={project.image} 
            alt={project.title}
            className="portfolio-image"
          />
          
          {/* Overlay */}
          <motion.div
            className="portfolio-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="portfolio-overlay-content"
              initial={{ y: 20 }}
              animate={{ y: isHovered ? 0 : 20 }}
              transition={{ duration: 0.3 }}
            >
              <Button 
                variant="white" 
                size="sm"
                icon={<FaExternalLinkAlt />}
                iconPosition="right"
              >
                View Case Study
              </Button>
            </motion.div>
          </motion.div>

          {/* Category Badge */}
          <div className="portfolio-category-badge">
            {project.category}
          </div>
        </div>

        {/* Project Info */}
        <div className="portfolio-info">
          {/* Title & Client */}
          <div className="portfolio-header-info">
            <h3 className="portfolio-card-title">{project.title}</h3>
            <p className="portfolio-client">{project.client}</p>
          </div>

          {/* Description */}
          <p className="portfolio-card-description">
            {project.description}
          </p>

          {/* Results */}
          <div className="portfolio-results">
            {Object.entries(project.results).map(([key, value], idx) => (
              <motion.div
                key={key}
                className="result-item"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="result-icon">
                  {getResultIcon(key)}
                </div>
                <div className="result-content">
                  <span className="result-value gradient-text">{value}</span>
                  <span className="result-label">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hover Shine Effect */}
        <div className="portfolio-card-shine"></div>
      </Card>
    </motion.div>
  );
};

export default Portfolio;