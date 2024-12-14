import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

const Navbars = () => {
    const linkClass = ({ isActive }) => 
        isActive 
          ? "link-text" 
          : "hero-text";

    return (
        <div className="container-lg">
            <div className='row justify-content-center'>
                <header className="py-2 fixed-top rounded main-navbar  col-md-8 text-center mt-3">
                    <ul className="nav nav-pills bg-transparent justify-content-around">
                        <li className="nav-item li-item col-3">
                            <NavLink to="#skills" className={linkClass}>
                                Skills
                            </NavLink>
                        </li>
                        <li className="nav-item li-item col-3">
                            <NavLink to="#project" className={linkClass}>
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-item li-item col-3">
                            <NavLink to="#contact" className={linkClass}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </header>
            </div>
        </div>
    );
}

export default Navbars;