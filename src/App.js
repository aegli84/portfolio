import React from 'react';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
import GlobalStyle from './GlobalStyles';
import NavbarPages from './components/NavbarPages';
import NavBurgerMenu from './components/NavBurgerMenu'

function App() {

  return (
    
    <div className="App">
      <GlobalStyle/>
      <NavbarPages/>
      
      <NavBurgerMenu/>
      <AboutSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <ContactSection/>
      <FooterSection/>
    </div>
  );
}

export default App;
