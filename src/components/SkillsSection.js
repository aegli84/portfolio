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
import AOS from 'aos';
import 'aos/dist/aos.css';


const SkillsSection = () => {
    AOS.init({
        duration: 1200,
    })

    return (
        <>
            <DivWrapper 
                id="skills" 
                >
                <Text>Tech & tools</Text>
                <Icons data-aos="zoom-in">
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
                </Icons>
        </DivWrapper>
        </>
    );
};

const DivWrapper = styled.div `
    min-height: 90vh;
    margin-left: 15vh; 
    margin-right: 15vh;
    text-align: center;

@media (max-width: 768px){
    margin: 0 5rem 5rem 5rem;
    }  

@media (max-width: 480px){
    margin-left: 5vh; 
    margin-right: 3vh;
    margin-top: 28rem;
    }  
`
const Text = styled.h2`
    margin-bottom: 15vh; 
    /* font-size: 5rem; */
    font-weight: 900;
    color: whitesmoke;
    text-align: center;

@media (max-width: 768px){
    margin-top: 1rem;  
    margin-bottom: 10vh; 
    }
@media (max-width: 480px){
    margin-top: 2vh;
    margin-bottom: 7vh;
    font-size: 3.5rem;
    } 
`

const Icons = styled.div`
    height: 7vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 1em; 
    row-gap: 3rem;
    justify-items: center;
    align-items: center;
    img {
        margin-top: 1vh;
        width: 5vw;
    }
        
@media (max-width: 768px){
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 1rem; 
    row-gap: 4rem;
    img {
        margin-top: -1vh;
        padding: 1rem 2rem;
        width: 14vw;
    } 
}
@media (max-width: 480px){
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem; 
    row-gap: 1rem;
    img {
        margin-top: -1vh;
        padding: 1rem 2rem;
        width: 25vw;
    } 
}
`
export default SkillsSection;