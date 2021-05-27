import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar fixed-top navbar-expand-lg navbar-dark mydark-bg ${scrollPosition < 100 && "transparent"}`}>
      <div className="container-xs"> 
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={closeMobileMenu}
                to={"home-section"}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={closeMobileMenu}
                to={"aboutme-section"}
                smooth={true}
                offset={-50}
                duration={500}
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={closeMobileMenu}
                to={"projects-section"}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={closeMobileMenu}
                to={"renders-section"}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Renders
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={closeMobileMenu}
                to={"contact-section"}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
