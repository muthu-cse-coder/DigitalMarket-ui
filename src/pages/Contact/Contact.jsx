import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../../components/sections/ContactForm/ContactForm';
import { fadeIn } from '../../animations/variants';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <ContactHero />
      
      {/* Main Contact Section */}
      <ContactForm />
      
      {/* Map Section (Optional) */}
      <MapSection />
    </div>
  );
};

// Contact Hero
const ContactHero = () => {
  return (
    <section className="contact-page-hero">
      <div className="contact-page-hero-background">
        <div className="contact-page-hero-gradient contact-page-hero-gradient-1"></div>
        <div className="contact-page-hero-gradient contact-page-hero-gradient-2"></div>
      </div>
      
      <div className="contact-page-container">
        <motion.div
          className="contact-page-hero-content"
          initial="hidden"
          animate="show"
          variants={fadeIn('up', 0.2)}
        >
          <span className="contact-page-hero-subtitle">Get In Touch</span>
          <h1 className="contact-page-hero-title">
            Let's Talk About Your
            <span className="gradient-text"> Next Project</span>
          </h1>
          <p className="contact-page-hero-description">
            Have a question or ready to start your digital transformation? 
            We're here to help. Reach out and let's create something amazing together.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Map Section
const MapSection = () => {
  return (
    <section className="contact-map-section">
      <div className="contact-page-container">
        <motion.div
          className="map-header"
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="section-title">Visit Our Office</h2>
          <p className="section-description">
            Stop by our office for a coffee and chat about your project.
          </p>
        </motion.div>

        <motion.div
          className="map-wrapper"
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="map-placeholder">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648718453!2d-73.98784368459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '1.5rem' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>
        </motion.div>

        <motion.div
          className="office-hours"
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="office-hours-card">
            <h3>Office Hours</h3>
            <div className="hours-list">
              <div className="hours-item">
                <span className="day">Monday - Friday</span>
                <span className="time">9:00 AM - 6:00 PM</span>
              </div>
              <div className="hours-item">
                <span className="day">Saturday</span>
                <span className="time">10:00 AM - 4:00 PM</span>
              </div>
              <div className="hours-item">
                <span className="day">Sunday</span>
                <span className="time">Closed</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;