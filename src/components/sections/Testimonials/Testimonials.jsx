import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaStar, 
  FaQuoteLeft, 
  FaChevronLeft, 
  FaChevronRight,
  FaStarHalfAlt
} from 'react-icons/fa';
import { TESTIMONIALS } from '../../../utils/constants';
import { fadeIn, scaleIn } from '../../../animations/variants';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  // Navigate to next testimonial
  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  // Navigate to previous testimonial
  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => 
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  // Go to specific testimonial
  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Slide variants for animations
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <section className="testimonials-section" id="testimonials">
      {/* Background Decoration */}
      <div className="testimonials-background">
        <div className="testimonials-gradient-1"></div>
        <div className="testimonials-gradient-2"></div>
      </div>

      <div className="testimonials-container">
        {/* Section Header */}
        <motion.div
          className="testimonials-header"
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="testimonials-subtitle">Client Success Stories</span>
          <h2 className="testimonials-title">
            What Our Clients
            <span className="gradient-text"> Say About Us</span>
          </h2>
          <p className="testimonials-description">
            Don't just take our word for it. Here's what our clients have to 
            say about their experience working with us.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          className="testimonials-slider"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          variants={scaleIn(0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Quote Icon */}
          <div className="quote-icon-wrapper">
            <FaQuoteLeft className="quote-icon" />
          </div>

          {/* Slider Content */}
          <div className="slider-content">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                className="testimonial-slide"
              >
                {/* Client Image */}
                <div className="client-image-wrapper">
                  <img 
                    src={TESTIMONIALS[currentIndex].image} 
                    alt={TESTIMONIALS[currentIndex].name}
                    className="client-image"
                  />
                  <div className="client-image-ring"></div>
                </div>

                {/* Rating Stars */}
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, index) => (
                    <FaStar 
                      key={index} 
                      className={index < TESTIMONIALS[currentIndex].rating ? 'star-filled' : 'star-empty'}
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="testimonial-text">
                  "{TESTIMONIALS[currentIndex].text}"
                </p>

                {/* Client Info */}
                <div className="client-info">
                  <h4 className="client-name">
                    {TESTIMONIALS[currentIndex].name}
                  </h4>
                  <p className="client-position">
                    {TESTIMONIALS[currentIndex].position}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button 
              className="slider-arrow slider-arrow-left"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>
            <button 
              className="slider-arrow slider-arrow-right"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Slider Dots */}
          <div className="slider-dots">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* All Testimonials Grid (Optional - shows all at once) */}
        <motion.div
          className="testimonials-grid"
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Testimonial Card Component (for grid view)
const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      className="testimonial-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Quote Icon */}
      <FaQuoteLeft className="card-quote-icon" />

      {/* Rating */}
      <div className="card-rating">
        {[...Array(5)].map((_, i) => (
          <FaStar 
            key={i} 
            className={i < testimonial.rating ? 'star-filled' : 'star-empty'}
          />
        ))}
      </div>

      {/* Text */}
      <p className="card-text">"{testimonial.text}"</p>

      {/* Client Info */}
      <div className="card-footer">
        <img 
          src={testimonial.image} 
          alt={testimonial.name}
          className="card-image"
        />
        <div className="card-client-info">
          <h5 className="card-name">{testimonial.name}</h5>
          <p className="card-position">{testimonial.position}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;