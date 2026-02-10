import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaRocket, 
  FaLightbulb, 
  FaUsers, 
  FaAward,
  FaLinkedinIn,
  FaTwitter,
  FaCheckCircle
} from 'react-icons/fa';
import { fadeIn, staggerContainer } from '../../animations/variants';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <AboutHero />
      
      {/* Mission Section */}
      <MissionSection />
      
      {/* Values Section */}
      <ValuesSection />
      
      {/* Team Section */}
      <TeamSection />
      
      {/* Timeline Section */}
      <TimelineSection />
      
      {/* Culture Section */}
      <CultureSection />
    </div>
  );
};

// About Hero
const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="about-hero-background">
        <div className="hero-gradient hero-gradient-1"></div>
        <div className="hero-gradient hero-gradient-2"></div>
      </div>
      
      <div className="about-hero-container">
        <motion.div
          className="about-hero-content"
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          animate="show"
        >
          <motion.span className="about-hero-subtitle" variants={fadeIn('down', 0.2)}>
            About Us
          </motion.span>
          <motion.h1 className="about-hero-title" variants={fadeIn('up', 0.3)}>
            Transforming Businesses Through
            <span className="gradient-text"> Digital Innovation</span>
          </motion.h1>
          <motion.p className="about-hero-description" variants={fadeIn('up', 0.4)}>
            We're a team of digital marketing experts passionate about helping 
            businesses grow through data-driven strategies and creative excellence.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

// Mission Section
const MissionSection = () => {
  return (
    <section className="about-mission">
      <div className="about-container">
        <div className="mission-grid">
          <motion.div
            className="mission-image-wrapper"
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="mission-image">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800" 
                alt="Team collaboration"
              />
            </div>
          </motion.div>
          
          <motion.div
            className="mission-content"
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="section-title">Our Mission</h2>
            <p className="mission-text">
              To empower businesses of all sizes with innovative digital marketing 
              solutions that drive measurable growth and lasting success.
            </p>
            <p className="mission-text">
              We believe in the power of data-driven strategies combined with 
              creative excellence to transform brands and create meaningful 
              connections with audiences.
            </p>
            
            <div className="mission-stats">
              <div className="mission-stat">
                <h3 className="gradient-text">15+</h3>
                <p>Years Experience</p>
              </div>
              <div className="mission-stat">
                <h3 className="gradient-text">500+</h3>
                <p>Projects Delivered</p>
              </div>
              <div className="mission-stat">
                <h3 className="gradient-text">98%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Values Section
const ValuesSection = () => {
  const values = [
    {
      icon: <FaRocket />,
      title: 'Innovation First',
      description: 'We stay ahead of digital trends to deliver cutting-edge solutions.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Creative Excellence',
      description: 'Every campaign is crafted with creativity and attention to detail.'
    },
    {
      icon: <FaUsers />,
      title: 'Client-Centric',
      description: 'Your success is our success. We treat your business as our own.'
    },
    {
      icon: <FaAward />,
      title: 'Results Driven',
      description: 'We focus on measurable outcomes and transparent reporting.'
    }
  ];

  return (
    <section className="about-values">
      <div className="about-container">
        <motion.div
          className="values-header"
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-description">
            These principles guide everything we do and define who we are.
          </p>
        </motion.div>
        
        <div className="values-grid">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="value-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="value-icon">{value.icon}</div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Team Section
const TeamSection = () => {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Strategy',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Creative Director',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'David Kim',
      role: 'Head of Analytics',
      image: 'https://randomuser.me/api/portraits/men/46.jpg',
      linkedin: '#',
      twitter: '#'
    }
  ];

  return (
    <section className="about-team">
      <div className="about-container">
        <motion.div
          className="team-header"
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="section-title">Meet Our Leadership Team</h2>
          <p className="section-description">
            Experienced professionals dedicated to your success.
          </p>
        </motion.div>
        
        <div className="team-grid">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="team-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="team-image-wrapper">
                <img src={member.image} alt={member.name} className="team-image" />
                <div className="team-social">
                  <a href={member.linkedin} className="team-social-link">
                    <FaLinkedinIn />
                  </a>
                  <a href={member.twitter} className="team-social-link">
                    <FaTwitter />
                  </a>
                </div>
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Timeline Section
const TimelineSection = () => {
  const milestones = [
    { year: '2010', title: 'Company Founded', description: 'Started with a vision to transform digital marketing' },
    { year: '2013', title: 'Reached 100 Clients', description: 'Expanded our team and service offerings' },
    { year: '2016', title: 'Award Recognition', description: 'Named Best Digital Marketing Agency' },
    { year: '2020', title: 'Global Expansion', description: 'Opened offices in 5 countries' },
    { year: '2024', title: '500+ Success Stories', description: 'Celebrating continued growth and innovation' }
  ];

  return (
    <section className="about-timeline">
      <div className="about-container">
        <motion.div
          className="timeline-header"
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="section-title">Our Journey</h2>
          <p className="section-description">
            Milestones that shaped who we are today.
          </p>
        </motion.div>
        
        <div className="timeline">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="timeline-content">
                <span className="timeline-year">{milestone.year}</span>
                <h3 className="timeline-title">{milestone.title}</h3>
                <p className="timeline-description">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Culture Section
const CultureSection = () => {
  const perks = [
    'Remote-first culture',
    'Competitive salary',
    'Health insurance',
    'Learning budget',
    'Flexible hours',
    'Team retreats'
  ];

  return (
    <section className="about-culture">
      <div className="about-container">
        <div className="culture-grid">
          <motion.div
            className="culture-content"
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="section-title">Join Our Team</h2>
            <p className="culture-text">
              We're always looking for talented individuals who share our passion 
              for digital marketing excellence.
            </p>
            <div className="culture-perks">
              {perks.map((perk, index) => (
                <div key={index} className="culture-perk">
                  <FaCheckCircle className="perk-icon" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="culture-image-wrapper"
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="culture-image">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800" 
                alt="Team culture"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;