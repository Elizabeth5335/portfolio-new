import "../../styles/Portfolio.css";
import Details from "./Details";
import projects from "./projects.js";
import React from "react";
import { ThemeContext } from "../../ThemeContext";
import { useTranslation } from "react-i18next";
import SectionTitle from "../SectionTitle";
import { Container, Row } from "react-bootstrap";

export default function Portfolio() {
  const { t } = useTranslation("global");
  const { theme } = React.useContext(ThemeContext);

  const [selectedProject, setSelectedProject] = React.useState(null);

  const openDetails = (project, e) => {
    e.stopPropagation();
    setSelectedProject(project);
    document.body.classList.add("no-scroll");
  };

  const closeDetails = () => {
    setSelectedProject(null);
    document.body.classList.remove("no-scroll");
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectedProject) {
        if (!event.target.closest(".details")) {
          closeDetails();
        }
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [selectedProject]);

  return (
    <section id="portfolio" data-theme={theme}>
      <SectionTitle title="portfolio.portfolio" customClass="" />

      <Container>
        <div className="gallery">
          {projects.map((project) => (
            <div
              className="gallery-image"
              onClick={(e) => openDetails(project, e)}
              key={project.id}
            >
              <div className="image-overlay"></div>
              <img
                src={project.url}
                alt={t(project.name)}
                style={{ width: "100%" }}
              />
              <div className="image-text">
                <h4>{t(project.shortDesk)}</h4>
                <Row className="mt-4">
                  {project.technologies &&
                    project.technologies.map((technology) => (
                      <span key={technology} className="technology col-4">
                        {technology}
                      </span>
                    ))}
                </Row>
              </div>
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
      </Container>
    </section>
  );
}
