import blobLeft from "../assets/images/blob-left.png";
import hero from "../assets/images/hero.png";
import "../styles/Hero.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { socials } from "../socials";
import { ThemeContext } from "../ThemeContext";
import React from "react";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t, i18n } = useTranslation("global");

  const { theme, setTheme } = React.useContext(ThemeContext);

  const scroll = () => {
    const section = document.querySelector("#contact");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div data-theme={theme}>
      <img className="blob-left" src={blobLeft} alt="" />
      <section id="hero" className="container row m-auto">
        <div className="col-12 col-md-5 order-md-2">
          <img className=" img-fluid" src={hero} alt="Yelyzaveta Lazarieva" />
        </div>
        <div className="col-12 col-md-7 p-3 order-md-1">
          <h2>{t("hero.hello")}!</h2>
          <h1 className="mb-5">
            {t("hero.I")}
            <span className="typing"> {t("hero.Yelyzaveta")}</span>
          </h1>
          <p>{t("hero.description")}</p>
          <div className="socials">
            {socials.map((social) => {
              return (
                <a
                  className="social-icon"
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
          <div className="row">
            <button className="col-12 col-sm-5 button cv-button mb-3">
              {t("hero.download")}
            </button>
            <button
              className="col-12 col-sm-5 button hire-button mb-3"
              onClick={scroll}
            >
              {t("hero.hire")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
