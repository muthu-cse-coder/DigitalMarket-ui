// import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   FaFacebookF, 
//   FaTwitter, 
//   FaInstagram, 
//   FaLinkedinIn, 
//   FaYoutube,
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt
// } from 'react-icons/fa';
// import { COMPANY_INFO, NAV_LINKS, SERVICES } from '../../utils/constants';
// import { fadeIn } from '../../animations/variants';
// import './Footer.css';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const socialLinks = [
//     { icon: <FaFacebookF />, url: '#', label: 'Facebook' },
//     { icon: <FaTwitter />, url: '#', label: 'Twitter' },
//     { icon: <FaInstagram />, url: '#', label: 'Instagram' },
//     { icon: <FaLinkedinIn />, url: '#', label: 'LinkedIn' },
//     { icon: <FaYoutube />, url: '#', label: 'YouTube' },
//   ];

//   return (
//     <footer className="footer">
//       {/* Main Footer Content */}
//       <div className="footer-content">
//         <div className="footer-container">
//           {/* Company Info Column */}
//           <motion.div
//             className="footer-column"
//             variants={fadeIn('up', 0.1)}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//           >
//             <h3 className="footer-logo gradient-text">{COMPANY_INFO.name}</h3>
//             <p className="footer-description">{COMPANY_INFO.tagline}</p>
            
//             {/* Social Links */}
//             <div className="footer-social">
//               {socialLinks.map((social, index) => (
//                 <motion.a
//                   key={index}
//                   href={social.url}
//                   className="footer-social-link"
//                   aria-label={social.label}
//                   whileHover={{ scale: 1.1, y: -3 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   {social.icon}
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>

//           {/* Quick Links Column */}
//           <motion.div
//             className="footer-column"
//             variants={fadeIn('up', 0.2)}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//           >
//             <h4 className="footer-heading">Quick Links</h4>
//             <ul className="footer-links">
//               {NAV_LINKS.map((link) => (
//                 <li key={link.id}>
//                   <a href={link.path} className="footer-link">
//                     {link.title}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Services Column */}
//           <motion.div
//             className="footer-column"
//             variants={fadeIn('up', 0.3)}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//           >
//             <h4 className="footer-heading">Services</h4>
//             <ul className="footer-links">
//               {SERVICES.slice(0, 5).map((service) => (
//                 <li key={service.id}>
//                   <a href="/services" className="footer-link">
//                     {service.shortTitle}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Contact Column */}
//           <motion.div
//             className="footer-column"
//             variants={fadeIn('up', 0.4)}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//           >
//             <h4 className="footer-heading">Contact Us</h4>
//             <ul className="footer-contact">
//               <li>
//                 <FaEnvelope className="footer-contact-icon" />
//                 <a href={`mailto:${COMPANY_INFO.email}`} className="footer-contact-link">
//                   {COMPANY_INFO.email}
//                 </a>
//               </li>
//               <li>
//                 <FaPhone className="footer-contact-icon" />
//                 <a href={`tel:${COMPANY_INFO.phone}`} className="footer-contact-link">
//                   {COMPANY_INFO.phone}
//                 </a>
//               </li>
//               <li>
//                 <FaMapMarkerAlt className="footer-contact-icon" />
//                 <span className="footer-contact-text">
//                   {COMPANY_INFO.address}
//                 </span>
//               </li>
//             </ul>
//           </motion.div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <motion.div
//         className="footer-bottom"
//         variants={fadeIn('up', 0.5)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//       >
//         <div className="footer-bottom-container">
//           <p className="footer-copyright">
//             © {currentYear} {COMPANY_INFO.name}. All rights reserved.
//           </p>
//           <div className="footer-bottom-links">
//             <a href="/privacy" className="footer-bottom-link">
//               Privacy Policy
//             </a>
//             <span className="footer-divider">•</span>
//             <a href="/terms" className="footer-bottom-link">
//               Terms of Service
//             </a>
//             <span className="footer-divider">•</span>
//             <a href="/cookies" className="footer-bottom-link">
//               Cookie Policy
//             </a>
//           </div>
//         </div>
//       </motion.div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { COMPANY_INFO, NAV_LINKS, SERVICES } from '../../utils/constants';
import { fadeIn } from '../../animations/variants';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaFacebookF />, url: '#', label: 'Facebook' },
    { icon: <FaTwitter />, url: '#', label: 'Twitter' },
    { icon: <FaInstagram />, url: '#', label: 'Instagram' },
    { icon: <FaLinkedinIn />, url: '#', label: 'LinkedIn' },
    { icon: <FaYoutube />, url: '#', label: 'YouTube' },
  ];

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-content">
        <div className="footer-container">
          {/* Company Info Column */}
          <motion.div
            className="footer-column"
            variants={fadeIn('up', 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="footer-logo gradient-text">{COMPANY_INFO.name}</h3>
            <p className="footer-description">{COMPANY_INFO.tagline}</p>
            
            {/* Social Links */}
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className="footer-social-link"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            className="footer-column"
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <Link to={link.path} className="footer-link">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Column */}
          <motion.div
            className="footer-column"
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link to="/services" className="footer-link">
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            className="footer-column"
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <FaEnvelope className="footer-contact-icon" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="footer-contact-link">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li>
                <FaPhone className="footer-contact-icon" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="footer-contact-link">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li>
                <FaMapMarkerAlt className="footer-contact-icon" />
                <span className="footer-contact-text">
                  {COMPANY_INFO.address}
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        className="footer-bottom"
        variants={fadeIn('up', 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="footer-bottom-container">
          <p className="footer-copyright">
            © {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="/privacy" className="footer-bottom-link">
              Privacy Policy
            </a>
            <span className="footer-divider">•</span>
            <a href="/terms" className="footer-bottom-link">
              Terms of Service
            </a>
            <span className="footer-divider">•</span>
            <a href="/cookies" className="footer-bottom-link">
              Cookie Policy
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;