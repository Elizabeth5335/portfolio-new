import "../styles/About.css";
import about from "../assets/images/about-bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Particles from "react-tsparticles";
import particlesConfig from "./particles-config";
import { loadFull } from "tsparticles";

export default function About(props) {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <section id="about">
      <div className="about-content">
        <div className="section-title">
          <span>About me</span>
          <h2>About me</h2>
        </div>

        <div className="row container main-row m-auto about">
          <div className="col-12 col-lg-8 mb-auto">
            <p>
              I am a result-driven <strong>Frontend developer</strong> with one
              year of commercial experience and a continuous four-year journey
              of learning and mastering the most widely used technologies and
              tools.
            </p>
            <p>
              I can create cross-browser adaptive websites from scratch using
              HTML, CSS (SASS), JS, Yii2, Bootstrap, Angular and React.
            </p>
            <p>Iam passionate about <em>React</em>, tea, foreign languages, anime, and cats</p>

            <div className="row">
              <div className="row">
                <div className="col-xxl-6">
                  <ul className="about-list">
                    <li>
                      <FontAwesomeIcon icon={faChevronRight} />
                      <strong> Name: </strong>
                      <span>Yelyzaveta Lazarieva</span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faChevronRight} />
                      <strong> Website: </strong>
                      <a href="http://yelyzavetalazarieva.space/">
                        <span>http://yelyzavetalazarieva.space/</span>
                      </a>
                    </li>
                    <li>
                      <div className="row">
                        <div className="col-auto pe-1">
                          <FontAwesomeIcon icon={faChevronRight} />
                          <strong> Phone: </strong>
                        </div>
                        <div className="col ps-0">
                          <a href="tel:+380991889215">
                            <span>+380 991 889 215</span>
                          </a>
                          <br />
                          <a href="tel:+48695178074">
                            <span>+48 695 178 074</span>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faChevronRight} />
                      <strong> E-mail: </strong>
                      <a href="mailto:lazareva15elizaveta@gmail.com">
                        <span>lazareva15elizaveta@gmail.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-xxl-6">
                  <ul className="about-list">
                    <li>
                      <FontAwesomeIcon icon={faChevronRight} />
                      <strong> Birthday: </strong> <span>15.02.2002</span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faChevronRight} />
                      <strong> Age:</strong> <span>21</span>
                    </li>
                    <li>
                      <div className="row">
                        <div className="col-auto pe-1">
                          <FontAwesomeIcon icon={faChevronRight} />
                          <strong>City: </strong>
                        </div>
                        <div className="col ps-0">
                          <span>
                            Kharkiv, Ukraine
                            <br />
                            Łódź, Poland
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="education">
                      <FontAwesomeIcon icon={faChevronRight} />
                      <strong className="label"> Education: </strong>
                      <span>V.N.Karazin Kharkiv National University</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 particle-container col-lg-4">
            <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={particlesConfig}
            />
            <div className="text-center mt-3">
              <span>
                  P.S. our life is quite stressfull, so here's antistress for
                  you (hover to interact)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
