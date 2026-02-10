import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaSearch, 
  FaBullhorn, 
  FaHashtag, 
  FaPalette, 
  FaPenFancy, 
  FaChartLine,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';
import Card, { CardIcon, CardTitle, CardDescription } from '../../common/Card/Card';
import Button from '../../common/Button/Button';
import { SERVICES } from '../../../utils/constants';
import { fadeIn, staggerContainer, scaleIn } from '../../../animations/variants';
import './Services.css';

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  // Get service icon based on title
  const getServiceIcon = (title) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('seo')) return <FaSearch />;
    if (lowerTitle.includes('ppc') || lowerTitle.includes('advertising')) return <FaBullhorn />;
    if (lowerTitle.includes('social')) return <FaHashtag />;
    if (lowerTitle.includes('brand') || lowerTitle.includes('design')) return <FaPalette />;
    if (lowerTitle.includes('content')) return <FaPenFancy />;
    if (lowerTitle.includes('performance')) return <FaChartLine />;
    return <FaChartLine />;
  };

  return (
    <section className="services-section" id="services">
      {/* Background Pattern */}
      <div className="services-pattern">
        <div className="pattern-dot"></div>
        <div className="pattern-dot"></div>
        <div className="pattern-dot"></div>
        <div className="pattern-dot"></div>
      </div>

      <div className="services-container">
        {/* Section Header */}
        <motion.div
          className="services-header"
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="services-subtitle">What We Offer</span>
          <h2 className="services-title">
            Comprehensive Digital Marketing
            <span className="gradient-text"> Solutions</span>
          </h2>
          <p className="services-description">
            From strategy to execution, we provide end-to-end digital marketing 
            services designed to grow your business and maximize ROI.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="services-grid"
          variants={staggerContainer(0.15, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isActive={activeService === service.id}
              onToggle={() => setActiveService(
                activeService === service.id ? null : service.id
              )}
              icon={getServiceIcon(service.title)}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="services-cta"
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="services-cta-content">
            <h3>Ready to Grow Your Business?</h3>
            <p>Let's discuss how our services can help you achieve your goals.</p>
          </div>
          <Button 
            variant="primary" 
            size="lg"
            icon={<FaArrowRight />}
            iconPosition="right"
          >
            Get Free Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

// Service Card Component
const ServiceCard = ({ service, index, isActive, onToggle, icon }) => {
  return (
    <motion.div
      className="service-card-wrapper"
      variants={scaleIn(index * 0.1)}
    >
      <Card 
        variant="default" 
        hoverable={true}
        className="service-card"
      >
        {/* Card Icon */}
        <CardIcon variant="primary" className="service-icon">
          {icon}
        </CardIcon>

        {/* Card Title */}
        <CardTitle className="service-title">
          {service.shortTitle}
        </CardTitle>

        {/* Card Description */}
        <CardDescription className="service-description">
          {service.description}
        </CardDescription>

        {/* Features List - Expandable */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              className="service-features"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="service-features-list">
                {service.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <FaCheckCircle className="feature-check" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Card Footer */}
        <div className="service-footer">
          <button 
            className="service-toggle-btn"
            onClick={onToggle}
          >
            {isActive ? 'Show Less' : 'Learn More'}
            <motion.span
              className="toggle-icon"
              animate={{ rotate: isActive ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              ▼
            </motion.span>
          </button>
        </div>

        {/* Hover Glow Effect */}
        <div className="service-card-glow"></div>
      </Card>
    </motion.div>
  );
};

export default Services;