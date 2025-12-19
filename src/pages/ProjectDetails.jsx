import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Github, Calendar, ArrowLeft } from "lucide-react";
import projectsData from "../projects";
import "./styles/ProjectDetails.css";

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = projectsData.find(p => p.id === Number(id));

  if (!project) {
    return <h2 style={{ color: "white", textAlign: "center", padding: "100px 20px" }}>Project Not Found</h2>;
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.extraImages.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.extraImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="project-details-container">
            <button
            className="back-button"
            onClick={() => {
                navigate("/");
                setTimeout(() => {
                const section = document.getElementById("projects");
                section?.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }}
            >
            <ArrowLeft size={20} />
            Back to Projects
            </button>



        <div className="project-details-content">
        <div className="project-meta-header">
        <div className="meta-left">
            <Calendar size={20} />
            <span style={{fontSize : "1rem"}}>{project.date}</span>
        </div>

        <a
            href={project.gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
        >
            <Github size={22} />
            View on GitHub
        </a>
        </div>

        {/* Project Title */}
        <h1 className="project-detail-title">{project.title}</h1>

        {/* Brief Description */}
        <section className="detail-section">
          <h2 className="section-title">About This Project</h2>
          <p className="brief-description">{project.breifDescription}</p>
        </section>

        {/* Features */}
      <section className="detail-section">
        <h2 className="section-title">Key Features</h2>

      <div className="features-grid">
        {project.features.map((feature, index) => {
          const featureTitle = Object.keys(feature)[0];
          const featureDesc = feature[featureTitle];

          return (
            <div key={index} className="feature-item">
              <div className="feature-icon">✓</div>

              <div>
                <h4 className="feature-title">{featureTitle}</h4>
                <p className="feature-description">{featureDesc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>


        {/* Image Slideshow */}
        <section className="detail-section">
          <h2 className="section-title">Project Gallery</h2>
          <div className="slideshow-container">
            <button className="slide-arrow left" onClick={handlePrevImage}>
              <ChevronLeft size={30} />
            </button>
            
            <div className="slideshow-image-wrapper">
              <img 
                src={project.extraImages[currentImageIndex]} 
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="slideshow-image"
              />
              <div className="image-counter">
                {currentImageIndex + 1} / {project.extraImages.length}
              </div>
            </div>

            <button className="slide-arrow right" onClick={handleNextImage}>
              <ChevronRight size={30} />
            </button>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="detail-section">
          <h2 className="section-title">Technology Stack</h2>
          
          {/* Frontend */}
          {project.breifTechStacks.Frontend?.length > 0 &&(<div className="tech-category">
            <h3 className="tech-category-title">Frontend</h3>
            <div className="tech-items">
            {project.breifTechStacks.Frontend.map((tech, index) => {
            const techName = Object.keys(tech)[0];
            const techLogo = tech[techName];

            return (
                <div key={index} className="tech-item">
                <img
                    src={techLogo}
                    alt={techName}
                    className="tech-logo"
                    loading="lazy"
                />
                <span className="tech-name">{techName}</span>
                </div>
            );
            })}

            </div>
          </div>
          )}
          {/* Backend */}
          {project.breifTechStacks.Backend?.length > 0 && (<div className="tech-category">
            <h3 className="tech-category-title">Backend</h3>
            <div className="tech-items">
            {project.breifTechStacks.Backend.map((tech, index) => {
        const techName = Object.keys(tech)[0];
        const techLogo = tech[techName];

        return (
            <div key={index} className="tech-item">
            <img
                src={techLogo}
                alt={techName}
                className="tech-logo"
                loading="lazy"
            />
            <span className="tech-name">{techName}</span>
            </div>
        );
        })}

            </div>
          </div>)}

          {/* Database */}
          {project.breifTechStacks.Database?.length > 0 && (<div className="tech-category">
            <h3 className="tech-category-title">Database & Storage</h3>
            <div className="tech-items">
          {project.breifTechStacks.Database.map((tech, index) => {
            const techName = Object.keys(tech)[0];
            const techLogo = tech[techName];

            return (
                <div key={index} className="tech-item">
                <img
                    src={techLogo}
                    alt={techName}
                    className="tech-logo"
                    loading="lazy"
                />
                <span className="tech-name">{techName}</span>
                </div>
            );
            })}

            </div>
          </div>
          )}
        </section>

      </div>
    </div>
  );
}

export default ProjectDetails;