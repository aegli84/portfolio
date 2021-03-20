import React from 'react';
import ae from '../assets/ae.jpeg';


const AboutSection = () => {
    return (
        <div>
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
                <img src = {ae} alt = "my face"/>
            </div>
        </div>
    );
};

export default AboutSection;