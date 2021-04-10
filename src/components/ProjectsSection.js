import styled from 'styled-components'
import { motion } from 'framer-motion'
import meditationapp from '../assets/meditationapp.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import webdev from '../assets/webdev.png'
import todo from '../assets/todo.png'
import comingsoon from '../assets/comingsoon.jpg'

const ProjectsSection = () => {
    
    return (
        <>
            <StyledH2Top>Projects</StyledH2Top>
                <StyledDivCardsWrapper className = "cards" id="projects" > 
                    <StyledDivCard  
                        className = "card" 
                        whileHover={{scale: 1.1}}> 
                    <img src={meditationapp} alt="html"/>
                    <StyledH3>Heaven - Meditation Web App</StyledH3>
                        <Link 
                            to = {{pathname:"https://github.com/aegli84"}} 
                            target = {"_blank"} 
                            rel = "noopener noreferrer">
                        <FontAwesomeIcon 
                            className = "github" 
                            size = "lg"
                            color = "#343a40"
                            transform ="left-7 down-9 grow-4" 
                            fixedWidth
                            icon = {faGithub}/>
                        </Link>
                        <Link 
                            to = {{pathname:"https://github.com/aegli84"}} 
                            target={"_blank"} 
                            rel="noopener noreferrer">
                        <FontAwesomeIcon 
                            className = "desktop" 
                            size = "lg"
                            color = "#343a40"
                            transform ="right-5 down-9 grow-2" 
                            fixedWidth
                            icon = {faDesktop}/>
                        </Link>
                    <StyledPara>Project under construction. All links lead to my GitHub until further notice </StyledPara> 
                    <StyledH6>REACT</StyledH6>
                    <StyledH6>SASS</StyledH6>
                    <StyledH6>FRAMER MOTION</StyledH6>
            </StyledDivCard>
                    <StyledDivCard  
                        className = "card" 
                        whileHover={{scale: 1.1}}> 
                    <img src={webdev} alt="webdev"/>
                    <StyledH3>WebDev Portfolio</StyledH3>
                        <Link 
                            to = {{pathname:"https://github.com/aegli84/portfolio"}} 
                            target={"_blank"} 
                            rel="noopener noreferrer">
                            <FontAwesomeIcon 
                                className = "github" 
                                size = "lg"
                                color = "#343a40"
                                transform="left-7 down-9 grow-4" 
                                fixedWidth
                                icon = {faGithub}/>
                            </Link>
                        <Link 
                            to = {{pathname:"https://portfolio-andreea-egli-760d4eup8-aegli84.vercel.app/"}} 
                            target={"_blank"} 
                            rel="noopener noreferrer">
                            <FontAwesomeIcon 
                                className = "desktop" 
                                size = "lg"
                                color = "#343a40"
                                transform="right-5 down-9 grow-2" 
                                fixedWidth
                                icon = {faDesktop}/>
                        </Link>
                    <StyledPara>Portfolio built in React with styled-components for stylig and framer motion for page animations. A long content page with scroll to section for a modern look.</StyledPara> 
                    <StyledH6>REACT</StyledH6>
                    <StyledH6>STYLED-COMPONENTS</StyledH6>
                    <StyledH6>FRAMER MOTION</StyledH6>
            </StyledDivCard>
                    <StyledDivCard  
                        className = "card" 
                        whileHover={{scale: 1.1}}> 
                    <img src={todo} alt="todo"/>
                    <StyledH3>Wunder - Todo List</StyledH3>
                        <Link 
                            to = {{pathname:"https://github.com/aegli84/Todo-list"}} 
                            target={"_blank"} 
                            rel="noopener noreferrer">
                            <FontAwesomeIcon 
                                className = "github" 
                                size = "lg"
                                color = "#343a40"
                                transform="left-7 down-9 grow-4" 
                                fixedWidth
                                icon = {faGithub}/>
                        </Link>
                        <Link 
                            to = {{pathname:"hhttps://aegli84.github.io/Todo-list/"}} 
                            target={"_blank"} 
                            rel="noopener noreferrer">
                            <FontAwesomeIcon 
                                className = "desktop" 
                                size = "lg"
                                color = "#343a40"
                                transform="right-5 down-9 grow-2" 
                                fixedWidth
                                icon = {faDesktop}/>
                        </Link>
                    <StyledPara>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, delectus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. </StyledPara> 
                    <StyledH6>HTML</StyledH6>
                    <StyledH6>CSS</StyledH6>
                    <StyledH6>JAVASCRIPT</StyledH6>
                </StyledDivCard>
                
                <StyledDivCard  
                        className = "card" 
                        whileHover={{scale: 1.1}}> 
                    <img src={comingsoon} alt="todo"/>
                    <StyledH3>Project undefined</StyledH3>
                        <Link 
                            to = {{pathname:"https://github.com/aegli84/Todo-list"}} 
                            target={"_blank"} 
                            rel="noopener noreferrer">
                            <FontAwesomeIcon 
                                className = "github" 
                                size = "lg"
                                color = "#343a40"
                                transform="left-7 down-9 grow-4" 
                                fixedWidth
                                icon = {faGithub}/>
                        </Link>
                        <Link 
                            to = {{pathname:"hhttps://aegli84.github.io/Todo-list/"}} 
                            target={"_blank"} 
                            rel="noopener noreferrer">
                            <FontAwesomeIcon 
                                className = "desktop" 
                                size = "lg"
                                color = "#343a40"
                                transform="right-5 down-9 grow-2" 
                                fixedWidth
                                icon = {faDesktop}/>
                        </Link>
                    <StyledPara>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, delectus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. </StyledPara> 
                    <StyledH6>HTML</StyledH6>
                    <StyledH6>CSS</StyledH6>
                    <StyledH6>JAVASCRIPT</StyledH6>
                </StyledDivCard> 
                
                <StyledDivCard  
                        className = "card" 
                        whileHover={{scale: 1.1}}> 
                    <img src={comingsoon} alt="todo"/>
                    <StyledH3>Project undefined</StyledH3>
                        <Link 
                            to = {{pathname:"https://github.com/aegli84/Todo-list"}} 
                            target={"_blank"} 
                            rel="noopener noreferrer">
                            <FontAwesomeIcon 
                                className = "github" 
                                size = "lg"
                                color = "#343a40"
                                transform="left-7 down-9 grow-4" 
                                fixedWidth
                                icon = {faGithub}/>
                        </Link>
                        <Link 
                            to = {{pathname:"hhttps://aegli84.github.io/Todo-list/"}} 
                            target={"_blank"} 
                            rel="noopener noreferrer">
                            <FontAwesomeIcon 
                                className = "desktop" 
                                size = "lg"
                                color = "#343a40"
                                transform="right-5 down-9 grow-2" 
                                fixedWidth
                                icon = {faDesktop}/>
                        </Link>
                    <StyledPara>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, delectus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. </StyledPara> 
                    <StyledH6>HTML</StyledH6>
                    <StyledH6>CSS</StyledH6>
                    <StyledH6>JAVASCRIPT</StyledH6>
                </StyledDivCard> 
                
                <StyledDivCard  
                        className = "card" 
                        whileHover={{scale: 1.1}}> 
                    <img className = "colorize" src={comingsoon} alt="todo"/>
                    <StyledH3>Project undefined</StyledH3>
                        <Link 
                            to = {{pathname:"https://github.com/aegli84/Todo-list"}} 
                            target={"_blank"} 
                            rel="noopener noreferrer">
                            <FontAwesomeIcon 
                                className = "github" 
                                size = "lg"
                                color = "#343a40"
                                transform="left-7 down-9 grow-4" 
                                fixedWidth
                                icon = {faGithub}/>
                        </Link>
                        <Link 
                            to = {{pathname:"hhttps://aegli84.github.io/Todo-list/"}} 
                            target={"_blank"} 
                            rel="noopener noreferrer">
                            <FontAwesomeIcon 
                                className = "desktop" 
                                size = "lg"
                                color = "#343a40"
                                transform="right-5 down-9 grow-2" 
                                fixedWidth
                                icon = {faDesktop}/>
                        </Link>
                    <StyledPara>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, delectus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. </StyledPara> 
                    <StyledH6>HTML</StyledH6>
                    <StyledH6>CSS</StyledH6>
                    <StyledH6>JAVASCRIPT</StyledH6>
                </StyledDivCard> 
            </StyledDivCardsWrapper>
        </>
    )
}

