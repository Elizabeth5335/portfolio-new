import "../../styles/Skills.css";
import yii2 from "../../assets/images/yii2.png";
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

export default function Skills() {
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
    <section id="skills">
      <div className="section-title skills-title">
        <span>Skills</span>
        <h2>Skills</h2>
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
            <img src={yii2} />
          </div>
        </motion.div>
      </div>
      <CodeBlock />
    </section>
  );
}
