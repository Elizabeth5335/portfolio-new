import "../../styles/Portfolio.css";
import Details from "./Details";
import code from "./projects-code.js";
import constructor from "./projects-constructor.js";
import React from "react";
import { ThemeContext } from "../../ThemeContext";
import { useTranslation } from "react-i18next";
import SectionTitle from "../SectionTitle";
import { Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard.js";

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

  const tabs = [
    { key: "constructor", label: "No-code", projects: constructor },
    { key: "code", label: "Frontend", projects: code },
  ];

  return (
    <section id="portfolio" data-theme={theme}>
      <SectionTitle title="portfolio.portfolio" customClass="" />

      <Container>
        <Tab.Container defaultActiveKey="constructor">
          <Nav variant="tabs">
            {tabs.map(({ key, label }) => {
              return (
                <Nav.Item>
                  <Nav.Link eventKey={key}>{label}</Nav.Link>
                </Nav.Item>
              );
            })}
          </Nav>

          <Tab.Content>
            {tabs.map(({ key, projects }) => (
              <Tab.Pane eventKey={key} key={key}>
                <div className="gallery">
                  {projects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      openDetails={openDetails}
                      t={t}
                    />
                  ))}
                </div>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>

        {selectedProject && (
          <>
            <div className="overlay"></div>

            <Details {...selectedProject} closeDetails={closeDetails} />
          </>
        )}
      </Container>
    </section>
  );
}
