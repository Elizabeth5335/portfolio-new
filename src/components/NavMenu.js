import React, { useContext, useEffect, useRef } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import mylogo from "../assets/images/mylogo.png";
import logoDark from "../assets/images/logo-dark.png";
import LanguageSwitcherSelector from "./LanguageSwitcherSelector";
import { ThemeContext } from "../ThemeContext";
import { useTranslation } from "react-i18next";
import "../styles/Navigation.css";

export default function NavMenu() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { t } = useTranslation("global");
  const navRef = useRef(null);
  const prevScrollY = useRef(0);

const isMobile = window.innerWidth <= 992;

  useEffect(() => {
    if (!isMobile) {
      function handleScroll() {
        const currentScrollY = window.scrollY;

        if (prevScrollY.current < currentScrollY) {
          navRef.current.style.transform = "translateY(-200px)";
        } else {
          navRef.current.style.transform = "translateY(0)";
        }

        prevScrollY.current = currentScrollY;
      }

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);


  return (
    <Navbar
      ref={navRef}
      id="header-nav"
      className="header-nav"
      expand="lg"
      data-theme={theme}
    >
      <Navbar.Brand className="">
        <img className="navbar-brand nav-logo ms-3" src={theme === "dark" ? mylogo : logoDark} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="navbarSupportedContent"
        data-bs-toggle="collapse"
      />
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="mr-0">
          <Nav.Link className="nav-link scrollto" href="#about">
            {t("navigation.about")}
          </Nav.Link>
          <Nav.Link className="nav-link scrollto" href="#skills">
            {t("navigation.skills")}
          </Nav.Link>
          <Nav.Link className="nav-link scrollto" href="#resume">
            {t("navigation.resume")}
          </Nav.Link>
          <Nav.Link className="nav-link scrollto" href="#portfolio">
            {t("navigation.portfolio")}
          </Nav.Link>
          <Nav.Link className="nav-link scrollto" href="#contact">
            {t("navigation.contact")}
          </Nav.Link>
          <Nav.Link
            className="nav-link"
            onClick={() => {
              setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
            }}
          >
            {theme === "light" ? t("navigation.dark") : t("navigation.light")}{" "}
            {t("navigation.theme")}
          </Nav.Link>
          {/* <Nav.Link id="lang-btn"> */}
            <LanguageSwitcherSelector />
          {/* </Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
