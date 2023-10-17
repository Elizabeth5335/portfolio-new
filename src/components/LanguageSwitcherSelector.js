import React from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", name: "English" },
  { code: "ua", name: "Українська" },
  { code: "pl", name: "Polska" },
];

export default function LanguageSwitcherSelector() {
  const { t, i18n } = useTranslation("global");
  const language = i18n.language.split('-')[0];

  function handleChangeLanguage(e) {
    localStorage.setItem("lang", e.target.className);
    i18n.changeLanguage(e.target.className);
  }

  const options = languages.map((lang) => {
    if (lang.code != language) {
      return (
        <li key={lang.code} onClick={handleChangeLanguage}>
          <div value={lang.code} className={lang.code}></div>
        </li>
      );
    }
  });

  return (
    <div className="lang">
      <div className={language}></div>
      <ul className="dropdown">{options}</ul>
    </div>
  );
}
