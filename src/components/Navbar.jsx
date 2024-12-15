import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

const Navbars = () => {
   

    return (
        <div className="container-lg">
            <div className='row justify-content-center'>
                <header className="py-2 fixed-top rounded main-navbar  col-md-8 text-center mt-3">
                    <ul className="nav nav-pills bg-transparent justify-content-around">
                        <li className="nav-item li-item col-3 mt-2">
                            <NavLink to="#skills" className="fs-4">
                                Skills
                            </NavLink>
                        </li>
                        <li className="nav-item li-item col-3  mt-2">
                            <NavLink to="#project "   className="fs-4">
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-item li-item col-3  mt-2">
                            <NavLink to="#contact"   className="fs-4">
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