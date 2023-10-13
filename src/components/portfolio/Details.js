import React from "react";

export default function Details(props) {
  const { name, url, shortDesk, description, technologies, link, gitHub } =
    props;

  return (
    <div className="details" onClick={props.closeDetails}>
      <div className="close" onClick={props.closeDetails}>
        <h1>X</h1>
      </div>
      <h1 className="details-title">{name}</h1>
      <span className="short-deskription">{shortDesk}</span>
      <div>
        <img src={url} alt={name} className="img-fluid" />
      </div>
      <h2>About</h2>
      <p>{description}</p>
      <p>
        Link to repo:{" "}
        <a href={gitHub} target="_blank">
          {gitHub}
        </a>
      </p>

      <h2>Technologies</h2>
      {technologies &&
        technologies.map((technology) => (
          <span key={technology} className="technology">
            {technology}
          </span>
        ))}
      <h2>Website</h2>
      <a href={link} target="_blank">
        {link}
      </a>
    </div>
  );
}
