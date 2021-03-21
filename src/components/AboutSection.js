import React from 'react';
import ae from '../assets/ae.jpg';
import styled from 'styled-components';


const AboutSection = () => {
    return (
        <StyledAbout>
            <div className = "description">
                <div className = "title">
                    <StyledAllBigText>
                        <h2>My name is <StyledA>Andreea</StyledA></h2>
                    </StyledAllBigText>
                    <StyledAllBigText>
                        <h2><span>and I'm an aspiring</span></h2>
                    </StyledAllBigText>
                    <StyledAllBigText>
                        <StyledH2><span>Web Developer.</span></StyledH2>
                    </StyledAllBigText>
                </div>
                    <StyledP>I'm very ----insert adjective here--- by everything that has to do with front-end development but I'm also very fascinated by how things work behind the scenes in the back-end</StyledP>
                    <button>Resume</button>
                </div>
            <div className = "image">
                <StyledImg src = {ae} alt = "my face" width = "300" height = "300"/>
            </div>
        </StyledAbout>
    );
};

const StyledAbout = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5rem 10rem;
    color: whitesmoke;
    /* border-radius: 5px; */
    /* box-shadow: 20px 20px 60px #313131,
                -20px -20px 60px #b4b2b26c;
    width: 150vmin; */
    
`
const StyledP = styled.p`
    margin-top: 1rem;
    font-weight: 200;
    padding-right: 8rem;
`

const StyledH2 = styled.h2`
    font-weight: 900;
    color: lightgreen;
`
const StyledA = styled.a `
    color: lightgreen;
    font-weight: 900;
`
const StyledImg = styled.img`
    /* border: 3px solid #465050; */
    /* border-top-left-radius: 80px;
    border-bottom-right-radius: 80px; */
    margin-right: 5rem;
    position: relative;
    border-radius: 7px; 
    box-shadow: 0 8px 6px -6px black;
    overflow: hidden;
    /* width: 120%; */
    /* height: 40vh;
    object-fit: cover; */
    
`
// const StyledButton = styled.button `
// background: #495057;
// border-radius: 5%;
// box-shadow: inset 9.91px 9.91px 15px #495057
// , inset -9.91px -9.91px 15px #495057;

// `

const StyledAllBigText = styled.div `
    overflow: hidden;
`



export default AboutSection;