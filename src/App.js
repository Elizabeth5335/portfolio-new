import "./App.css";
import NavMenu from "./components/NavMenu";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/skills/Skills";
import Resume from "./components/resume/Resume";
import Contact from "./components/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from './ThemeContext';

// export const ThemeContext = React.createContext();

function App() {
  return (
    <div className="App">
      <ThemeProvider>
          <NavMenu />
          <HeroSection />
          <About />
          <Skills />
          <Resume />
          <Portfolio />
          <Contact />
      </ThemeProvider>
    </div>
  );
}

export default App;
