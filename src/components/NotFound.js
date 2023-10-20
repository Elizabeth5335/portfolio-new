import cat from "../assets/images/cat.png";
import "../styles/NotFound.css";

import { ThemeContext } from "../ThemeContext";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SocialIcons from "../SocialIcons";
import {Col, Container, Row} from "react-bootstrap"

export default function NotFound() {
  const { t } = useTranslation("global");

  const { theme } = React.useContext(ThemeContext);

  return (
    <div id="not-found" className="" data-theme={theme}>
      <Container >
        <Row className="not-found-container m-auto">
        <Col xs={12} lg={6} className="my-auto text-center">
          <h1 className="error">404</h1>
          <h2 className="oops mb-3">{t("notFound.Oops")}</h2>
          <h4 className="message mb-5">{t("notFound.notExist")}</h4>
          <Link className="home-btn" to="/portfolio-new">
            {t("notFound.home")}
          </Link>

          <div className="not-found-socials mt-5 mx-auto">
            <SocialIcons />
          </div>
        </Col>
        <Col xs={12} lg={6}>
          <a
            href="https://www.youtube.com/watch?v=sHWEc-yxfb4&ab_channel=Simon%27sCat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="not-found-image" src={cat} alt="Simon's Cat" />
          </a>
        </Col>
        </Row>
        
      </Container>
    </div>
  );
}
