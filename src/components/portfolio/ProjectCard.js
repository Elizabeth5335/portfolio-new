import { Row } from "react-bootstrap";

export default function ProjectCard({ project, openDetails, t }) {
  
    return (
      <div className="gallery-image" onClick={(e) => openDetails(project, e)}>
        <div className="image-overlay"></div>
        <img src={project.url} alt={t(project.name)} style={{ width: "100%" }} />
        <div className="image-text">
          <h4>{t(project.shortDesk)}</h4>
          <Row className="mt-4">
            {project.technologies?.map((tech) => (
              <span key={tech} className="technology col-4">
                {tech}
              </span>
            ))}
          </Row>
        </div>
      </div>
    );
}