import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPaperPlane, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaCheckCircle
} from 'react-icons/fa';
import Input, { Textarea, Select } from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { COMPANY_INFO } from '../../../utils/constants';
import { fadeIn, scaleIn } from '../../../animations/variants';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Service options
  const serviceOptions = [
    { value: 'seo', label: 'SEO Services' },
    { value: 'ppc', label: 'PPC Advertising' },
    { value: 'social', label: 'Social Media Marketing' },
    { value: 'branding', label: 'Brand Identity & Design' },
    { value: 'content', label: 'Content Marketing' },
    { value: 'performance', label: 'Performance Marketing' },
    { value: 'other', label: 'Other Services' }
  ];

  // Budget options
  const budgetOptions = [
    { value: 'small', label: '$1,000 - $5,000' },
    { value: 'medium', label: '$5,000 - $10,000' },
    { value: 'large', label: '$10,000 - $25,000' },
    { value: 'enterprise', label: '$25,000+' }
  ];

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validate();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budget: '',
          message: ''
        });
      }, 3000);
    }, 2000);
  };

  return (
    <section className="contact-section" id="contact">
      {/* Background Elements */}
      <div className="contact-background">
        <div className="contact-shape contact-shape-1"></div>
        <div className="contact-shape contact-shape-2"></div>
        <div className="contact-grid-pattern"></div>
      </div>

      <div className="contact-container">
        {/* Section Header */}
        <motion.div
          className="contact-header"
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="contact-subtitle">Get In Touch</span>
          <h2 className="contact-title">
            Let's Start Your
            <span className="gradient-text"> Success Story</span>
          </h2>
          <p className="contact-description">
            Ready to take your digital marketing to the next level? 
            Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Form */}
          <motion.div
            className="contact-form-wrapper"
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <FaCheckCircle className="success-icon" />
                  <h4>Thank You!</h4>
                  <p>Your message has been sent successfully. We'll get back to you soon!</p>
                </motion.div>
              )}

              {/* Form Fields */}
              <div className={`form-fields ${isSubmitted ? 'hidden' : ''}`}>
                {/* Name & Email */}
                <div className="form-row">
                  <Input
                    type="text"
                    name="name"
                    label="Full Name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    label="Email Address"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    required
                    icon={<FaEnvelope />}
                  />
                </div>

                {/* Phone & Company */}
                <div className="form-row">
                  <Input
                    type="tel"
                    name="phone"
                    label="Phone Number"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange}
                    error={errors.phone}
                    required
                    icon={<FaPhone />}
                  />
                  <Input
                    type="text"
                    name="company"
                    label="Company Name"
                    placeholder="Your Company (Optional)"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                {/* Service & Budget */}
                <div className="form-row">
                  <Select
                    name="service"
                    label="Service Interested In"
                    value={formData.service}
                    onChange={handleChange}
                    error={errors.service}
                    required
                    options={serviceOptions}
                    placeholder="Select a service"
                  />
                  <Select
                    name="budget"
                    label="Budget Range"
                    value={formData.budget}
                    onChange={handleChange}
                    options={budgetOptions}
                    placeholder="Select your budget"
                  />
                </div>

                {/* Message */}
                <Textarea
                  name="message"
                  label="Your Message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                  required
                  rows={5}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  loading={isSubmitting}
                  icon={<FaPaperPlane />}
                  iconPosition="right"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="contact-info-wrapper"
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="contact-info-card">
              <h3>Contact Information</h3>
              <p className="contact-info-subtitle">
                We're here to help and answer any questions you might have.
              </p>

              {/* Contact Details */}
              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-detail-content">
                    <h5>Phone</h5>
                    <a href={`tel:${COMPANY_INFO.phone}`}>{COMPANY_INFO.phone}</a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-detail-content">
                    <h5>Email</h5>
                    <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-detail-content">
                    <h5>Address</h5>
                    <p>{COMPANY_INFO.address}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="contact-social">
                <h5>Follow Us</h5>
                <div className="contact-social-links">
                  <a href="#" className="social-link" aria-label="Facebook">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="social-link" aria-label="Twitter">
                    <FaTwitter />
                  </a>
                  <a href="#" className="social-link" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                  <a href="#" className="social-link" aria-label="LinkedIn">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="contact-info-decoration"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;