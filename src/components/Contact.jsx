import React, { useEffect, useRef, useState } from 'react';
import '../styles/Contact.css';
import { FaEnvelope, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset visibility when out of view
        }
      });
    }, {
      threshold: 0.3, // Adjust as needed
    });

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <motion.div
    initial={{ opacity: 0, y: 30 }} // Start with opacity 0 and slightly down
    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
    transition={{ duration: 1.2 }}
    className="container my-5" ref={contactRef}
  >
      <h2 className="text-center mb-4 contact-title">Contact Me</h2>
   
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <form>
              <div className="form-group my-2">
                <div className="input-group bg-secondary">
                  <span className="input-group-text">
                    <label htmlFor="name" className="form-label"><FaUser /> Name:</label>
                  </span>
                  <input 
                    type="text" 
                    id="name" 
                    className="form-control" 
                    placeholder="e.g. Mario Irene" 
                    required 
                  />
                </div>
              </div>
              <div className="form-group my-4">
                <div className="input-group">
                  <span className="input-group-text">
                    <label htmlFor="email" className="form-label"><FaEnvelope /> Email:</label>
                  </span>
                  <input 
                    type="email" 
                    id="email" 
                    className="form-control" 
                    placeholder="e.g. mario@example.com" 
                    required 
                  />
                </div>
              </div>
              <div className="form-group">
                <textarea className="form-control" id="message" rows="4" placeholder="Your message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block my-4">Send Message</button>
            </form>
          </div>
        </div>
      </motion.div>
  );
};

export default Contact;