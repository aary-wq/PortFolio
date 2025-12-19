import React, { useState,useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import "./Navbar.css";
import logo from "../assets/logoab.jpg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (section) => {
    // If NOT on home page → go to home first
    if (location.pathname !== "/") {
      navigate("/");

      // Scroll after navigation completes
      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 600,
          offset: -70,
        });
      }, 300);
    } else {
      // Already on home page → just scroll
      scroller.scrollTo(section, {
        smooth: true,
        duration: 600,
        offset: -70,
      });
    }

    setIsOpen(false); 
  };

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="navbar-logo" onClick={() => handleNavClick("home")}>
        <img src={logo} alt="ICON Logo" className="logo-img" />
        <span className="logo-text">AARY BOKIL</span>
      </div>

      {/* Desktop Menu */}
      <nav className="navbar-links">
        <span className="nav-item" onClick={() => handleNavClick("home")}>
          Home
        </span>
        <span className="nav-item" onClick={() => handleNavClick("about")}>
          About
        </span>
        <span className="nav-item" onClick={() => handleNavClick("projects")}>
          Projects
        </span>
        <span className="nav-item" onClick={() => handleNavClick("experience")}>
          Experience
        </span>
        <span className="nav-item" onClick={() => handleNavClick("skills")}>
          Skills
        </span>
        <span className="nav-item" onClick={() => handleNavClick("education")}>
          Education
        </span>
        <span className="nav-item" onClick={() => handleNavClick("contact")}>
          Contact
        </span>
      </nav>

      {/* Mobile Hamburger */}
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="mobile-menu">
          <span className="mobile-item" onClick={() => handleNavClick("home")}>
            Home
          </span>
          <span className="mobile-item" onClick={() => handleNavClick("about")}>
            About
          </span>
          <span
            className="mobile-item"
            onClick={() => handleNavClick("projects")}
          >
            Projects
          </span>
          <span
            className="mobile-item"
            onClick={() => handleNavClick("experience")}
          >
            Experience
          </span>
          <span className="mobile-item" onClick={() => handleNavClick("skills")}>
            Skills
          </span>
          <span
            className="mobile-item"
            onClick={() => handleNavClick("education")}
          >
            Education
          </span>
          <span
            className="mobile-item"
            onClick={() => handleNavClick("contact")}
          >
            Contact
          </span>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
