import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import React from 'react';
import GlobalStyle from './components/GlobalStyled';

function App() {
  return (
    <div className="App-header">
    <GlobalStyle/>
      <Home/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
