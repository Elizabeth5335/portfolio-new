import "../../styles/Skills.css";
import React from "react";
import { ThemeContext } from "../../ThemeContext";
import CodeBlock from "./CodeBlock";
import SectionTitle from "../SectionTitle";
import SkillsList from "./SkillsList";
import { Container } from "react-bootstrap"

export default function Skills() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <section id="skills" data-theme={theme}>
      <Container>
        <SectionTitle title="skills" customClass="skills-title" />
        <SkillsList />
        <CodeBlock />
      </Container>
    </section>
  );
}
