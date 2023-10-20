import React from 'react';
import "../styles/Footer.css";
import { ThemeContext } from "../ThemeContext";
import { useTranslation } from "react-i18next";

function Footer() {
    const { theme } = React.useContext(ThemeContext);
    const { t } = useTranslation("global");

  const currentYear = new Date().getFullYear();

  return (
    <footer data-theme={theme}>
      <div className='text-center'>&copy; {currentYear} Yelyzaveta Lazarieva. All Rights Reserved</div>
    </footer>
  );
}

export default Footer;
