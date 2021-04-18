import React from 'react';
import aeh from '../assets/aeh.jpg';
import styled from 'styled-components';
import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'
import {titleAnimation, fade, photoAnimation} from '../animation'
import Curly from './Curly' 
import Connect from './Connect'
import Resume from './Resume'

const AboutSection = () => {
    
    return (
        <>
        <Curly/>
        <motion.div  variants = {pageAnimation} initial = "hidden" animate = "show" >
        
        <StyledAbout>
    
            <div className = "description" id="about" >
                <div className = "title">
                    <StyledAllBigText>
                    <StyledHI>Hello!</StyledHI>
                        <motion.h2 variants = {titleAnimation}> My name is <StyledA>Andreea</StyledA>
                        </motion.h2>
                    </StyledAllBigText>
                    <StyledAllBigText>
                        <motion.h2 variants = {titleAnimation} ><span>and I'm a</span></motion.h2>
                    </StyledAllBigText>
                    <StyledAllBigText>
                        <StyledH2  variants = {titleAnimation}><span>Full-Stack Web Developer.</span></StyledH2>
                    </StyledAllBigText>
                </div>
                    <StyledP variants = {fade}>I'm very captivated by everything that has to do with front-end development but I'm also very fascinated by how things work behind the scenes in the back-end
                    </StyledP>
                <Resume/>
            </div>
            <motion.div  variants = {photoAnimation} className = "image">
                <StyledImg 
                whileHover={{ scale: 1.1 }}
                    src = {aeh} 
                    alt = "andreea egli" />
            </motion.div>
        </StyledAbout>
        <Connect/>
        </motion.div>
        </>
    );
};

const StyledAbout = styled.div`
    min-height: 95vh;
    margin-top: 5vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5rem 10rem;
    color: whitesmoke;
    margin-bottom: 20vh;

@media (max-width: 1024px) {
    display: block;
    text-align: center; 
    padding: 2rem 2rem;
    margin-top: 8rem;
    }
    
@media (max-width: 768px){
    padding: 4rem 1rem;
    margin-top: 5rem;
    
    } 
`
const StyledHI = styled.h2 `
    font-weight: 900;
    font-size: 3.5rem;
    color: lightgreen; 
`
const StyledP = styled(motion.p)`
    margin-top: 1.5rem;
    font-weight: 400;
    padding-right: 8rem;

@media (max-width: 1024px){
    
    padding: 2rem;
    } 
@media (max-width: 768px){
    
    padding: 2rem 1rem 2rem 1rem;
    margin-top: 0;
    }
`
const StyledH2 = styled(motion.h2)`
    font-weight: 900;
    color: lightgreen;
    
`
const StyledA = styled.a `
    color: lightgreen;
    font-weight: 900;

    
`
const StyledImg = styled(motion.img)`
    width: 35vh;
    height: 35vh;
    margin-right: 5rem;
    position: relative;
    border-radius: 30px; 
    overflow: hidden;
    box-shadow: 1px 3px 32px -4px black;
    border: 2px solid rgba(245, 245, 245, 0.829);

@media (max-width: 1024px){
    margin: 5rem 12rem 5rem 0rem; 
    width: 19vh;
    height: 19vh;
    } 
@media (max-width: 768px){
    margin: 3rem 12rem 5rem 0rem; 
    width: 17vh;
    height: 17vh;
    border: 1px solid rgba(245, 245, 245, 0.829);
    /* display: none; */
    }
`
const StyledAllBigText = styled.div `
    /* overflow: hidden; */
    text-shadow: 0  15px 7px black; 
`
export default AboutSection;

