import React from 'react';
import ae from '../assets/ae.jpg';
import styled from 'styled-components';
import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'
import {titleAnimation, fade, photoAnimation} from '../animation'
import Curly from './Curly' 
import Connect from './Connect'
import NavBurgerMenu from './NavBurgerMenu'

const AboutSection = () => {
    
    return (
        <>
    <NavBurgerMenu/>
        <Curly/>
        <motion.div  variants = {pageAnimation} initial = "hidden" animate = "show" >
        
        <StyledAbout >
    
            <div className = "description" id="about" >
                <div className = "title">
                    <StyledAllBigText>
                        <motion.h2 variants = {titleAnimation}>My name is <StyledA>Andreea</StyledA>
                        </motion.h2>
                    </StyledAllBigText>
                    <StyledAllBigText>
                        <motion.h2 variants = {titleAnimation} ><span>and I'm an aspiring</span></motion.h2>
                    </StyledAllBigText>
                    <StyledAllBigText>
                        <StyledH2  variants = {titleAnimation}><span>Web Developer.</span></StyledH2>
                    </StyledAllBigText>
                </div>
                
                    <StyledP variants = {fade}>I'm very ----insert adjective here--- by everything that has to do with front-end development but I'm also very fascinated by how things work behind the scenes in the back-end
                    </StyledP>
                    <motion.div>
                        <motion.button 
                            whileHover={{ scale: 1.1 }} 
                            variants = {fade}
                            >Resume
                        </motion.button>
                    </motion.div>
                
            </div>
        
            
            <motion.div  variants = {photoAnimation} className = "image">
                <StyledImg 
                whileHover={{ scale: 1.1 }}
                    src = {ae} 
                    alt = "andreea egli" />
            </motion.div>
            
        </StyledAbout>
        <Connect/>

        </motion.div>
        
        </>
    );
};

const StyledAbout = styled.div`
    min-height: 90vh;
    margin-top: 5vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5rem 10rem;
    color: whitesmoke;
    margin-bottom: 20vh;

@media (max-width: 1024px){
    display: block;
    text-align: center;
    padding: 2rem 2rem;
    margin-top: 8rem;
    }
@media (max-width: 500px){
    padding: 1rem 1rem;
    margin-top: 0;
    padding-top: 4rem;
    }


    button {
        font-weight: bold;
        font-size: 1rem;
        padding: 1rem 2rem;
        margin-top: 5vh;
        cursor: pointer;
        border: 1px solid darkgrey;
        color: darkgrey;
        transition: all 0.5s ease;
        outline: none;
        background: #495057;
        border-radius: 5%;
        &:hover {
            background-color: #343a40 ;
            color: lightgreen;
        }
    @media (max-width: 1024px){
        margin: 0 1rem 3rem 1rem;   
        }
        @media (max-width: 500px){
        margin: 1rem 1rem 5rem 1rem;  
        padding: 1.5rem 3rem; 
        font-size: 1.4rem;
        }
    }
`
const StyledP = styled(motion.p)`
    margin-top: 1rem;
    font-weight: 200;
    padding-right: 8rem;

@media (max-width: 1024px){
    display: block;
    text-align: center;
    padding: 2rem 2rem 2rem 2rem;
    }
@media (max-width: 500px){
    display: block;
    text-align: center;
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
    border-radius: 7px; 
    box-shadow: 0 8px 6px -6px black;
    overflow: hidden;

@media (max-width: 1024px){
    margin: 1rem 12rem 5rem 0rem; 
    width: 20vh;
    height: 20vh;
    }
@media (max-width: 500px){
    text-align: center;
    width: 17vh;
    height: 17vh;
    /* display: none; */
    }
`
const StyledAllBigText = styled.div `
    overflow: hidden;
`
export default AboutSection;

