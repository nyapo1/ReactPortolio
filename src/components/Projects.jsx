import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Project.css'; 

const projects = [
  {
    id: 1,
    title: 'iPhone Advertisment 3D website',
    description: "Discover the future of mobile technology with our immersive 3D iPhone advertisement website. Experience the sleek design and cutting-edge features of the latest iPhone models like never before. Navigate through a visually stunning, interactive 3D environment that showcases the phone's vibrant display",
    link: 'https://apple3d-alpha.vercel.app/'
  },
  {
    id: 2,
    title: 'Laptops Online Shop',
    description: 'Online shop website that allows you to reach customers worldwide and showcase your products. All functionalities are there including placing the order and tracking the order. The backend team is currently working on the app for it to be fullstack.',
    link: 'https://kepler-laptops.vercel.app'
  },

  {
    id: 3,
    title: 'StyleHub Fashions',
    description: 'Explores meticulously curated collections for women, men, and kids, designed to elevate your wardrobe and express your unique personality. Exquisite clothing lines that cater to every occasion, from casual wear to elegant evening outfits.',
    link: 'https://style-hub-pi.vercel.app'
  },
  {
    id: 4,
    title: 'Dating Website',
    description: "This website has transformed how people connect and form relationships, making it easier to find compatible partners in today's fast-paced world. You can meet people near you or even far away. I have developed the frontend part while my team is currently working on the backend.",
    link: 'https://cggals5.vercel.app'
  },
  {
    id: 5,
    title: 'Net Ninja Book Review',
    description: 'The Net Ninja series has gained significant popularity for its engaging and practical approach to web development. This review advertises the book by covering the key aspects of the book, its strengths, and areas for improvement.',
    link: 'https://net-ninja-book-fkef.vercel.app'
  },
];

const Projects = () => {
  const [visible, setVisible] = useState(false);
  const projectsRef = useRef(Array(projects.length).fill(null)); // Initialize an array with nulls

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false); // Reset visibility when out of view
        }
      });
    }, {
      threshold: 0, // Adjust as needed
    });

    // Observe each project
    projectsRef.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      // Cleanup: unobserve each project
      projectsRef.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="container my-5" id='projects'>
      <h2 className="text-center mb-4 project-title">My Projects</h2>
      <motion.div className="row">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            ref={el => (projectsRef.current[index] = el)} // Assign ref to current element
            className="col-md-4 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.08 }} // Scale up on hover
          >
            <div className="card shadow">
              <div className="card-body align-content-start">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;