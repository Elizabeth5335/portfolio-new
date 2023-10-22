import { useTranslation } from "react-i18next";
import Particles from "react-tsparticles";
import particlesConfig from "../particles-config";
import { loadFull } from "tsparticles";
import React from "react";

export default function MyParticle() {
  const { t } = useTranslation("global");
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const isMobile = window.innerWidth <= 992;

  const particlesLoaded = (container) => {
    console.log(container);
  };

  function handleTouchMove(e) {
    e.preventDefault();
  }

  const ref = React.useRef(null);

  React.useEffect(() => {
    ref.current.addEventListener("touchmove", handleTouchMove);

    return () => {
      ref.current.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div ref={ref} className="col-12 particle-container col-lg-4">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
      />
      <div className="text-center mt-3">
        <span>{isMobile ? t("about.antistress-mobile") : t("about.antistress")}</span>
      </div>
    </div>
  );
}
