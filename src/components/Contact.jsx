import React, { useEffect, useRef, useState } from 'react';
import '../styles/Contact.css';
import { FaEnvelope, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  // Accessing environment variables
  const serviceID = "service_l3rwzyk";
  const templateID = "template_fr2dd6m";
  const userID = "jUbvb3lp4oAEIOb8Z";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    
  
    const templateParams = {
       name:name,       // This will match {{name}}
      email:email,     // This will match {{email}}
      message:message, // This will match {{message}}
    };
    
    
    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        toast.success('Message sent successfully!');
      }, (err) => {
        toast.error('Failed to send message. Please try again.');
      });
  
    // Reset fields
    setName('');
    setEmail('');
    setMessage('');
  };

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
      threshold: 0.5, // Adjust as needed
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
      initial={{ opacity: 0, y: -30 }} // Start with opacity 0 and slightly down
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -30 }}
      transition={{ duration: 1.2 }}
      className="container my-5" ref={contactRef}
      id='contact'
    >
      <h2 className="text-center mb-4 contact-title">Contact Me</h2>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <form onSubmit={handleSubmit}>
            <div className="form-group my-2">
              <div className="input-group bg-secondary">
                <span className="input-group-text">
                  <label htmlFor="name" className="form-label"><FaUser /> Name:</label>
                </span>
                <input 
                  type="text" 
                  id="name" 
                  name='name'
                  className="form-control" 
                  placeholder="e.g. Mario Irene" 
                  required 
                  onChange={e => setName(e.target.value)}
                  value={name} // Controlled input
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
                  name='email'
                  id="email" 
                  className="form-control" 
                  placeholder="e.g. mario@example.com" 
                  required 
                  onChange={e => setEmail(e.target.value)}
                  value={email} // Controlled input
                />
              </div>
            </div>
            <div className="form-group">
              <textarea 
                className="form-control" 
                id="message" 
                rows="4" 
                type="text"
                name='message'
                placeholder="Your message" 
                required
                onChange={e => setMessage(e.target.value)}
                value={message} // Controlled input
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block my-4">Send Message</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </motion.div>
  );
};

export default Contact;