import "../../styles/About.css";
import { ThemeContext } from "../../ThemeContext";
import React from "react";
import SectionTitle from "../SectionTitle";
import AboutDescription from "./AboutDescription";
import AboutList from "./AboutList";
import MyParticle from "./MyParticle";
import { Col, Container, Row } from "react-bootstrap";

export default function About() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <section id="about" data-theme={theme}>
      <div className="about-content">
        <SectionTitle title="about.about" customClass="about-title" />
        <Container>
          <Row className="main-row m-auto about">
            <Col xs={12} lg={8} className="mb-auto">
              <AboutDescription />
              <AboutList />
            </Col>
            <MyParticle />
          </Row>
        </Container>
      </div>
    </section>
  );
}
