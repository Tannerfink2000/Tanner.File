import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
  
    return (
        <header>
            <h1>Your Name</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/resume" className={location.pathname === "/resume" ? "nav-link active" : "nav-link"}>
                            Resume
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
