import mylogo from "../assets/images/mylogo.png";
import React from "react";
import LanguageSwitcherSelector from "./LanguageSwitcherSelector";

export default function NavMenu() {
  const [language, setLanguage] = React.useState('en')

  function changeLanguageHandler(lang) {
    setLanguage(lang);
  }

  return (
    <nav id="header-nav" className="navbar navbar-expand-lg header-nav">
      <img className="navbar-brand nav-logo ms-3" src={mylogo} alt="logo" />
      <button
        className="navbar-toggler me-4"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-0">
          <li className="nav-item active">
            <a className="nav-link scrollto" href="#about">
              {language ? "About" : "Про мене"}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link scrollto" href="#skills">
              {language ? "Skills" : "Навички"}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link scrollto" href="#resume">
              {language ? "Resume" : "Резюме"}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link scrollto" href="#portfolio">
              {language ? "Portfolio" : "Портфоліо"}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link scrollto" href="#contact">
              {language ? "Contact" : "Контакти"}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link scrollto" href="">
              Dark theme
            </a>
          </li>
          <li className="nav-item">
            <LanguageSwitcherSelector
              lang={language}
              handleChangeLanguage={changeLanguageHandler}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}
