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
import styledc from '../assets/styledc.png'
import styled from 'styled-components';

const SkillsSection = () => {
    return (
            <div id="skills">
                <StyledH2>Tech & tools</StyledH2>
                    <Skills>
                            <img src={html} alt="html" width = "65" height = "65"/>

                            <img src={css} alt="css" width = "65" height = "65"/>
                            
                            <img src={bootstrap} alt="bootstrap" width = "65" height = "65"/>
                            
                            <img src={sass} alt="sass" width = "65" height = "65"/>
                            
                            <img src={js} alt="js" width = "65" height = "65"/>
                            
                            <img src={react} alt="styledc" width = "65" height = "65"/>

                            <img src={styledc} alt="react" width = "65" height = "65"/>
                            
                            <img src={mongodb} alt="mongodb" width = "130" height = "130"/>
                            
                            <img src={redux} alt="redux" width = "65" height = "65"/>
                            
                            <img src={git} alt="git" width = "65" height = "65"/>

                            <img src={github} alt="github" width = "65" height = "65"/>
                            
                            <img src={vscode} alt="vscode" width = "110" height = "110"/>

                            <img src={terminal} alt="terminal" width = "65" height = "65"/>
                            
                            <img src={figma} alt="figma" width = "65" height = "65"/>
                            
                        </Skills>
            </div>
    )
}


const Skills = styled.div`
    height: 60vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr ;
    grid-template-rows: 10px; 
    justify-items: center;
    /* justify-content: space-evenly; */
    align-items: center;
    align-content: space-around;
    /* margin-top: 5vh; */
    margin-left: 25px; 
    margin-right: 25px;
    box-shadow: 0px 7px 7px -5px black;
    padding: 25px;
    img {
        margin-top: 15vh;
    }
`

const StyledH2 = styled.h2`
    margin-left: 80vh;
    margin-bottom: 2vh; 
    font-weight: 900;
    color: whitesmoke;
    display: flex;
    align-items: center;
    justify-items: center;
`

export default SkillsSection;