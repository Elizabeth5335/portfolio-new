import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../ThemeContext";
import SocialIcons from "../SocialIcons";
import blobLeft from "../assets/images/blob-left.png";
import hero from "../assets/images/hero.png";
import "../styles/Hero.css";

export default function HeroSection() {
  const { t } = useTranslation("global");
  const { theme } = React.useContext(ThemeContext);

  const scroll = () => {
    const section = document.querySelector("#contact");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const isMobile = window.innerWidth <= 992;

  return (
    <div data-theme={theme}>
      <Container id="hero" className="row m-auto">
        <Row>
          <Col md={5} className="order-md-2">
            <Image fluid src={hero} alt="Yelyzaveta Lazarieva" />
          </Col>
          <Col md={7} className="p-3 order-md-1">
            <h2>{t("hero.hello")}!</h2>
            <h1 className="mb-5">
              {t("hero.I")}
              <span className={`${!isMobile && "typing"} green`}>
                {" "}
                {t("hero.Yelyzaveta")}
              </span>
            </h1>
            <p>{t("hero.description")}</p>
            
            <div className="socials">
              <SocialIcons />
            </div>

            <Row className="hero-row">
              <a
                href="/CV_Yelyzaveta_Lazarieva.pdf"
                download
                className="col-12 col-sm-5 button text-center cv-button mb-3"
              >
                {t("hero.download")}
              </a>
              <Button
                className="col-12 col-sm-5 button hire-button mb-3"
                onClick={scroll}
              >
                {t("hero.hire")}
              </Button>
            </Row>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}