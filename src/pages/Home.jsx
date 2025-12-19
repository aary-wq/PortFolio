import { useState, useEffect } from "react";
import "./styles/Home.css";
import logo from "../assets/logoab.jpg";
// import { useNavigate } from "react-router-dom";

function Home() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  // const navigate = useNavigate();

  const roles = [
    "Full Stack Developer",
    "Building Scalable Systems",
    "Insight Driven Dashboards",
    "MERN Stack Developer",
    "Structured Data Solutions",
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
  
    let timeout;
  
    if (!isDeleting && charIndex < currentRole.length) {
      // TYPING
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 90);
  
    } else if (!isDeleting && charIndex === currentRole.length) {
      // PAUSE AFTER TYPING
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
  
    } else if (isDeleting && charIndex > 0) {
      // DELETING
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 40);
  
    } else if (isDeleting && charIndex === 0) {
      // MOVE TO NEXT WORD
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }
  
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentIndex]);
  

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Aary_bokil_VIT.pdf";
    link.download = "Aary_bokil_VIT.pdf";
    link.click();
  };

  return (
    <section className="home-container">
      <div className="background-glow"></div>

      <div className="floating-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <div className="content fade-in">
        <div className="logo-wrapper">
          <div className="logo-ring"></div>
          <div className="logo-circle">
            <img
              src={logo}
              alt="Aary Bokil Logo"
              className="logo"
            />
        </div>
        </div>

        <h1 className="title">
          <span className="greeting">Hi, I'm</span>
          <span className="name">Aary Bokil</span>
        </h1>

        <div className="typing">
          <span className="code-bracket">&lt;</span>
          <span className="typing-text">{displayText}</span>
          <span className="cursor">|</span>
          <span className="code-bracket">/&gt;</span>
        </div>

        <p className="description">
          I love building clean and intuitive web interfaces and crafting scalable,
          user-focused web applications.
        </p>

        <div className="button-group">
          <button className="btn primary" onClick={handleDownloadResume}>
            <svg className="btn-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download Resume
          </button>
          <button className="btn secondary" onClick={() => {
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}>
            <svg className="btn-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
