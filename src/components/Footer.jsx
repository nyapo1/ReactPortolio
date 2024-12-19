import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter,FaEnvelope, FaTelegram, FaWhatsapp } from 'react-icons/fa'; // Importing social media icons
import '../styles/Footer.css'
import { Link } from 'react-scroll';


const Footer = () => {
  return (
    <footer className="footer text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 my-3">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link 
                  to="skills" 
                  smooth={true} 
                  className="text-light"
                  duration={500} 
                  >
                  My Skills
              </Link>
              </li>
              <li>
              <Link 
                to="projects" 
                smooth={true} 
                duration={500} 
                className="text-light"
                >
                  Projects
              </Link>
                
              </li>
              <li>
              <Link 
                  to="contact" 
                  smooth={true} 
                  duration={500} 
                  className="text-light"
                >
                  Contact
              </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 my-3">
            <h5>Connect with Me</h5>
            <div>
                  <a 
                href="https://wa.me/+254 776 660808" 
                className="text-light me-3" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp  />
              </a>
              <a 
                href="https://t.me/Lyyne001" 
                className="text-light me-2" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                
                <FaTelegram />
              </a>
              <a href="https://www.linkedin.com/in/felix-nyapola" className="text-light me-3" target="_blank" rel="noopener noreferrer">
                <FaLinkedin  />
              </a>
              <a href="https://twitter.com/FelixNyapo" className="text-light" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="col-md-4 my-3 text-center">
            <h5>Contact</h5>
            <p><FaEnvelope/> Email: <a href="mailto:felixnyapo1@gmail.com" className="text-light">felixnyapo1@gmail.com</a></p>
          </div>
        </div>
        <hr className="text-light" />
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Felix Nyapola. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;