import React from 'react';
import Hero from '../../components/sections/Hero/Hero';
import Stats from '../../components/sections/Stats/Stats';
import Services from '../../components/sections/Services/Services';
import CTA from '../../components/sections/CTA/CTA';
import Portfolio from '../../components/sections/Portfolio/Portfolio';
import Testimonials from '../../components/sections/Testimonials/Testimonials';
import ContactForm from '../../components/sections/ContactForm/ContactForm';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      
      {/* CTA after Services - Gradient Variant */}
      <CTA 
        variant="gradient"
        title="Ready to Scale Your Business?"
        description="Join 500+ companies that have transformed their digital presence with our proven strategies."
        primaryButtonText="Start Your Journey"
      />
      
      <Portfolio />
      
      {/* CTA after Portfolio - Split Variant */}
      <CTA 
        variant="split"
        primaryButtonText="Start Your Project"
        secondaryButtonText="Book Free Consultation"
      />
      
      <Testimonials />
      
      {/* CTA after Testimonials - Cards Variant */}
      <CTA 
        variant="cards"
      />
      
      <ContactForm />
    </>
  );
};

export default HomePage;