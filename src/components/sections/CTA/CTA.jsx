import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaRocket, 
  FaArrowRight, 
  FaCheckCircle,
  FaChartLine,
  FaStar,
  FaUsers
} from 'react-icons/fa';
import Button from '../../common/Button/Button';
import { fadeIn, scaleIn } from '../../../animations/variants';
import './CTA.css';

/**
 * CTA Component - Multiple Variants
 * @param {string} variant - CTA style (primary, gradient, minimal, split, cards)
 * @param {string} title - Main heading
 * @param {string} description - Subheading/description
 * @param {string} primaryButtonText - Primary button text
 * @param {string} secondaryButtonText - Secondary button text (optional)
 * @param {function} onPrimaryClick - Primary button click handler
 * @param {function} onSecondaryClick - Secondary button click handler
 */
const CTA = ({
  variant = 'primary',
  title = 'Ready to Grow Your Business?',
  description = "Let's discuss how our digital marketing strategies can help you achieve your goals.",
  primaryButtonText = 'Get Started Free',
  secondaryButtonText = 'Schedule a Call',
  onPrimaryClick,
  onSecondaryClick,
  className = ''
}) => {
  // Render based on variant
  const renderCTA = () => {
    switch (variant) {
      case 'gradient':
        return <CTAGradient {...{ title, description, primaryButtonText, secondaryButtonText, onPrimaryClick, onSecondaryClick }} />;
      case 'minimal':
        return <CTAMinimal {...{ title, description, primaryButtonText, secondaryButtonText, onPrimaryClick, onSecondaryClick }} />;
      case 'split':
        return <CTASplit {...{ title, description, primaryButtonText, secondaryButtonText, onPrimaryClick, onSecondaryClick }} />;
      case 'cards':
        return <CTACards {...{ title, description, primaryButtonText, secondaryButtonText, onPrimaryClick, onSecondaryClick }} />;
      default:
        return <CTAPrimary {...{ title, description, primaryButtonText, secondaryButtonText, onPrimaryClick, onSecondaryClick }} />;
    }
  };

  return (
    <section className={`cta-section cta-${variant} ${className}`}>
      {renderCTA()}
    </section>
  );
};

// Primary CTA Variant
const CTAPrimary = ({ title, description, primaryButtonText, secondaryButtonText, onPrimaryClick, onSecondaryClick }) => {
  return (
    <div className="cta-container">
      <motion.div
        className="cta-primary"
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Background Elements */}
        <div className="cta-primary-bg">
          <div className="cta-circle cta-circle-1"></div>
          <div className="cta-circle cta-circle-2"></div>
          <div className="cta-circle cta-circle-3"></div>
        </div>

        {/* Content */}
        <div className="cta-content">
          <div className="cta-icon-wrapper">
            <FaRocket className="cta-icon" />
          </div>
          <h2 className="cta-title">{title}</h2>
          <p className="cta-description">{description}</p>
          <div className="cta-buttons">
            <Button
              variant="white"
              size="lg"
              onClick={onPrimaryClick}
              icon={<FaArrowRight />}
              iconPosition="right"
            >
              {primaryButtonText}
            </Button>
            {secondaryButtonText && (
              <Button
                variant="outline"
                size="lg"
                onClick={onSecondaryClick}
              >
                {secondaryButtonText}
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Gradient CTA Variant
const CTAGradient = ({ title, description, primaryButtonText, secondaryButtonText, onPrimaryClick, onSecondaryClick }) => {
  return (
    <div className="cta-container">
      <motion.div
        className="cta-gradient"
        variants={scaleIn(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Animated Background */}
        <div className="cta-gradient-bg">
          <div className="gradient-orb gradient-orb-1"></div>
          <div className="gradient-orb gradient-orb-2"></div>
          <div className="gradient-orb gradient-orb-3"></div>
        </div>

        <div className="cta-content-split">
          <div className="cta-text-content">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="cta-title">{title}</h2>
              <p className="cta-description">{description}</p>
            </motion.div>
          </div>
          <motion.div
            className="cta-button-group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button
              variant="white"
              size="lg"
              onClick={onPrimaryClick}
              icon={<FaRocket />}
              iconPosition="right"
            >
              {primaryButtonText}
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

// Minimal CTA Variant
const CTAMinimal = ({ title, description, primaryButtonText, onPrimaryClick }) => {
  return (
    <div className="cta-container">
      <motion.div
        className="cta-minimal"
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="cta-minimal-content">
          <div>
            <h3 className="cta-minimal-title">{title}</h3>
            <p className="cta-minimal-description">{description}</p>
          </div>
          <Button
            variant="primary"
            size="md"
            onClick={onPrimaryClick}
            icon={<FaArrowRight />}
            iconPosition="right"
          >
            {primaryButtonText}
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

// Split CTA Variant (Two Columns)
const CTASplit = ({ title, description, primaryButtonText, secondaryButtonText, onPrimaryClick, onSecondaryClick }) => {
  return (
    <div className="cta-container">
      <div className="cta-split-grid">
        <motion.div
          className="cta-split-card cta-split-primary"
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <FaRocket className="split-icon" />
          <h3 className="split-title">Start Your Project</h3>
          <p className="split-description">
            Ready to transform your digital presence? Let's get started today.
          </p>
          <Button
            variant="white"
            size="lg"
            fullWidth
            onClick={onPrimaryClick}
            icon={<FaArrowRight />}
            iconPosition="right"
          >
            {primaryButtonText}
          </Button>
        </motion.div>

        <motion.div
          className="cta-split-card cta-split-secondary"
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <FaChartLine className="split-icon" />
          <h3 className="split-title">Free Consultation</h3>
          <p className="split-description">
            Not sure where to begin? Book a free strategy session with our experts.
          </p>
          <Button
            variant="primary"
            size="lg"
            fullWidth
            onClick={onSecondaryClick}
          >
            {secondaryButtonText || 'Book a Call'}
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

// Cards CTA Variant (Three Feature Cards)
const CTACards = ({ onPrimaryClick }) => {
  const features = [
    {
      icon: <FaCheckCircle />,
      title: 'Proven Results',
      description: '500+ successful campaigns with measurable ROI'
    },
    {
      icon: <FaStar />,
      title: 'Expert Team',
      description: '15+ years of combined digital marketing experience'
    },
    {
      icon: <FaUsers />,
      title: 'Dedicated Support',
      description: '24/7 customer support and dedicated account manager'
    }
  ];

  return (
    <div className="cta-container">
      <motion.div
        className="cta-cards"
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="cta-cards-title">Why Choose Us?</h2>
        
        <div className="cta-cards-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="cta-feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="cta-cards-action"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={onPrimaryClick}
            icon={<FaRocket />}
            iconPosition="right"
          >
            Get Started Today
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CTA;