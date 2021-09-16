import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Connect = () => {
    return (
        <DivWrapper className = "connect">
            <Ul>
                <Text>Let's connect</Text>
                    <Line>
                        <div> - - /// - - </div>
                    </Line>
                <Icons>
                    <Link 
                        to = {{pathname:"https://github.com/aegli84"}} 
                        target={"_blank"} 
                        rel="noopener noreferrer">
                        <motion.div 
                            
                            initial={{ scale: 0 }}
                            animate={{ rotate: 360, scale: 1 }}
                            >
                            <FontAwesomeIcon 
                                className = "github" 
                                size = "lg"
                                color = "whitesmoke"
                                transform="down-1 grow-5.5" 
                                fixedWidth
                                icon = {faGithub}/>
                        </motion.div>
                    </Link>
                </Icons>
                <Icons>
                    <Link 
                        to = {{pathname: "https://www.linkedin.com/in/andreeaegli/"}} 
                        target={"_blank"} 
                        rel="noopener noreferrer">
                        <motion.div 
                            
                            initial={{ scale: 0 }}
                            animate={{ rotate: 360, scale: 1 }}
                            >
                            <FontAwesomeIcon 
                                className = "linkedin" 
                                size = "lg"
                                color = "whitesmoke"
                                transform="down-2 grow-5.6" 
                                fixedWidth
                                icon = {faLinkedin}/>
                        </motion.div>
                    </Link>
                </Icons>
                <Icons>
                    <Link 
                        to = {{pathname:"mailto:aegli@ymail.com"}} 
                        target={"_blank"} 
                        rel="noopener noreferrer"> 
                        <motion.div 
                            
                            initial={{ scale: 0 }}
                            animate={{ rotate: 360, scale: 1 }}
                            >
                                
                            <FontAwesomeIcon 
                                className = "email" 
                                size = "lg"
                                color = "whitesmoke"
                                transform="down-1 grow-4" 
                                fixedWidth
                                icon = {faEnvelope}/>  
                        </motion.div>
                    </Link>
                </Icons>
        </Ul>
        </DivWrapper>
    );
};
    
const DivWrapper = styled.div`
    position: relative;
    top: -30rem;
    left: 100rem;
    line-height: 2rem;

@media (max-width: 1502px){
    writing-mode: horizontal-tb;
    line-height: 1.5rem;
    top: -27rem;
    left: 85rem;

    }
    @media (max-width: 768px){
    writing-mode: horizontal-rl;
    line-height: 1rem;
    position: absolute;
    top: 53rem;
    left:35rem;
    margin: 1rem;
    } 
@media (max-width: 480px){
    writing-mode: horizontal-tb;
    line-height: 1rem;
    position: absolute;
    top: 60rem;
    left:17rem;
    margin-right: 1.2rem;
    } 
`
const Text = styled.li`
    writing-mode: vertical-rl;
    text-orientation: mixed;
    color: whitesmoke;
    list-style: none;

@media (max-width: 768px){
    writing-mode: horizontal-tb;
    font-size: 2.2rem;
    }
@media (max-width: 480px){
    font-size: 1.5rem;
    padding: 0 0 0 0.4rem;
    } 
`
const Ul = styled.ul`
    list-style: none;
    :hover {
        color: lightgreen;
        transition: all 0.7s ease;
    }
`
const Line = styled.li`
    writing-mode: vertical-rl;
    text-orientation: mixed;
    margin-top: 1rem;
    margin-bottom: 1rem;

@media (max-width: 768px){
    writing-mode: horizontal-tb;
    padding: .5rem 5.5rem;
    } 
@media (max-width: 480px){
    writing-mode: horizontal-tb;
    padding: .5rem 3.5rem;
    }
`
const Icons = styled.li`
    margin: 0.4rem 0.2rem;
    .github:hover {
        color: #764F7C;
        transition: all 0.7s ease;
    } 
    .linkedin:hover {
        color: #764F7C;
        transition: all 0.7s ease;
    } 
    .email:hover {
        color: #764F7C;
        transition: all 0.7s ease;
    }
    
@media (max-width: 1502px){
    writing-mode: vertical-rl;
    text-orientation: mixed;
    display: block;
    font-size: 1.5rem;
    margin: 1.5rem 0rem 0 -.5rem ;
    } 
    @media (max-width: 480px){
    writing-mode: horizontal-rl;
    } 
@media (max-width: 480px){
    font-size: 1.5rem;
    margin: .5rem 1rem 0 0.3rem ;
    } 
`
export default Connect;