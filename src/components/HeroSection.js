import blobLeft from "../assets/images/blob-left.png";
import hero from "../assets/images/hero.png";
import "../styles/Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { socials } from "../socials";

export default function HeroSection(props) {
  const scroll = () => {
    const section = document.querySelector( '#contact' );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };

  const language = props.language.toUpperCase() === "EN";
  return (
    <>      
      <img className="blob-left" src={blobLeft} alt="" />
      <section id="hero" className="container row m-auto">
      <div className="col-12 col-md-5 order-md-2">
        <img className=" img-fluid" src={hero} alt="Yelyzaveta Lazarieva" />
      </div>
      <div className="col-12 col-md-7 p-3 order-md-1">
        <h2>Hello!</h2>
        <h1 className="mb-5">
          I am
          <span className="typing"> Yelyzaveta Lazarieva</span>
        </h1>
        <p>
          I am a Frontend Developer with one year of commercial experience. I am
          in love with React and passionate about learning new technologies.
        </p>
        <div className="socials">
          {socials.map((social) => {
            return (
              <a className="social-icon" key={social.url} href={social.url} target="_blank">
                <FontAwesomeIcon icon={social.icon} size="2x" />
              </a>
            );
          })}
        </div>
        <div className="row">
        <button className="col-12 col-sm-5 button cv-button mb-3">Download CV</button>
        <button className="col-12 col-sm-5 button hire-button mb-3" onClick={scroll}>Hire me now</button>
        </div>
      </div>
      
    </section>
    </>
  );
}
