import React from "react";
import "./styles/Education.css";

function Education() {
  const educationData = [
    {
      degree: "B.Tech in Information Technology",
      institution: "Vishwakarma Institute of Technology, Pune",
      grade: "9.21 CGPA",
      duration: "2024 - 2027",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      ),
      color: "#38bdf8"
    },
    {
      degree: "Diploma in Computer Technology",
      institution: "Sou. Venutai Chavan Polytechnic, Pune",
      grade: "94.23%",
      duration: "2021 - 2024",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      ),
      color: "#a78bfa"
    },
    {
      degree: "10th Standard (SSC)",
      institution: "Versatile School, Pune",
      grade: "87.80%",
      duration: "2020 - 2021",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      ),
      color: "#f472b6"
    }
  ];

  return (
    <div className="education-container">
      <h1 className="education-title">Education and Learning</h1>
      <p className="education-subtitle" style={{
  textAlign: "center",
  fontSize: "1.2rem",
  color: "#94a3b8",
  marginBottom: "60px",
  fontWeight: 400,
}}>My Academic Journey</p>

      <div className="education-timeline">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card" style={{ "--accent-color": edu.color }}>
            
            <div className="card-content">
              <div className="card-icon" style={{ background: `${edu.color}15`, borderColor: `${edu.color}40` }}>
                {edu.icon}
              </div>

              <div className="card-details">
                <h3 className="degree-name">{edu.degree}</h3>
                <p className="institution-name">{edu.institution}</p>
                
                <div className="education-info">
                  <div className="info-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span className="grade-text"><b>{edu.grade}</b></span>
                  </div>
                  
                  <div className="info-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span className="duration-text"><b>{edu.duration}</b></span>
                  </div>
                </div>
              </div>

              <div className="card-badge" style={{ background: `${edu.color}20`, color: edu.color }}>
                {index === 0 ? "Current" : "Completed"}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Achievement Highlights */}
      <div className="achievements-section">
        <h2 className="achievements-title">Key Highlights</h2>
        <div className="achievements-grid">
          <div className="achievement-item">
            <div className="achievement-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            </div>
            <h4>Academic Excellence</h4>
            <p>Consistent high performance across all education levels</p>
          </div>

          <div className="achievement-item">
            <div className="achievement-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>
            <h4>Technical Skills</h4>
            <p>Strong foundation in computer science and programming</p>
          </div>

          <div className="achievement-item">
            <div className="achievement-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
            </div>
            <h4>Continuous Learning</h4>
            <p>Always exploring new technologies and methodologies</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;