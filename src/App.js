import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import React from 'react';
import GlobalStyle from './components/GlobalStyled';
import {Switch, Route} from 'react-router-dom';
import NavbarPages from './components/NavbarPages';

function App() {
  return (
    
    <div className="App">
      <GlobalStyle/>
      <NavbarPages/>
      
      <Switch>
        <Route path ="/" exact>
          <About/>
        </Route>

        <Route path = "/skills">
          <Skills/>
        </Route>

        <Route path = "/projects">
          <Projects/>
        </Route>

        <Route path = "/contact">
          <Contact/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
