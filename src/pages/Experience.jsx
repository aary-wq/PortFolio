import React from "react";
import "./styles/Experience.css";
import { achievements, experiences , publications} from "../achievements";
import isih from "../assets/isih.jpg";
function Experience() {

  return (
    <div className="experience-container">
      <h1 className="experience-title">Experience & Achievements</h1>
      <p className="experience-subtitle">My Professional Journey</p>

      {/* Experience Section */}
      <section className="experience-section">
        <h2 className="section-heading">Professional Experience</h2>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="exp-logo">
                <img src={exp.logo} alt={exp.company} />
              </div>
              <div className="exp-content">
                <h3 className="exp-position">{exp.position}</h3>
                <h4 className="exp-company">{exp.company}</h4>
                <p className="exp-duration">{exp.duration}</p>
                <p className="exp-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-main-section">
        <h2 className="section-heading">Achievements & Competitions</h2>
        <div className="achievements-main-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon-wrapper">
                {achievement.icon}
              </div>
              <h3 className="achievement-competition">{achievement.competition}</h3>
              <div className="achievement-badge">{achievement.position}</div>
              <p className="achievement-description">{achievement.description}</p>
              <p className="achievement-year">{achievement.year}</p>
            </div>
          ))}
          {/* <div className="featured-image-card"> */}
            <div className="featured-image-wrapper">
                <img src={isih} alt="ISIH" className="featured-image" />
                <div className="featured-tag">#ISIH  TOP_40</div>
            {/* </div> */}
            </div>

        </div>
        
      </section>

      {/* Publications Section */}
      <section className="publications-section">
        <h2 className="section-heading">Publications</h2>
        <div className="publication-card">
          <div className="publication-icon">
            {publications.icon}
          </div>
          <div className="publication-content">
            <h3 className="publication-title">{publications.title}</h3>
            <p className="publication-description">{publications.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;