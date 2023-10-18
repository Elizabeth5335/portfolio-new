import cat from "../assets/images/cat.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/NotFound.css";

import { socials } from "../socials";
import { ThemeContext } from "../ThemeContext";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function NotFound() {
  const { t } = useTranslation("global");

  const { theme } = React.useContext(ThemeContext);

  return (
    <div id="not-found" className="" data-theme={theme}>
      <div className="row container not-found-container mx-auto">
        <div className="col-12 col-lg-6 my-auto text-center">
          <h1 className="error">404</h1>
          <h2 className="oops mb-3">{t("notFound.Oops")}</h2>
          <h4 className="message mb-5">{t("notFound.notExist")}</h4>
          <Link className="home-btn" to="/">
            {t("notFound.home")}
          </Link>

          <div className="not-found-socials mt-5 mx-auto">
            {socials.map((social) => {
              return (
                <a
                  className="not-found-social-icon"
                  key={social.url}
                  href={social.url}
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={social.icon}
                    size="2x"
                    alt={social.icon}
                  />
                </a>
              );
            })}
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <a
            href="https://www.youtube.com/watch?v=sHWEc-yxfb4&ab_channel=Simon%27sCat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="not-found-image" src={cat} alt="Simon's Cat" />
          </a>
        </div>
      </div>
    </div>
  );
}
