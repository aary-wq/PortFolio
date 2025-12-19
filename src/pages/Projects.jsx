import React, { useState } from "react";
import "./styles/Projects.css";
import projectsData from "../projects.js";
import { ArrowRight, Globe, Brain, Cpu, Smartphone, Code, Grid3x3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter categories with icons
  const filters = [
    { name: "All", icon: <Grid3x3 size={20} />, projectIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
    { name: "Web Apps", icon: <Globe size={20} />, projectIds: [1, 2, 3, 4, 5, 6] },
    { name: "AI/ML & DS", icon: <Brain size={20} />, projectIds: [7, 1, 8] },
    { name: "Mobile Apps", icon: <Smartphone size={20} />, projectIds: [9] },
    { name: "IoT", icon: <Cpu size={20} />, projectIds: [10] },
    { name: "Low Level", icon: <Code size={20} />, projectIds: [11] }
  ];

  // Get filtered projects
  const getFilteredProjects = () => {
    const activeFilterObj = filters.find(f => f.name === activeFilter);
    return projectsData.filter(project => activeFilterObj.projectIds.includes(project.id));
  };

  const filteredProjects = getFilteredProjects();

  return (
    <div className="events-container">
      <h1 className="events-heading">My Projects</h1>

      {/* Filter Buttons */}
      <div className="filter-container">
        {filters.map((filter) => (
          <button
            key={filter.name}
            className={`filter-btn ${activeFilter === filter.name ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.name)}
          >
            {filter.icon}
            <span>{filter.name}</span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="events-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="event-card">
            <img
              src={project.image}
              alt={project.title}
              className="event-image"
            />
            <h3 className="event-title">{project.title}</h3>
            
            <p className="event-short-description">
              {project.description}
            </p>

            <div className="tech-stack-tags">
              {project.techStacks?.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="card-footer">
              <span className="event-date">{project.date}</span>
              <button 
                className="explore-btn"
                onClick={() => {
                  navigate(`/projects/${project.id}`);
                  window.scrollTo(0, 0);
                }}
              >
                Explore More
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* No Projects Message */}
      {filteredProjects.length === 0 && (
        <div className="no-projects">
          <p>No projects found in this category</p>
        </div>
      )}
    </div>
  );
}

export default Projects;