import cv from '../assets/cv.pdf'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { fade } from '../animation'


const Resume = () => {
    return (
        <Div 
            variants = {fade}>
            <A 
                whileHover={{scale: 1.1}}
                onClick={() => window.open(cv)} 
                target = "_blank" 
                >Resume
            </A>
        </Div>
    );
}

const Div = styled(motion.div)`
    padding-top: 3rem;

@media (max-width: 500px){
        margin: 1rem 1rem 4rem 1rem;  
        padding: 1.3rem 2rem; 
        font-size: 1.2rem;
        }
`
const A = styled(motion.a)`
    font-weight: bold;
    font-size: 1rem;
    padding: 1rem 2rem;
    margin-top: 5vh;
    cursor: pointer;
    border: 2px solid lightgrey;
    color: lightgrey;
    transition: all 0.5s ease;
    outline: none;
    background: #343a40;
    border-radius: 5%;
    &:hover {
        background-color: #23282db0;
        color: lightgreen;
        }
@media (max-width: 1024px){
        margin: 0 1rem 3rem 1rem;   
        }
@media (max-width: 500px){
        margin: 1rem 1rem 5rem 1rem;  
        padding: 1.3rem 2rem; 
        font-size: 1.2rem;
        }
`

export default Resume;