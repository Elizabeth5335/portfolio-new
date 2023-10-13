import "../../styles/Portfolio.css";
import Details from "./Details";
import projects from "./projects.js";
import React from "react";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = React.useState(null);

  const openDetails = (project) => {
    setSelectedProject(project);
  };

  const closeDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio">
      <div className="section-title">
        <span>Portfolio</span>
        <h2>Portfolio</h2>
      </div>
      <div className="gallery">
        {projects.map((project) => (
          <div
            className="gallery-image"
            onClick={() => openDetails(project)}
            key={project.id}
          >
            <div className="image-overlay"></div>
            <img
              src={project.url}
              alt={project.name}
              style={{ width: "100%" }}
            />
            <div className="image-text">Text to Display</div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <>
          <div className="overlay"></div>

          <Details
            name={selectedProject.name}
            url={selectedProject.url}
            shortDesk={selectedProject.shortDesk}
            description={selectedProject.description}
            technologies={selectedProject.technologies}
            link={selectedProject.link}
            gitHub={selectedProject.gitHub}
            closeDetails={closeDetails}
          />
        </>
      )}
    </section>
  );
}
