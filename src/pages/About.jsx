import React from "react";
import "./styles/About.css";

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>

      {/* Summary Section */}
      <div className="about-summary">
        <p className="summary-text">
          Passionate and self-driven student with strong interests in <span className="highlight-inline">coding</span>, 
          <span className="highlight-inline"> data science</span>, <span className="highlight-inline">Problem Solving</span>, and 
          <span className="highlight-inline"> software development</span>.
        </p>
        <p className="summary-text">
          Proficient in <span className="tech-badge">Full Stack</span>, <span className="tech-badge">MERN Stack</span>, 
          <span className="tech-badge"> Java</span>,
          <span className="tech-badge"> C/C++</span>, and 
          <span className="tech-badge"> Python</span>. Currently expanding into the <span className="highlight-inline"> Machine Learning</span> and 
          deepening my understanding of <span className="highlight-inline">DSA</span>.
        </p>
        <p className="summary-text">
          A fast learner and a good problem solver, enthusiastic about exploring new and innovative technologies.
        </p>
      </div>

      {/* Area of Expertise Section */}
      <section className="expertise-section">
        <h2 className="section-title">Area of Expertise</h2>
        
        <div className="expertise-grid">
          {/* Full Stack Development */}
          <div className="expertise-card">
            <div className="card-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3 className="card-title">Full Stack Development</h3>
            <p className="card-description">
              Building end-to-end web applications with modern frameworks, handling both client and server-side development 
              with responsive design and scalable architecture.
            </p>
            <div className="tech-stack">
              <span className="tech-tag">HTML</span>
              <span className="tech-tag">CSS</span>
              <span className="tech-tag">Database</span>
              <span className="tech-tag">Javascript</span>
              <span className="tech-tag">REST APIs</span>
            </div>
          </div>

          {/* MERN Stack Development */}
          <div className="expertise-card">
            <div className="card-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h3 className="card-title">MERN Stack Development</h3>
            <p className="card-description">
              Specialized in creating dynamic, interactive web applications using MongoDB, Express.js, React, and Node.js 
              with seamless integration and optimal performance.
            </p>
            <div className="tech-stack">
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">React.js</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Redux</span>
            </div>
          </div>

          {/* ML & Data Science */}
          <div className="expertise-card">
            <div className="card-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="20" x2="12" y2="10"></line>
                <line x1="18" y1="20" x2="18" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="16"></line>
              </svg>
            </div>
            <h3 className="card-title">ML & Data Science</h3>
            <p className="card-description">
              Implementing machine learning algorithms and data analysis techniques to extract insights, build predictive 
              models, and solve complex real-world problems.
            </p>
            <div className="tech-stack">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Pandas</span>
              <span className="tech-tag">NumPy</span>
              <span className="tech-tag">Scikit-learn</span>
              <span className="tech-tag">Power BI</span>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <h3 className="stat-number">15+</h3>
            <p className="stat-label">Projects Completed</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>
            <h3 className="stat-number">300+</h3>
            <p className="stat-label">Problems Solved</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3 className="stat-number">3+</h3>
            <p className="stat-label">Years Experience</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="stat-number">10+</h3>
            <p className="stat-label">Hackathon Participations</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;