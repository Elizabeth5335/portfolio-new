import "../styles/Contact.css";
import myImg from "../assets/images/about-1.png";
import {
  faEnvelope,
  faPhone,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socials } from "../socials";

export default function Contact() {

  return (
    <section id="contact" className="contact">
      <div className="container glass m-auto">
        <div className="section-title contact-title">
          <span>Contact</span>
          <h2>Contact</h2>
        </div>
        <div className="row">
          <div className="col-lg-5 text-center">
            <img
              className="img-fluid contact-img pb-5 ps-5"
              src={myImg}
              alt=""
            />
          </div>
          <div className="col-lg-6 me-2">
            <div className="row">
              <div className="col-md-12">
                <div className="info-box">
                  <FontAwesomeIcon icon={faShareNodes} size="2x" />
                  <h3> Social Profiles </h3>
                  <div className="social-links">
                    {socials.map((social) => {
                      return (
                        <a
                          className="social-icon"
                          key={social.url}
                          href={social.url}
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={social.icon} size="2x" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                  <h3>E-mail</h3>
                  <p>
                    <a href="mailto:lazareva15elizaveta@gmail.com">
                      <br />
                      lazareva15elizaveta@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <FontAwesomeIcon icon={faPhone} size="2x" />
                  <h3>Phone </h3>
                  <p>
                    <a href="tel:+380991889215">+380 991 889 215</a>
                    <br />
                    <a href="tel:+48695178074">+48 695 178 074</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
