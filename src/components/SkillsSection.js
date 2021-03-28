import React from 'react';
import bootstrap from '../assets/bootstrap.svg';
import css from '../assets/css.svg';
import figma from '../assets/figma.svg';
import git from '../assets/git.svg';
import github from '../assets/github.svg';
import html from '../assets/html.svg';
import js from '../assets/js.svg';
import mongodbd from '../assets/mongodbd.svg';
import react from '../assets/react.svg';
import redux from '../assets/redux.svg';
import sass from '../assets/sass.svg';
import terminal from '../assets/terminal.svg';
import vscode from '../assets/vscode.svg';
import styledc from '../assets/styledc.png'
import styled from 'styled-components';
import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'

const SkillsSection = () => {
    return (
            <motion.div id="skills">
                <StyledH2>Tech & tools</StyledH2>
                    <Skills>
                            <img src={html} alt="html" />

                            <img src={css} alt="css" />
                            
                            <img src={bootstrap} alt="bootstrap" />
                            
                            <img src={sass} alt="sass" />
                            
                            <img src={js} alt="js" />
                            
                            <img src={react} alt="styledc" />

                            <img src={styledc} alt="react" />
                            
                            <img src={mongodbd} alt="mongodb" />
                            
                            <img src={redux} alt="redux"/>
                            
                            <img src={git} alt="git" />

                            <img src={github} alt="github" />
                            
                            <img src={vscode} alt="vscode" />

                            <img src={terminal} alt="terminal" />
                            
                            <img src={figma} alt="figma" />
                            
                        </Skills>
            </motion.div>
    )
}


const Skills = styled.div`
    height: 60vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr ;
    grid-template-rows: 7px;  
    justify-items: center;
    align-items: center;
    margin-left: 60px; 
    margin-right: 60px;
    padding: 6rem 3rem;
    box-shadow: 0px 7px 7px -5px black;
    img {
        margin-top: 15vh;
        width: 35%;
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