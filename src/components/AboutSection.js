import React from 'react';
import aeh from '../assets/aeh.jpg';
import styled from 'styled-components';
import Curly from './Curly' 
import Resume from './Resume'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutSection = () => {
    AOS.init({
        duration: 1200,
    })
    return (
        <>
            <Curly/>
            <div  
                >
                <StyledAbout>
                    <div className = "description" id="about" >
                        <div className = "title">
                        <BigText >
                        <HI data-aos="fade-right">Hello!</HI>
                            <h2 data-aos="fade-right" data-aos-delay="100"> My name is <StyledA data-aos="fade-right" data-aos-delay="100">Andreea</StyledA>
                            </h2>
                        </BigText>
                        <BigText data-aos="fade-right" data-aos-delay="300">
                            <h2 ><span>and I'm a</span></h2>
                        </BigText>
                        <BigText data-aos="fade-right" data-aos-delay="500">
                            <H2 ><span>Full-Stack Web Developer.</span></H2>
                        </BigText>
                    </div>
                        <P data-aos="fade-up" >I'm very captivated by everything that has to do with front-end development but I'm also very fascinated by how things work behind the scenes in the back-end
                        </P>
                    <Resume />
                </div>
                <div  className = "image">
                    <Img data-aos="fade-left"
                        src = {aeh} 
                        alt = "andreea egli"/>
                </div>
            </StyledAbout>
            </div>
        </>
    );
};

const StyledAbout = styled.div`
    height: 95vh;
    margin-top: 5vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5rem 8rem;
    color: whitesmoke;
    margin-bottom: 10vh;
    
@media (max-width: 768px) {
    height: 45vh;
    display: block;
    text-align: center; 
    padding: 3rem;
    margin-top: 11rem;
    }
    
@media (max-width: 480px){
    padding: 1rem;
    text-align: center;
    margin-top: 9rem;
    
    } 
`
const HI = styled.h2 `
    font-weight: 900;
    font-size: 3.5rem;
    color: #3DC9A7; 
    font-family: 'Lato', sans-serif;
`
const P = styled.p`
    margin-top: 1.5rem;
    font-weight: 300;
    padding-right: 8rem;
    font-family: 'Montserrat', sans-serif;

@media (max-width: 768px){
    padding: 2rem;
    } 
@media (max-width: 480px){
    padding: 3rem 1rem 2rem;
    
    }
`
const H2 = styled.h2`
    font-weight: 900;
    color: #3DC9A7;
    font-family: 'Lato', sans-serif;
`
const StyledA = styled.a `
    color: #3DC9A7;
    font-weight: 900;
    font-family: 'Lato', sans-serif;
`
const Img = styled.img`
    width: 40vh;
    height: 40vh;
    margin-right: 5rem;
    position: relative;
    border-radius: 50%; 
    overflow: hidden;
    object-fit: cover;
    box-shadow: 1px 3px 32px -4px black;
    @media (max-width: 1024px){
        width: 20vh;
        height: 20vh;
    } 
@media (max-width: 768px){
    display: none;
    } 
@media (max-width: 480px){
    display: none; 
    }
`
const BigText = styled.div `
    /* overflow: hidden; */
    text-shadow: 0  15px 7px #081730; 
`
export default AboutSection;

