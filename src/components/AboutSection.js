import React from 'react';
import ae from '../assets/ae.jpg';
import styled from 'styled-components';
import github from '../assets/github.svg';
import linkedin1 from '../assets/linkedin1.svg';
import email from '../assets/email.svg';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'
import {titleAnimation, fade, photoAnimation} from '../animation'



const AboutSection = () => {
    
    return (
        <>
        
        <motion.div variants = {pageAnimation} initial = "hidden" animate = "show" >

        {/* <motion.div variants={sliderContainer}>
            <Frame  ></Frame>
        </motion.div> */}
        
        <StyledAbout>
            <div className = "description" id="/">
                <div className = "title">
                    <StyledAllBigText>
                        <motion.h2 variants = {titleAnimation}>My name is <StyledA>Andreea</StyledA>
                        </motion.h2>
                    </StyledAllBigText>
                    <StyledAllBigText>
                        <motion.h2 variants = {titleAnimation} ><span>and I'm an aspiring</span></motion.h2>
                    </StyledAllBigText>
                    <StyledAllBigText>
                        <StyledH2 variants = {titleAnimation}><span>Web Developer.</span></StyledH2>
                    </StyledAllBigText>
                </div>

                    <StyledP variants = {fade}>I'm very ----insert adjective here--- by everything that has to do with front-end development but I'm also very fascinated by how things work behind the scenes in the back-end
                    </StyledP>
                    <motion.button variants = {fade}>Resume</motion.button>
            </div>

            <motion.div variants = {photoAnimation} className = "image">
                <StyledImg 
                    src = {ae} 
                    alt = "andreea egli" />
            </motion.div>
        </StyledAbout>

        <StyledDivFirst className = "home">
            <div className = "contact">
                <div className = "icon">
                    <StyledLiImg>
                        <StyledLi1>Let's connect</StyledLi1>
                    <StyledLine>
                        <div> - - /// - - </div>
                    </StyledLine>
                    <li >
                        <Link 
                            to = {{pathname:"https://github.com/aegli84"}} 
                            target={"_blank"} 
                            rel="noopener noreferrer">
                            <StyledImg2 
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2 }} 
                                src={github} 
                                alt="github"/>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to = {{pathname: "https://www.linkedin.com/in/andreeaegli/"}} 
                            arget={"_blank"} 
                            rel="noopener noreferrer">
                            <StyledImg2 
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2 }} 
                                src={linkedin1} 
                                alt="linkedin" />
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to = {{pathname:"https://github.com/aegli84"}} 
                            target={"_blank"} 
                            rel="noopener noreferrer">
                            <StyledImg2 
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2 }} 
                                src={email} 
                                alt="email"/>
                        </Link>
                    </li>

                    </StyledLiImg>
                </div>
            </div>
        </StyledDivFirst>
        </motion.div>
        </>
    );
};

const StyledAbout = styled.div`
    min-height: 100vh;
    margin-top: 8vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5rem 10rem;
    color: whitesmoke;
    
`
const StyledP = styled(motion.p)`
    margin-top: 1rem;
    font-weight: 200;
    padding-right: 8rem;
`

const StyledH2 = styled(motion.h2)`
    font-weight: 900;
    color: lightgreen;
`
const StyledA = styled.a `
    color: lightgreen;
    font-weight: 900;
`
const StyledImg = styled.img`
    width: 35vh;
    height: 35vh;
    margin-right: 5rem;
    position: relative;
    border-radius: 7px; 
    box-shadow: 0 8px 6px -6px black;
    overflow: hidden;
`

const StyledAllBigText = styled.div `
    overflow: hidden;
`



export default AboutSection;


const StyledDivFirst = styled.div`
    margin-top: -53vh;
    display: flex;
    float: right;
    align-items: flex-end;
    justify-content: space-around;
    line-height: 2rem;
    list-style: none;
`
const StyledLi1 = styled.li`
    writing-mode: vertical-rl;
    text-orientation: mixed;
    color: whitesmoke;
    margin-right: 4.5rem;
    list-style: none;
    margin-left: 0.2.rem;
    
    
`
const StyledLiImg = styled.ul`
    list-style: none;
    &:hover {
        color: lightgreen;
            transition: all 0.5s ease;
    }
    
`

const StyledLine = styled.li`
    writing-mode: vertical-rl;
    text-orientation: mixed;
    margin-top: 1rem;
    margin-bottom: 1rem;
`
const StyledImg2 = styled(motion.img) `
    width: 20px;
    height: 20px;
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%);
`

// const Frame = styled(motion.div)`
//     position: fixed;
//     right: 0;
//     top: 0%;
//     width: 100%;
//     height: 100vh;
//     background: whitesmoke;
//     z-index: 2;
// `