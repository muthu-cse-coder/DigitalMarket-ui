// ===== FRAMER MOTION ANIMATION VARIANTS =====

// Fade In Animation
export const fadeIn = (direction = 'up', delay = 0) => {
  return {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

// Scale In Animation
export const scaleIn = (delay = 0) => {
  return {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 0.6,
        delay: delay,
        bounce: 0.3,
      },
    },
  };
};

// Slide In Animation
export const slideIn = (direction = 'left', delay = 0) => {
  return {
    hidden: {
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1,
        delay: delay,
        bounce: 0.25,
      },
    },
  };
};

// Stagger Container
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren,
      },
    },
  };
};

// Text Reveal Animation
export const textVariant = (delay = 0) => {
  return {
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

// Zoom In Animation
export const zoomIn = (delay = 0) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        delay: delay,
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };
};

// Rotate In Animation
export const rotateIn = (delay = 0) => {
  return {
    hidden: {
      rotate: -180,
      opacity: 0,
    },
    show: {
      rotate: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1,
        delay: delay,
      },
    },
  };
};

// Footer Reveal
export const footerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay: 0.2,
    },
  },
};

// Navbar Animation
export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.5,
    },
  },
};

// Hero Section Animation
export const heroVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
    },
  },
};

// Card Hover Animation
export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.05,
    y: -10,
    transition: {
      duration: 0.3,
      type: 'spring',
      stiffness: 300,
    },
  },
};

// Button Tap Animation
export const buttonTap = {
  scale: 0.95,
  transition: {
    duration: 0.1,
  },
};

// Page Transition
export const pageTransition = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    x: 200,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

// Parallax Effect
export const parallaxVariants = {
  initial: {
    y: 0,
  },
  animate: {
    y: [-20, 20],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    },
  },
};