// import React from "react";
import "./styles/Skills.css";
import {skillsData} from "../skills";
function Skills() {


  return (
    <div className="skills-container">
      <h1 className="skills-title">Technical Skills</h1>
      <p className="skills-subtitle">My Technology Stack & Expertise</p>

      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <div key={index} className="skill-category-card">
            <div className="category-header">
              <div 
                className="category-icon" 
                style={{ color: category.color }}
              >
                {category.icon}
              </div>
              <h3 className="category-title">{category.category}</h3>
            </div>

            <div className="skills-list">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="skill-tag">
                  <span className="skill-dot" style={{ background: category.color }}></span>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;