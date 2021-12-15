import cv from '../assets/cv.pdf'
import styled from 'styled-components'
import ScrollIntoView from 'react-scroll-into-view'


import AOS from 'aos';
import 'aos/dist/aos.css';

const Resume = () => {
    
    AOS.init({
        duration: 1200,
    })
    return (
        <Div data-aos="fade-up" data-aos-delay="300">
            <A className="resume"
                onClick={() => window.open(cv)} 
                target = "_blank" 
                >Resume
            </A>
            <ScrollIntoView selector= "#projects">
                <ButtonProjects className="projects">
                    Projects
                </ButtonProjects>
            </ScrollIntoView>
        </Div>
    );
}

const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    
    @media (max-width: 768px) {
        justify-content: center;
        padding: 1.3rem 2rem; 
        margin: 1rem;
    }
@media (max-width: 500px){
        /* margin: 1rem 1rem 4rem 1rem;   */
        padding: 1.3rem 2rem; 
        font-size: 1.2rem;
        justify-content: center;
        }
`
const A = styled.a`
    font-weight: bold;
    font-size: 1rem;
    width: 12em;
    padding: 1.4rem 3.5rem;
    margin-top: 2rem;
    border: 1px solid #2EBA8B;
    color: lightgrey;
    outline: none;
    background: #081730;
    border-radius: 5rem;
    text-transform: uppercase;
    &:hover {
        background-color:  #3dc9a6d3;
        transition: all 0.5s ease;
        }
@media (max-width: 1024px){
        margin: 0 1rem 3rem 1rem;   
        }
    @media (max-width: 768px) {
        justify-content: center;
        margin-left: 2rem;
    }
@media (max-width: 500px){
    margin-top: 1rem;
    font-size: 1.2rem;
    }
`
const ButtonProjects = styled.button`
    font-weight: bold;
    font-size: 1rem;
    width: 12em;
    padding: 1.4rem 2.7rem;
    margin-top: 2rem;
    margin-left: 3rem;
    border: 1px solid #2EBA8B;
    color: lightgrey;
    outline: none;
    background: #081730;
    border-radius: 5rem;
    text-transform: uppercase;
    &:hover {
        background-color:  #3dc9a6d3;
        transition: all 0.5s ease;
        }
    @media (max-width: 768px) {
        margin-bottom: 5rem;
        margin-right: 2rem;
    
    }
    @media (max-width: 500px){
        margin-bottom: 4rem;
        margin-right: 2rem;
        font-size: 1.2rem;
        width: 11em;
    }
`
export default Resume;