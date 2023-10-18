import React from "react";
import { useTranslation } from "react-i18next";

export default function Details(props) {
  const { name, url, shortDesk, description, technologies, link, gitHub } =
    props;

  const { t } = useTranslation("global");

  return (
    <div className="details">
      <div className="close" onClick={props.closeDetails}>
        <h1>X</h1>
      </div>
      <h1 className="details-title">{t(name)}</h1>
      <span className="short-deskription">{t(shortDesk)}</span>
      <div>
        <img src={url} alt={t(name)} className="img-fluid" />
      </div>
      <h2>{t("portfolio.about")}</h2>
      <p>{t(description)}</p>
      <p>
        {t("portfolio.repo")}
        <a href={gitHub} target="_blank">
          {gitHub}
        </a>
      </p>

      <h2>{t("portfolio.technologies")}</h2>
      <div className="row">
      {technologies &&
        technologies.map((technology) => (
          <span key={technology} className="technology col-4">
            {technology}
          </span>
        ))}
      </div>
      <h2>{t("portfolio.website")}</h2>
      <a href={link} target="_blank">
        {link}
      </a>
    </div>
  );
}
