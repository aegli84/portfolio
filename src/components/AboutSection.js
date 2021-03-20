import React from 'react';
import ae from '../assets/ae.jpeg';
import styled from 'styled-components';


const AboutSection = () => {
    return (
        <StyledAbout>
            <div className = "description">
                <div className = "title">
                    <div className = "hide">
                        <h2>My name is Andreea</h2>
                    </div>
                    <div className = "hide">
                        <h2><span>and I'm a</span></h2>
                    </div>
                    <div className = "hide">
                        <h2><span>Web Developer</span></h2>
                    </div>
                </div>
                    <p>I'm very -insert adj here- by everything that has to do with front-end development but I'm also very fascinated by how things work behind the scenes in the back-end</p>
                    <button>Resume</button>
                </div>
            <div className = "image">
                <img src = {ae} alt = "my face" width = "250" height = "250"/>
            </div>
        </StyledAbout>
    );
};

const StyledAbout = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: whitesmoke;
    
`

export default AboutSection;