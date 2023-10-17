import mylogo from "../assets/images/mylogo.png";
import React from "react";
import LanguageSwitcherSelector from "./LanguageSwitcherSelector";
import { ThemeContext, LanguageContext } from "../App";
import { useTranslation } from "react-i18next";

export default function NavMenu() {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const { t, i18n } = useTranslation("global"); 
  return (
    <nav
      id="header-nav"
      className="navbar navbar-expand-lg header-nav"
      data-theme={theme}
    >
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
              {t("navigation.about")}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link scrollto" href="#skills">
              {t("navigation.skills")}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link scrollto" href="#resume">
              {t("navigation.resume")}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link scrollto" href="#portfolio">
              {t("navigation.portfolio")}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link scrollto" href="#contact">
              {t("navigation.contact")}
            </a>
          </li>
          <li className="nav-item">
            <div
              className="nav-link"
              onClick={() => {
                setTheme((prevTheme) =>
                  prevTheme === "dark" ? "light" : "dark"
                );
              }}
            >
              {theme === "light" ? t("navigation.dark") : t("navigation.light")}{" "}
              {t("navigation.theme")}
            </div>
          </li>
          <li className="nav-item">
            <LanguageSwitcherSelector />
          </li>
        </ul>
      </div>
    </nav>
  );
}