const StyledDivCardsWrapper = styled.div`
    min-height: 90vh;
    padding: 2rem 7rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(50vh, 1fr));
    grid-auto-rows: minmax(17vh, auto);
    grid-gap: 3.5em;

@media (max-width: 1024px){
    padding: 1rem 4rem 1rem 4rem;
    } 
@media (max-width: 500px){
    grid-gap: 0.5em;
    padding-left: 2.5rem;
    padding-right: 1rem;
    
    } 
`

const StyledDivCard = styled(motion.div) `
    width: 26vw;
    height: 57vh;
    box-shadow: 1px 3px 32px -7px black;
    border-radius:10px;
    column-gap: 100px;
    text-align: center;
    margin-top: 6vh;
    background: rgba(245, 245, 245, 0.829); 
    overflow: hidden;
    &:hover {
        border: 2px solid rgba(245, 245, 245, 0.829);
    }
@media (max-width: 1024px){
    height: 52vh;
    width: 55vh;
    } 
@media (max-width: 500px){
    height: 49vh;
    width: 85vw;
    font-size: 1rem;
    margin-bottom: 2.5rem;
    } 
    
    img {
        height: 28vh;
        width: 26vw;

    @media (max-width: 1024px){
        width: 55vw;
        height: 55vh;
    }
    @media (max-width: 500px){
        width: 85vw;
        height: 22vh;
    }
        /* filter: grayscale(100%);
        &:hover {
            filter: grayscale(0%);
        }  */
        /* border-top-left-radius: 8px;  */
        /* border-top-right-radius: 8px; */
    }
    .github,
    .desktop {
        @media (max-width: 500px){
        font-size: 2rem;
        margin-bottom: 1rem;
    }
    }
    
`
const StyledH2Top = styled.h2`
    font-weight: 900;
    color: whitesmoke;
    text-align: center;
@media (max-width: 1024px){
        padding-top: 19vh;
    }

    
`
const StyledH3 = styled.h3`
    margin-top: 1rem;
    color: #343a40;
@media (max-width: 1024px){
        font-size: 2.7vh;
    }
@media (max-width: 500px){
        font-size: 2.5vh;
    }
    
`
const StyledH6 = styled.h6`
    margin-top: 0.8rem;
    display: inline-block;
    align-items: left;
    padding: 0.4rem;
    font-weight: bolder;
    font-size: 0.7rem;
    color: #343a40;
@media (max-width: 1024px){
        font-size: 1.5vh;
    }
@media (max-width: 500px){
        font-size: 1.2vh;
    }
`
const StyledPara = styled.p`
    font-weight: 400;
    font-size: 0.9rem;
    margin-top: 1.3rem;
    margin-left: 0.9rem;
    margin-right: 0.9rem;
    color: #343a40;
    @media (max-width: 1024px){
        font-size: 1.9vh;
    }
    @media (max-width: 500px){
        font-size: 1.7vh;
    }
`
export default ProjectsSection;