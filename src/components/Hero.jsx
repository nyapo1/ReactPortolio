import React from 'react';
import { motion } from 'framer-motion';
import '../index.css';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className='pt-4 text-center mt-5'
      initial='hidden'
      animate='visible'
      variants={containerVariants}
      transition={{ duration: 3 }}
    >
      <motion.h1 className='hero-text' variants={itemVariants} transition={{ duration: 0.5 }}>
        Hello there, I am <span className='span-text'>Felix Nyapola,</span>
      </motion.h1>
      <motion.h2 className='hero-text py-3' variants={itemVariants} transition={{ duration: 1 , delay:1.4}}>
        A passionate  <span className='span-text'>Front End web developer</span> focused on building dynamic and aesthetically appealing user interfaces.
      </motion.h2>
      <motion.button
        className='btn btn-secondary mt-3 view-btn'
        variants={itemVariants}
        transition={{ duration: 0.5 ,delay:2.1}}
      >
        View My Work
      </motion.button>
      <motion.h5 className='hero-text mt-4' variants={itemVariants} transition={{ duration: 1 , delay:2.8}} >
        Let's collaborate to bring your ideas to life!
      </motion.h5>
    </motion.div>
  );
}

export default Hero;