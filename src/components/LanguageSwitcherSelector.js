import React from "react";
import { useTranslation } from "react-i18next";
import Dropdown from "react-bootstrap/Dropdown";
import { ThemeContext } from "../ThemeContext";
import { Nav } from "react-bootstrap";

const languages = [
  { code: "en", name: "English" },
  { code: "uk", name: "Українська" },
  { code: "pl", name: "Polska" },
];

export default function LanguageSwitcherSelector() {

  const {theme} = React.useContext(ThemeContext)
  const { t, i18n } = useTranslation("global");
  const language = i18n.language.split("-")[0];

  function handleChangeLanguage(code) {
    localStorage.setItem("lang", code);
    i18n.changeLanguage(code);
  }

  const languageName = languages.find((lang) => lang.code === language)?.name;

  const languageOptions = languages
    .filter((lang) => lang.code !== language)
    .map((lang) => (
      <Dropdown.Item
        key={lang.code}
        onClick={() => handleChangeLanguage(lang.code)}
      >
        {lang.name}
      </Dropdown.Item>
    ));

  return (
    <div className="nav-link" id="lang-btn">
      <Dropdown className="lang">
      <Dropdown.Toggle variant={theme} id="language-dropdown">
        {languageName}
      </Dropdown.Toggle>
      <Dropdown.Menu>{languageOptions}</Dropdown.Menu>
    </Dropdown>
    </div>
  );
}
