import yii2 from "../../assets/images/yii2.png";
import yii2Dark from "../../assets/images/yii2-dark.png";
import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "./icons";
import { ThemeContext } from "../../ThemeContext";


export default function SkillsList() {
  const { theme } = React.useContext(ThemeContext);

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
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
  );
}
