import { useTranslation } from "react-i18next";
import Particles from "react-tsparticles";
import particlesConfig from "../particles-config";
import { loadFull } from "tsparticles";

export default function MyParticle() {
  const { t } = useTranslation("global");
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="col-12 particle-container col-lg-4">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
      />
      <div className="text-center mt-3">
        <span>{t("about.antistress")}</span>
      </div>
    </div>
  );
}
