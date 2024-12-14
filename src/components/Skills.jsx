import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Skills.css'; // Import your CSS file for additional styling
import { FaHtml5, FaCss3Alt, FaJsSquare ,FaReact, FaBootstrap, FaGitAlt, FaGithub} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  return (
    <div className="skills-container my-5" id='#skills'>

      
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="skills-description"
      >
        As a front-end web developer, I have specialized and acquired the following skills which I utilize to create perfect user interfaces and websites.
      </motion.h2>
      <div className="row justify-content-center">

          <div className='col-md-3 col-8 all-skills'>
            <motion.h3
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="skills-title"
            >
              My Skills:
            </motion.h3>


            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="skills-list"
            >
              <li><FaHtml5/> HTML</li>
              <li><FaCss3Alt/> CSS</li>
              <li><FaJsSquare/> JavaScript</li>
            </motion.ul>
          </div>

          <div className='col-md-3 col-8 all-skills'>
            <motion.h3
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="skills-frameworks"
            >
              Frame works:
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="skills-list"
            >
              <li><FaReact/> React.js</li>
              <li><SiTailwindcss/> Tailwind CSS</li>
              <li><FaBootstrap/>  Bootstrap</li>
            </motion.ul>
          </div>
        
          <div className='col-md-3 col-8 all-skills'>
            <motion.h3
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="skills-extra"
            >
              Extra Skills:
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="skills-list"
            >
              <li> <FaGitAlt/> Git </li>
              <li> <FaGithub/>  GitHub</li>
              <li> Building responsive websites</li>
            </motion.ul>
          </div>

      </div>
 
    </div>
  );
}

export default Skills;