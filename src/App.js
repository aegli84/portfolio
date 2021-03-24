import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import React from 'react';
import GlobalStyle from './components/GlobalStyles';
//import {Switch, Route} from 'react-router-dom';
import NavbarPages from './components/NavbarPages';


function App() {
  return (
    
    <div className="App">
      <GlobalStyle/>
      <NavbarPages/>
      <AboutSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <ContactSection/>
    </div>
  );
}

export default App;
