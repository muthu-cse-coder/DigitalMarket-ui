// ===== APP CONSTANTS =====

// Company Information
export const COMPANY_INFO = {
  name: 'DigitalPulse Agency',
  tagline: 'Transforming Ideas into Digital Success',
  email: 'hello@digitalpulse.com',
  phone: '+1 (555) 123-4567',
  address: '123 Marketing Street, Digital City, DC 12345',
};

// Navigation Links
export const NAV_LINKS = [
  { id: 'home', title: 'Home', path: '/' },
  { id: 'about', title: 'About', path: '/about' },
  { id: 'services', title: 'Services', path: '/services' },
  { id: 'portfolio', title: 'Portfolio', path: '/' }, // Portfolio is on homepage
  { id: 'contact', title: 'Contact', path: '/contact' },
];

// Services Data
export const SERVICES = [
  {
    id: 1,
    title: 'Search Engine Optimization',
    shortTitle: 'SEO',
    description: 'Boost your organic rankings and drive quality traffic to your website with our data-driven SEO strategies.',
    icon: '🎯',
    features: [
      'Keyword Research & Analysis',
      'On-Page Optimization',
      'Technical SEO Audit',
      'Link Building Strategy',
      'Content Optimization',
    ],
  },
  {
    id: 2,
    title: 'Pay-Per-Click Advertising',
    shortTitle: 'PPC',
    description: 'Maximize ROI with targeted PPC campaigns across Google Ads, Facebook, and other platforms.',
    icon: '💰',
    features: [
      'Google Ads Management',
      'Facebook & Instagram Ads',
      'Campaign Optimization',
      'A/B Testing',
      'Conversion Tracking',
    ],
  },
  {
    id: 3,
    title: 'Social Media Marketing',
    shortTitle: 'SMM',
    description: 'Build a strong social presence and engage your audience with creative social media strategies.',
    icon: '📱',
    features: [
      'Content Strategy',
      'Community Management',
      'Influencer Marketing',
      'Social Media Ads',
      'Analytics & Reporting',
    ],
  },
  {
    id: 4,
    title: 'Brand Identity & Design',
    shortTitle: 'Branding',
    description: 'Create a memorable brand identity that resonates with your target audience and stands out.',
    icon: '🎨',
    features: [
      'Logo Design',
      'Brand Guidelines',
      'Visual Identity',
      'Marketing Collateral',
      'Brand Strategy',
    ],
  },
  {
    id: 5,
    title: 'Content Marketing',
    shortTitle: 'Content',
    description: 'Engage and convert your audience with compelling content that tells your brand story.',
    icon: '✍️',
    features: [
      'Content Strategy',
      'Blog Writing',
      'Video Production',
      'Infographics',
      'Email Marketing',
    ],
  },
  {
    id: 6,
    title: 'Performance Marketing',
    shortTitle: 'Performance',
    description: 'Drive measurable results with performance-based marketing campaigns focused on conversions.',
    icon: '📊',
    features: [
      'Conversion Rate Optimization',
      'Marketing Analytics',
      'Growth Hacking',
      'Funnel Optimization',
      'ROI Tracking',
    ],
  },
];

// Stats Data
export const STATS = [
  {
    id: 1,
    number: '500+',
    label: 'Projects Completed',
    icon: '🚀',
  },
  {
    id: 2,
    number: '98%',
    label: 'Client Satisfaction',
    icon: '⭐',
  },
  {
    id: 3,
    number: '50+',
    label: 'Team Members',
    icon: '👥',
  },
  {
    id: 4,
    number: '15+',
    label: 'Years Experience',
    icon: '🏆',
  },
];

// Testimonials Data
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO, TechStart Inc.',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    rating: 5,
    text: 'Working with DigitalPulse has been a game-changer for our business. Their SEO strategies increased our organic traffic by 300% in just 6 months!',
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Marketing Director, GrowthCo',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    rating: 5,
    text: 'The team\'s expertise in PPC advertising helped us achieve a 250% ROI. They truly understand digital marketing and deliver results.',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    position: 'Founder, StyleHub',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    rating: 5,
    text: 'Their social media strategies transformed our brand presence. Engagement up 400% and sales following close behind. Highly recommend!',
  },
  {
    id: 4,
    name: 'David Kim',
    position: 'CMO, InnovateTech',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    rating: 5,
    text: 'Professional, creative, and results-driven. DigitalPulse Agency exceeded all our expectations and became a true partner in our growth.',
  },
];

// Portfolio/Case Studies Data
export const PORTFOLIO = [
  {
    id: 1,
    title: 'E-commerce Growth Strategy',
    client: 'FashionHub',
    category: 'SEO & Content Marketing',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    results: {
      traffic: '+350%',
      revenue: '+280%',
      conversion: '+45%',
    },
    description: 'Complete digital transformation for a leading fashion e-commerce brand.',
  },
  {
    id: 2,
    title: 'Tech Startup Launch',
    client: 'CloudSync',
    category: 'Full Digital Campaign',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    results: {
      leads: '+500%',
      awareness: '+420%',
      signups: '+380%',
    },
    description: 'Successful launch campaign for a SaaS startup entering a competitive market.',
  },
  {
    id: 3,
    title: 'Brand Revitalization',
    client: 'HealthPlus',
    category: 'Branding & Social Media',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800',
    results: {
      engagement: '+425%',
      followers: '+310%',
      sales: '+195%',
    },
    description: 'Complete brand refresh and social media strategy for healthcare provider.',
  },
  {
    id: 4,
    title: 'Local Business Domination',
    client: 'FoodieExpress',
    category: 'Local SEO & PPC',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800',
    results: {
      localRanking: '#1',
      orders: '+290%',
      roi: '+340%',
    },
    description: 'Local SEO and PPC campaign that dominated the food delivery market.',
  },
];

// Social Media Links
export const SOCIAL_LINKS = [
  { id: 1, name: 'Facebook', url: 'https://facebook.com', icon: 'FaFacebook' },
  { id: 2, name: 'Twitter', url: 'https://twitter.com', icon: 'FaTwitter' },
  { id: 3, name: 'Instagram', url: 'https://instagram.com', icon: 'FaInstagram' },
  { id: 4, name: 'LinkedIn', url: 'https://linkedin.com', icon: 'FaLinkedin' },
  { id: 5, name: 'YouTube', url: 'https://youtube.com', icon: 'FaYoutube' },
];

// Animation Durations
export const ANIMATION_DURATION = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
};