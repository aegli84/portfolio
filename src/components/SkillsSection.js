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


const SkillsSection = () => {
    return (
        <>
            
                <StyledDivWrapper id="skills">
                <StyledText>Tech & tools</StyledText>
                <SkillsIcons>
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
                </SkillsIcons>
        </StyledDivWrapper>
        </>
    );
};

const StyledDivWrapper = styled.div `

    margin-left: 60px; 
    margin-right: 60px;
    padding-top: 1vh;
    margin-bottom: 17vh;
`
    const StyledText = styled.h2`
    margin-left: 70vh;
    margin-bottom: 15vh; 
    font-weight: 900;
    color: whitesmoke;
    display: flex;
    align-items: center;
    justify-items: center;
`

const SkillsIcons = styled.div`
    height: 40vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr ;
    grid-template-rows: 2px;  
    justify-items: center;
    align-items: center;
    img {
        margin-top: 15vh;
        width: 35%;
    }
`
export default SkillsSection;