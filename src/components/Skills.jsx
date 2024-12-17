import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Skills.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
    initial={{ opacity: 0}}
    animate={isVisible ? { opacity: 1 } : { opacity: 0}}
    transition={{ duration: 0.8, delay: 0.7 }}
    className="skills-container mb-5" id="skills" ref={ref}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="skills-description"
      >
        As a front-end web developer, I have specialized and acquired the following skills which I utilize to create perfect user interfaces and websites.
      </motion.h2>
      <div className="row justify-content-center">

        <div className='col-md-3 col-8 all-skills'>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 ,delay:1}}
            className="skills-title"
          >
            My Skills:
          </motion.h3>

          <motion.ul
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="skills-list"
          >
            <li><FaHtml5 /> HTML</li>
            <li><FaCss3Alt /> CSS</li>
            <li><FaJsSquare /> JavaScript</li>
          </motion.ul>
        </div>

        <div className='col-md-3 col-8 all-skills'>
          <motion.h3
            initial={{ opacity: 0, y: -30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.8, delay: 1}}
            className="skills-frameworks"
          >
            Frameworks:
          </motion.h3>
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="skills-list"
          >
            <li><FaReact /> React.js</li>
            <li><SiTailwindcss /> Tailwind CSS</li>
            <li><FaBootstrap /> Bootstrap</li>
          </motion.ul>
        </div>

        <div className='col-md-3 col-8 all-skills'>
          <motion.h3
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="skills-extra"
          >
            Extra Skills:
          </motion.h3>
          <motion.ul
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="skills-list"
          >
            <li><FaGitAlt /> Git</li>
            <li><FaGithub /> GitHub</li>
            <li>Building responsive Designs</li>
          </motion.ul>
        </div>

      </div>
    </motion.div >
  );
};

export default Skills;