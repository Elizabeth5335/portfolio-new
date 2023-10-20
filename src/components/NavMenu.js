import React, { useContext, useEffect, useRef } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import mylogo from "../assets/images/mylogo.png";
import logoDark from "../assets/images/logo-dark.png";
import LanguageSwitcherSelector from "./LanguageSwitcherSelector";
import { ThemeContext } from "../ThemeContext";
import { useTranslation } from "react-i18next";
import "../styles/Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function NavMenu() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { t } = useTranslation("global");
  const navRef = useRef(null);
  const prevScrollY = useRef(0);

  const [expanded, setExpanded] = React.useState(false);

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
      expanded={expanded}
    >
      <Navbar.Brand className="">
        <img
          className="navbar-brand nav-logo ms-3"
          src={theme === "dark" ? mylogo : logoDark}
          alt="logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle
      className="my-auto"
        aria-controls="navbarSupportedContent"
        data-bs-toggle="collapse"
        onClick={() => setExpanded(expanded ? false : "expanded")}
      >
        <FontAwesomeIcon className="toggle-icon" icon={expanded ? faXmark : faBars} />
      </Navbar.Toggle>
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="mr-5">
          <Nav.Link
            className="nav-link scrollto"
            href="#about"
            onClick={() => setExpanded(false)}
          >
            {t("navigation.about")}
          </Nav.Link>
          <Nav.Link
            className="nav-link scrollto"
            href="#skills"
            onClick={() => setExpanded(false)}
          >
            {t("navigation.skills")}
          </Nav.Link>
          <Nav.Link
            className="nav-link scrollto"
            href="#resume"
            onClick={() => setExpanded(false)}
          >
            {t("navigation.resume")}
          </Nav.Link>
          <Nav.Link
            className="nav-link scrollto"
            href="#portfolio"
            onClick={() => setExpanded(false)}
          >
            {t("navigation.portfolio")}
          </Nav.Link>
          <Nav.Link
            className="nav-link scrollto"
            href="#contact"
            onClick={() => setExpanded(false)}
          >
            {t("navigation.contact")}
          </Nav.Link>
          <Nav.Link
            className="nav-link"
            onClick={() => {
              setTheme((prevTheme) =>
                prevTheme === "dark" ? "light" : "dark"
              );
            }}
          >
            {theme === "light" ? t("navigation.dark") : t("navigation.light")}{" "}
            {t("navigation.theme")}
          </Nav.Link>
          <LanguageSwitcherSelector />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
