import React from 'react';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
import GlobalStyle from './GlobalStyles';
import NavbarPages from './components/NavbarPages';
import NavBurgerMenu from './components/NavBurgerMenu'
import AnimatedCursor from "react-animated-cursor"
//import Curly from './components/Curly' 

function App() {

  return (
    
    <div className="App">
      <GlobalStyle/>
      <AnimatedCursor 
          innerSize={12}
          outerSize={12}
          color='128, 0, 128'
          outerAlpha={0.2}
          innerScale={1.5}
          outerScale={5}
          />
      <NavbarPages/>
      <NavBurgerMenu/> 
      <AboutSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <ContactSection/>
      <FooterSection />
    </div>
  );
}

export default App;
