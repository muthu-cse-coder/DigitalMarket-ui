import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/MainLayout';

// Import Pages
import HomePage from '../pages/Home/HomePage';
import About from '../pages/About/About';
import ServicesPage from '../pages/ServicesPage/ServicesPage';
import Contact from '../pages/Contact/Contact';

const AppRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </MainLayout>
  );
};

export default AppRoutes;