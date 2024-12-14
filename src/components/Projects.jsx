import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Project.css'; 

const projects = [
  {
    id: 1,
    title: 'Laptops Online Shop',
    description: 'Online shop website  that allows you to reach customers worldwide and showcase your products.All functionalities are there including placing the order and tracking the order. The backend team is currently working on the app for it to fullstack',
    link:'https://kepler-laptops.vercel.app'
  },
  {
    id: 2,
    title: 'Website  Development Explained',
    description: ' Web development is the process of creating and maintaining websites and web applications. This website explains step by step the process and skills required for one to become a web developer',
    link:'https://topics-six.vercel.app'
  },
  {
    id: 3,
    title: 'StyleHub Fashions',
    description: 'Explores  meticulously curated collections for women, men, and kids, designed to elevate your wardrobe and express your unique personality.Exquisite clothing lines that cater to every occasion, from casual wear to elegant evening outfits',
    link:'https://style-hub-pi.vercel.app'
  },
  {
    id: 4,
    title: 'Dating Website',
    description: "This  website has transformed how people connect and form relationships, making it easier to find compatible partners in today's fast-paced world.You can meet people near you or even far away I have developed the frontend part while my team  is currently working on the backend",
    link:'https://cggals5.vercel.app'
  },
  {
    id: 5,
    title: 'Net Ninja book review',
    description: 'The Net Ninja series has gained significant popularity for its engaging and practical approach to web development. This review adverties the book by  covering the key aspects of the book, its strengths, and areas for improvement..',
    link:'https://net-ninja-book-fkef.vercel.app'
  },
];

const Projects = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 project-title">My Projects</h2>
      <div className="row">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="col-md-4 mb-4 "
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card shadow">
              <div className="card-body align-content-center">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.link} className="btn btn-primary" target="_blank">View Project</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;