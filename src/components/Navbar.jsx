import React, { useEffect, useState } from 'react';
import '../index.css';
import { Link } from 'react-scroll';
import { FaLaptop } from 'react-icons/fa';

const Navbars = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is greater than 100vh (100 pixels)
      if (window.scrollY > window.innerHeight*0.7) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container-lg">
      <div className='row justify-content-center'>
        <header className={`py-2 fixed-top rounded main-navbar col-md-8 col-11 text-center mt-3 ${isVisible ? '' : 'd-none'}`}>
        <ul className="nav nav-pills bg-transparent justify-content-around align-items-center">
      <li className="nav-item li-item col-3 mt-2 ">
        <Link 
          to="skills" 
          smooth={true} 
          duration={500} 
          className={`fs-4 ${activeLink === 'skills' ? 'active-link' : 'inactive-link'} nav-links`}
          onClick={() => setActiveLink('skills')}
        >
          Skills
          <FaLaptop className='ms-2' size={15}/>
        </Link>
      </li>
      <li className="nav-item li-item col-3 mt-2">
        <Link 
          to="projects" 
          smooth={true} 
          duration={500} 
          className={`fs-4 ${activeLink === 'projects' ? 'active-link' : 'inactive-link'} nav-links`}
          onClick={() => setActiveLink('projects')}
        >
          Projects
        </Link>
      </li>
      <li className="nav-item li-item col-3 mt-2">
        <Link 
          to="contact" 
          smooth={true} 
          duration={500} 
          className={`fs-4 ${activeLink === 'contact' ? 'active-link' : 'inactive-link'} nav-links`}
          onClick={() => setActiveLink('contact')}
        >
          Contact
        </Link>
      </li>
    </ul>
        </header>
      </div>
    </div>
  );
}

export default Navbars;