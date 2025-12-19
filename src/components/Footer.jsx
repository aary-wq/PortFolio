import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a
          href="https://github.com/aary-wq"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/aary-bokil-980911312"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bokilaary@gmail.com">
          <FaEnvelope />
        </a>
      </div>
      <p className="footer-text">
        &copy; {new Date().getFullYear()} Aary Bokil. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
