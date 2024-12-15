import React from 'react';
import '../styles/Contact.css'
import { FaEnvelope, FaUser } from 'react-icons/fa';


const Contact = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 contact-title">Contact Me</h2>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <form>
            <div className="form-group my-2">
            
            <div className="input-group">
              <span className="input-group-text">
              <label htmlFor="name" className="form-label"><FaUser/> Name:</label>
              </span>
              <input 
                type="text" 
                id="name" 
                className="form-control" 
                placeholder="e.g. Mario Irene" 
                required 
              />
              <span className="input-group-text" data-bs-toggle="tooltip" title="Enter an email address we can reply to.">
                <i className="bi bi-question-circle text-muted"></i>
              </span>
            </div>
            </div>
            <div className="form-group my-4">
            
            <div className="input-group">
              <span className="input-group-text">
              <label htmlFor="email" className="form-label"><FaEnvelope/> Email:</label>
              </span>
              <input 
                type="email" 
                id="email" 
                className="form-control" 
                placeholder="e.g. mario@example.com" 
                required 
              />
              <span className="input-group-text" data-bs-toggle="tooltip" title="Enter an email address we can reply to.">
                <i className="bi bi-question-circle text-muted"></i>
              </span>
            </div>
            </div>
         
            <div className="form-group">
              <textarea className="form-control" id="message" rows="4" placeholder="Your message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block my-4">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;