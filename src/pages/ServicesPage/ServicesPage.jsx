import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaSearch, 
  FaBullhorn, 
  FaHashtag, 
  FaPalette, 
  FaPenFancy, 
  FaChartLine,
  FaCheckCircle,
  FaArrowRight
} from 'react-icons/fa';
import { SERVICES } from '../../utils/constants';
import Button from '../../components/common/Button/Button';
import { fadeIn, scaleIn } from '../../animations/variants';
import './ServicesPage.css';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(0);

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
    <div className="services-page">
      {/* Hero Section */}
      <ServicesHero />
      
      {/* Services Overview */}
      <ServicesOverview />
      
      {/* Detailed Services */}
      <section className="services-detailed">
        <div className="services-page-container">
          <motion.div
            className="services-detailed-header"
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="section-title">Our Services in Detail</h2>
            <p className="section-description">
              Explore our comprehensive range of digital marketing solutions.
            </p>
          </motion.div>

          <div className="services-detailed-content">
            {/* Services Sidebar */}
            <motion.div
              className="services-sidebar"
              variants={fadeIn('right', 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              {SERVICES.map((service, index) => (
                <button
                  key={service.id}
                  className={`service-nav-item ${activeService === index ? 'active' : ''}`}
                  onClick={() => setActiveService(index)}
                >
                  <div className="service-nav-icon">
                    {getServiceIcon(service.title)}
                  </div>
                  <span>{service.shortTitle}</span>
                </button>
              ))}
            </motion.div>

            {/* Service Detail */}
            <motion.div
              className="service-detail"
              key={activeService}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="service-detail-icon">
                {getServiceIcon(SERVICES[activeService].title)}
              </div>
              <h3 className="service-detail-title">
                {SERVICES[activeService].title}
              </h3>
              <p className="service-detail-description">
                {SERVICES[activeService].description}
              </p>

              <div className="service-features-detailed">
                <h4>What's Included:</h4>
                <ul className="features-list">
                  {SERVICES[activeService].features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <FaCheckCircle className="feature-check-icon" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="service-detail-cta">
                <Button
                  variant="primary"
                  size="lg"
                  icon={<FaArrowRight />}
                  iconPosition="right"
                >
                  Get Started with {SERVICES[activeService].shortTitle}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />
      
      {/* Why Choose Us */}
      <WhyChooseSection />
    </div>
  );
};

// Services Hero
const ServicesHero = () => {
  return (
    <section className="services-page-hero">
      <div className="services-hero-background">
        <div className="services-hero-gradient services-hero-gradient-1"></div>
        <div className="services-hero-gradient services-hero-gradient-2"></div>
      </div>
      
      <div className="services-page-container">
        <motion.div
          className="services-hero-content"
          initial="hidden"
          animate="show"
          variants={fadeIn('up', 0.2)}
        >
          <span className="services-hero-subtitle">Our Services</span>
          <h1 className="services-hero-title">
            Complete Digital Marketing
            <span className="gradient-text"> Solutions</span>
          </h1>
          <p className="services-hero-description">
            From strategy to execution, we provide end-to-end digital marketing 
            services designed to grow your business and maximize ROI.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Services Overview
const ServicesOverview = () => {
  const highlights = [
    { number: '6+', label: 'Core Services' },
    { number: '100%', label: 'Customized' },
    { number: '24/7', label: 'Support' },
    { number: '98%', label: 'Satisfaction' }
  ];

  return (
    <section className="services-overview">
      <div className="services-page-container">
        <div className="overview-grid">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="overview-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="gradient-text">{item.number}</h3>
              <p>{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Process Section
const ProcessSection = () => {
  const steps = [
    { title: 'Discovery', description: 'We analyze your business, goals, and target audience' },
    { title: 'Strategy', description: 'Custom roadmap tailored to your objectives' },
    { title: 'Execution', description: 'Implementation with best practices and tools' },
    { title: 'Optimization', description: 'Continuous improvement based on data' }
  ];

  return (
    <section className="services-process">
      <div className="services-page-container">
        <motion.div
          className="process-header"
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="section-title">Our Process</h2>
          <p className="section-description">
            A proven approach that delivers results.
          </p>
        </motion.div>

        <div className="process-steps">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="process-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="step-number">{index + 1}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Why Choose Section
const WhyChooseSection = () => {
  const reasons = [
    'Proven track record of success',
    'Experienced team of specialists',
    'Data-driven strategies',
    'Transparent reporting',
    'Dedicated account manager',
    'Flexible and scalable solutions'
  ];

  return (
    <section className="services-why-choose">
      <div className="services-page-container">
        <motion.div
          className="why-choose-content"
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="why-choose-list">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                className="why-choose-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <FaCheckCircle className="why-choose-icon" />
                <span>{reason}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPage;