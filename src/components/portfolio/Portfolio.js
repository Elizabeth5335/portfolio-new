import "../../styles/Portfolio.css";
import Details from "./Details";
import projects from "./projects.js";
import React from "react";
  import { ThemeContext } from "../../App";
import { useTranslation } from "react-i18next";
  
export default function Portfolio() {
  const { t, i18n } = useTranslation("global");


  const {theme, setTheme} = React.useContext(ThemeContext);

  const [selectedProject, setSelectedProject] = React.useState(null);

  const openDetails = (project) => {
    setSelectedProject(project);
  };

  const closeDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" data-theme={theme}>
      <div className="section-title">
        <span>{t("portfolio.portfolio")}</span>
        <h2>{t("portfolio.portfolio")}</h2>
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
              alt={t(project.name)}
              style={{ width: "100%" }}
            />
            <div className="image-text">{t(project.shortDesk)}</div>
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
