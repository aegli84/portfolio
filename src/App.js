import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
import React from 'react';
import GlobalStyle from './GlobalStyles';
import {useLocation} from 'react-router-dom';
import NavbarPages from './components/NavbarPages';
import {motion} from 'framer-motion'
import {AnimatePresence} from 'framer-motion'

function App() {
//const location = useLocation(); //framer motion test

  return (
    
    <div className="App">
      <GlobalStyle/>
      <NavbarPages/>
      {/* <AnimatePresence > */}
        <AboutSection />
        <SkillsSection />
        <ProjectsSection/>
        <ContactSection/>
      {/* </AnimatePresence> */}
      <FooterSection/>
    </div>
  );
}

export default App;
