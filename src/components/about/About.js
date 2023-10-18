import "../../styles/About.css";
import { ThemeContext } from "../../ThemeContext";
import React from "react";
import SectionTitle from "../SectionTitle";
import AboutDescription from "./AboutDescription";
import AboutList from "./AboutList";
import MyParticle from "./MyParticle";

export default function About() {

  const { theme } = React.useContext(ThemeContext);

  return (
    <section id="about" data-theme={theme}>
      <div className="about-content">
        <SectionTitle title="about.about" customClass="about-title" />

        <div className="row container main-row m-auto about">
          <div className="col-12 col-lg-8 mb-auto">
            <AboutDescription />
            <AboutList />
          </div>
          <MyParticle />
        </div>
      </div>
    </section>
  );
}
