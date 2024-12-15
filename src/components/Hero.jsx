import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import '../index.css';

const Hero = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset visibility if desired
        }
      },
      {
        threshold: 0.3, // Adjust as needed
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      className='pt-4 text-center hero-container'
      ref={ref}
      initial='hidden'
      animate={isVisible ? 'visible' : 'hidden'}
      variants={containerVariants}
      transition={{ duration: 3 }}
    >
      <motion.h1 className='hero-text' variants={itemVariants} transition={{ duration: 0.5 }}>
        Hello there, I am <span className='span-text'>Felix Nyapola,</span>
      </motion.h1>
      <motion.h2 className='hero-text py-3' variants={itemVariants} transition={{ duration: 1, delay: 1 }}>
        A passionate <span className='span-text'>Front End web developer</span> focused on building dynamic and aesthetically appealing user interfaces.
      </motion.h2>
      <motion.button
        className='btn btn-secondary mt-3 view-btn'
        variants={itemVariants}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        View My Work
      </motion.button>
      <motion.h5 className='hero-text mt-4' variants={itemVariants} transition={{ duration: 1, delay: 2 }}>
        Let's collaborate to bring your ideas to life!
      </motion.h5>
    </motion.div>
  );
};

export default Hero;