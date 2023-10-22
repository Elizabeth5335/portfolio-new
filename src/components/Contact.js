import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "./SectionTitle";
import { ThemeContext } from "../ThemeContext";
import myImg from "../assets/images/about-1.png";
import "../styles/Contact.css";
import SocialIcons from "../SocialIcons";
import {Col, Container, Row} from "react-bootstrap"

export default function Contact() {
  const { theme } = React.useContext(ThemeContext);
  const { t } = useTranslation("global");
  return (
    <section id="contact" className="contact" data-theme={theme}>
      <div className="container glass m-auto">
        <SectionTitle title={t("contact.contact")} customClass="contact-title"/>

        <Row>
          {theme === "light" && (
            <Col lg={5} className="text-center">
              <img
                className="img-fluid contact-img pb-5 ps-5"
                src={myImg}
                alt=""
              />
            </Col>
          )}
          <div className={`${theme === "dark" ? "col-12" : "col-lg-6"} me-2`}>
            <Row>
              <Col md={12}>
                <div className="info-box">
                  <FontAwesomeIcon icon={faShareNodes} size="2x" />
                  <h3> {t("contact.socials")} </h3>
                  <div className="social-links">
                    <SocialIcons />
                  </div>
                </div>
              </Col>
              
              <Col md={6}>
                <div className="info-box mt-4">
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                  <h3>E-mail</h3>
                  <p>
                    <a href="mailto:lazareva15elizaveta@gmail.com">
                      <br />
                      lazareva15elizaveta@gmail.com
                    </a>
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="info-box mt-4">
                  <FontAwesomeIcon icon={faPhone} size="2x" />
                  <h3>{t("contact.phone")} </h3>
                  <p>
                    <a href="tel:+380991889215">+380 991 889 215</a>
                    <br />
                    <a href="tel:+48695178074">+48 695 178 074</a>
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Row>
      </div>
    </section>
  );
}
