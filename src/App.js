import "./App.css";
import NavMenu from "./components/NavMenu";
import HeroSection from "./components/HeroSection";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Resume from "./components/resume/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/portfolio/Portfolio";
import { ThemeProvider } from "./ThemeContext";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/portfolio-new"
          element={
            <div className="App">
              <ThemeProvider>
                <NavMenu />
                <HeroSection />
                <About />
                <Skills />
                <Resume />
                <Portfolio />
                <Contact />
                <Footer />
              </ThemeProvider>
            </div>
          }
        />
        <Route
          path="*"
          element={
            <ThemeProvider>
              <NotFound />
            </ThemeProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
