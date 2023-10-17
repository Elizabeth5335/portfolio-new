import "../../styles/Skills.css";
import yii2 from "../../assets/images/yii2.png";
import yii2Dark from "../../assets/images/yii2-dark.png";
import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import CodeBlock from "./CodeBlock";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faBootstrap,
  faCss3Alt,
  faFigma,
  faGithub,
  faHtml5,
  faJs,
  faPhp,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../../App";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t, i18n } = useTranslation("global");

  const { theme, setTheme } = React.useContext(ThemeContext);

  const icons = [
    faHtml5,
    faCss3Alt,
    faSass,
    faBootstrap,
    faJs,
    faReact,
    faAngular,
    faGithub,
    faFigma,
    faDatabase,
    faPhp,
  ];
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <section id="skills" data-theme={theme}>
      <div className="section-title skills-title">
        <span>{t("skills")}</span>
        <h2>{t("skills")}</h2>
      </div>
      <div ref={ref} className="row skills-row">
        <motion.div
          className="col-12"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {icons.map((icon) => (
            <h1 key={icon.icon}>
              <FontAwesomeIcon icon={icon} />
            </h1>
          ))}
          <div className="" id="yii">
            <img src={theme === "dark" ? yii2Dark : yii2} alt="" />
          </div>
        </motion.div>
      </div>
      <CodeBlock />
    </section>
  );
}
