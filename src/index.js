import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/js/bootstrap.js"
import "./index.css";
import global_en from "./translations/en/global.json";
import global_ua from "./translations/ua/global.json";
import global_pl from "./translations/pl/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(HttpApi)
  .use(LanguageDetector)
  .init({
    interpolation: { escapeValue: false },
    supportedLngs: ["en", "uk", "pl"],
    nonExplicitSupportedLngs: true,
    resources: {
      en: { global: global_en },
      pl: { global: global_pl },
      uk: { global: global_ua },
    },
  });

  console.log(navigator.language);
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

reportWebVitals();
