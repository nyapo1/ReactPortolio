import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../index.css';

const Navbars = () => {

  return (
    <div className="parallax-content baner-content" id="home">
        <div className="container-sm">
            <header className="d-flex justify-content-center py-2 fixed-top  border border-secondary main-navbar row">
                <ul className="nav nav-pills bg-transparent   justify-content-center row">
                    <li className="nav-item li-item col-3">
                        <a href="#services" className="nav-link ">Projects</a>
                    </li>
                    <li className="nav-item li-item col-3">
                        <a href="#our-story" className="nav-link me-5 text-center">Experience</a>
                    </li>
                    <li className="nav-item li-item col-3">
                        <a href="#contact" className="nav-link text-center ms-3">Contact</a>
                    </li>
                </ul>
            </header>
        </div>
    </div>
);


}

export default Navbars;
