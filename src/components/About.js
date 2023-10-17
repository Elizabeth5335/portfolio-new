import "../styles/About.css";
import about from "../assets/images/about-bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Particles from "react-tsparticles";
import particlesConfig from "./particles-config";
import { loadFull } from "tsparticles";
import {ThemeContext} from "../ThemeContext";
import React from "react";
import { useTranslation } from "react-i18next";


export default function About(props) {
  const { t, i18n } = useTranslation("global");


  const {theme, setTheme} = React.useContext(ThemeContext);

  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <section id="about" data-theme={theme}>
      <div className="about-content">
        <div className="section-title about-title">
          <span>{t("about.about")}</span>
          <h2>{t("about.about")}</h2>
        </div>

        <div className="row container main-row m-auto about">
          <div className="col-12 col-lg-8 mb-auto">
            <p>
            {t("about.I-am")} <strong>{t("about.Frontend-developer")}</strong> {t("about.with-one-year")}
            </p>
            <p>
            {t("about.I-can")}
            </p>
            <p>{t("about.passion")}<em>React</em>{t("about.passion2")}</p>

            <div className="row">
              <div className="row">
                <div className="col-xxl-6">
                  <ul className="about-list">
                    <li>
                      <FontAwesomeIcon icon={faChevronRight} />
                      <strong> {t("about.Name")}: </strong>
                      <span>{t("about.Yelyzaveta")}</span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faChevronRight} />
                      <strong> {t("about.Website")}: </strong>
                      <a href="http://yelyzavetalazarieva.space/">
                        <span>http://yelyzavetalazarieva.space/</span>
                      </a>
                    </li>
                    <li>
                      <div className="row">
                        <div className="col-auto pe-1">
                          <FontAwesomeIcon icon={faChevronRight} />
                          <strong> {t("about.Phone")}: </strong>
                        </div>
                        <div className="col ps-0">
                          <a href="tel:+380991889215">
                            <span>+380 991 889 215</span>
                          </a>
                          <br />
                          <a href="tel:+48695178074">
                            <span>+48 695 178 074</span>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faChevronRight} />
                      <strong> E-mail: </strong>
                      <a href="mailto:lazareva15elizaveta@gmail.com">
                        <span>lazareva15elizaveta@gmail.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-xxl-6">
                  <ul className="about-list">
                    <li>
                      <FontAwesomeIcon icon={faChevronRight} />
                      <strong> {t("about.Birthday")}: </strong> <span>15.02.2002</span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faChevronRight} />
                      <strong> {t("about.Age")}:</strong> <span>21</span>
                    </li>
                    <li>
                      <div className="row">
                        <div className="col-auto pe-1">
                          <FontAwesomeIcon icon={faChevronRight} />
                          <strong>{t("about.City")}: </strong>
                        </div>
                        <div className="col ps-0">
                          <span>
                          {t("about.Kharkiv")}
                            <br />
                            {t("about.Łódź")}
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="education">
                      <FontAwesomeIcon icon={faChevronRight} />
                      <strong className="label">  {t("about.Education")}: </strong>
                      <span> {t("about.Karazin")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 particle-container col-lg-4">
            <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={particlesConfig}
            />
            <div className="text-center mt-3">
              <span>
              {t("about.antistress")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
