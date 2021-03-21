import React from 'react';
import bootstrap from '../assets/bootstrap.svg';
import css from '../assets/css.svg';
import figma from '../assets/figma.svg';
import git from '../assets/git.svg';
import github from '../assets/github.svg';
import html from '../assets/html.svg';
import js from '../assets/js.svg';
import mongodb from '../assets/mongodb.svg';
import react from '../assets/react.svg';
import redux from '../assets/redux.svg';
import sass from '../assets/sass.svg';
import terminal from '../assets/terminal.svg';
import vscode from '../assets/vscode.svg';
import styled from 'styled-components';

const SkillsSection = () => {
    return (
        
            <div className = 'description'>
                <h2>Skills</h2>
                <Skills className = "cards">
                    <div className = "card">
                        <div className = "icon">
                            <img src={html} alt="html" width = "50" height = "50"/>
                            <h4>HTML</h4>
                            <img src={css} alt="css" width = "50" height = "50"/>
                            <h4>CSS</h4>
                            <img src={bootstrap} alt="bootstrap" width = "50" height = "50"/>
                            <h4>BOOTSTRAP</h4>
                            <img src={sass} alt="sass" width = "50" height = "50"/>
                            <h4>SASS</h4>
                            <img src={js} alt="js" width = "50" height = "50"/>
                            <h4>JAVASCRIPT</h4>
                            <img src={react} alt="react" width = "50" height = "50"/>
                            <h4>REACT</h4>
                            <img src={mongodb} alt="mongodb" width = "60" height = "60"/>
                            <h4>MONGODB</h4> 
                            <img src={redux} alt="redux" width = "50" height = "50"/>
                            <h4>REDUX</h4>
                            <img src={git} alt="git" width = "50" height = "50"/>
                            <h4>GIT</h4>
                            <img src={github} alt="github" width = "50" height = "50"/>
                            <h4>GITHUB</h4>
                            <img src={terminal} alt="terminal" width = "50" height = "50"/>
                            <h4>TERMINAL</h4>
                            <img src={vscode} alt="vscode" width = "70" height = "70"/>
                            <h4>VS CODE</h4>
                            <img src={figma} alt="figma" width = "50" height = "50"/>
                            <h4>FIGMA</h4>
                        </div>

                    </div>

                </Skills>
            </div>

        
    )
}


const Skills = styled.div`
   
    display: grid;
    align-items: center;
    justify-content: space-around;
    padding: 5rem 10rem;
    
    
`

export default SkillsSection;