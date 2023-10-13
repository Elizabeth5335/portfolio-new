import './App.css';
import NavMenu from './components/NavMenu'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Skills from './components/skills/Skills'
import Resume from './components/resume/Resume'
import Contact from './components/Contact'
import Portfolio from './components/portfolio/Portfolio';


function App() {
  return (
    <div className="App">
      <NavMenu language="ua"/>
      <HeroSection language="ua"/>
      <About language="ua"/>
      <Skills language="ua"/>
      <Resume />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
