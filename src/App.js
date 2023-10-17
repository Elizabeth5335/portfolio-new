import "./App.css";
import NavMenu from "./components/NavMenu";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/skills/Skills";
import Resume from "./components/resume/Resume";
import Contact from "./components/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import React, { useState, useEffect } from "react";

export const ThemeContext = React.createContext();
export const LanguageContext = React.createContext();

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });
  
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("lang") || "EN";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <LanguageContext.Provider value={{ language, setLanguage }}>
          <NavMenu />
          <HeroSection />
          <About />
          <Skills />
          <Resume />
          <Portfolio />
          <Contact />
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
