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
            <div id="skills">
                <StyledH2>Tech & tools</StyledH2>
                    <Skills>
                            <img src={html} alt="html" width = "50" height = "50"/>
                            <StyledH4>HTML</StyledH4>
                            <img src={css} alt="css" width = "50" height = "50"/>
                            <StyledH4>CSS</StyledH4>
                            <img src={bootstrap} alt="bootstrap" width = "50" height = "50"/>
                            <StyledH4>BOOTSTRAP</StyledH4>
                            <img src={sass} alt="sass" width = "50" height = "50"/>
                            <StyledH4>SASS</StyledH4>
                            <img src={js} alt="js" width = "50" height = "50"/>
                            <StyledH4>JAVASCRIPT</StyledH4>
                            <img src={react} alt="react" width = "50" height = "50"/>
                            <StyledH4>REACT</StyledH4>
                            <img src={mongodb} alt="mongodb" width = "60" height = "60"/>
                            <StyledH4>MONGODB</StyledH4> 
                            <img src={redux} alt="redux" width = "50" height = "50"/>
                            <StyledH4>REDUX</StyledH4>
                            <img src={git} alt="git" width = "50" height = "50"/>
                            <StyledH4>GIT</StyledH4>
                            <img src={github} alt="github" width = "50" height = "50"/>
                            <StyledH4>GITHUB</StyledH4>
                            <img src={terminal} alt="terminal" width = "50" height = "50"/>
                            <StyledH4>TERMINAL</StyledH4>
                            <img src={vscode} alt="vscode" width = "70" height = "70"/>
                            <StyledH4>VS CODE</StyledH4>
                            <img src={figma} alt="figma" width = "50" height = "50"/>
                            <StyledH4>FIGMA</StyledH4>
                        </Skills>
            </div>
    )
}


const Skills = styled.div`
    height: 60vh;
    display: grid;
    grid-template-columns: 100px 100px 100px 100px 100px 100px 100px 100px ;
    grid-template-rows: 50px; 
    column-gap: 10px;
    row-gap: 10px;
    justify-items: center;
    justify-content: space-evenly;
    align-items: center;
    align-content: space-around;
    margin-bottom: 10vh;
    margin-left: 20px;
    margin-right: 20px;
    box-shadow: 0px 7px 7px -5px black;
`

const StyledH2 = styled.h2`
    margin-left: 80vh;
    margin-bottom: 7vh;
    font-weight: 600;
    color: whitesmoke;
    display: flex;
    align-items: center;
    justify-items: center;
`
const StyledH4 = styled.h4`
    font-weight: 400;
    color: whitesmoke;
    
`
export default SkillsSection;