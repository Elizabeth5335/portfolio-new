import "../../styles/Skills.css";
import React from "react";
import { ThemeContext } from "../../ThemeContext";
import CodeBlock from "./CodeBlock";
import SectionTitle from "../SectionTitle";
import SkillsList from "./SkillsList";

export default function Skills() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <section id="skills" data-theme={theme}>
      <div className="container">
        <SectionTitle title="skills" customClass="skills-title" />
        <SkillsList />
        <CodeBlock />
      </div>
    </section>
  );
}
