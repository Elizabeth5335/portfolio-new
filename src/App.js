import "./App.css";
import NavMenu from "./components/NavMenu";
import HeroSection from "./components/HeroSection";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Resume from "./components/resume/Resume";
import Contact from "./components/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import { ThemeProvider } from './ThemeContext';

export default function App() {
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

