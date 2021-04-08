import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Connect = () => {
    
    return (
    <StyledDivWrapper className = "connect">
        <StyledUl>
            <StyledText>Let's connect</StyledText>
                <StyledLine>
                    <div> - - /// - - </div>
                </StyledLine>
                <StyledIcons>
                    <Link 
                        to = {{pathname:"https://github.com/aegli84"}} 
                        target={"_blank"} 
                        rel="noopener noreferrer">
                        <motion.div 
                            whileHover={{ scale: 1.2 }}
                            initial={{ scale: 0 }}
                            animate={{ rotate: 360, scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 50,
                                damping: 20
                                }}>
                            <FontAwesomeIcon 
                                className = "github" 
                                size = "lg"
                                color = "whitesmoke"
                                transform="down-1 grow-5.5" 
                                fixedWidth
                                icon = {faGithub}/>
                        </motion.div>
                    </Link>
                </StyledIcons>
                <StyledIcons>
                    <Link 
                        to = {{pathname: "https://www.linkedin.com/in/andreeaegli/"}} 
                        target={"_blank"} 
                        rel="noopener noreferrer">
                        <motion.div 
                            whileHover={{ scale: 1.2 }}
                            initial={{ scale: 0 }}
                            animate={{ rotate: 360, scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 50,
                                damping: 20
                                }}>
                            <FontAwesomeIcon 
                                className = "linkedin" 
                                size = "lg"
                                color = "whitesmoke"
                                transform="down-2 grow-5.6" 
                                fixedWidth
                                icon = {faLinkedin}/>
                        </motion.div>
                    </Link>
                </StyledIcons>

                <StyledIcons>
                    <Link 
                        to = {{pathname:"https://github.com/aegli84"}} 
                        target={"_blank"} 
                        rel="noopener noreferrer">
                        <motion.div 
                            whileHover={{ scale: 1.2 }}
                            initial={{ scale: 0 }}
                            animate={{ rotate: 360, scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 50,
                                damping: 20
                                }}>
                            <FontAwesomeIcon 
                                className = "github" 
                                size = "lg"
                                color = "whitesmoke"
                                transform="down-1 grow-4" 
                                fixedWidth
                                icon = {faEnvelope}/>
                        </motion.div>
                    </Link>
                </StyledIcons>
        </StyledUl>
    </StyledDivWrapper>
    );
};
    
const StyledDivWrapper = styled.div`
    margin-top: -65vh;
    margin-right: 1rem;
    display: flex;
    float: right;
    align-items: flex-end;
    justify-content: space-around;
    line-height: 2rem;

@media (max-width: 1024px){
    writing-mode: horizontal-tb;
    padding: 10rem 3rem;
    }
@media (max-width: 500px){
    writing-mode: horizontal-tb;
    line-height: 1rem;
    padding: 11rem 0;
    }
`
const StyledText = styled.li`
    writing-mode: vertical-rl;
    text-orientation: mixed;
    color: whitesmoke;
    margin-right: 3.5rem;               
    list-style: none;

@media (max-width: 1024px){
    writing-mode: horizontal-tb;
    font-size: 1.5rem;
    }
@media (max-width: 500px){
    font-size: 1.3rem;
    padding: 0 0 0 0.4rem;
    }
`
const StyledUl = styled.ul`
    list-style: none;
    &:hover {
        color: lightgreen;
        transition: all 0.7s ease;
    }
`
const StyledLine = styled.li`
    writing-mode: vertical-rl;
    text-orientation: mixed;
    margin-top: 1rem;
    margin-bottom: 1rem;

@media (max-width: 1024px){
    writing-mode: horizontal-tb;
    padding: 0 3.5rem;
    }
@media (max-width: 500px){
        padding: 0 3rem;
    }
`
const StyledIcons = styled.li`
    margin: 0.3rem 0.2rem;
    
@media (max-width: 1024px){
    writing-mode: horizontal-tb;
    text-orientation: mixed;
    /* padding: 0 1rem 1rem 0.5rem; */
    display: inline-block;
    margin: 0 1.5rem 0 0.5rem ;
    } 
@media (max-width: 500px){
    font-size: 1.3rem;
    margin: 0 1rem 0 0.3rem ;
    }
`
export default Connect;