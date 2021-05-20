import styled from 'styled-components'
import { motion } from 'framer-motion'
import meditationapp from '../assets/meditationapp.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import portfolio from '../assets/portfolio.gif'
import todo from '../assets/todo.gif'
import foodapp from '../assets/foodapp.gif'
import comingsoon from '../assets/comingsoon.jpg' 
//import {ScrollSections} from './ScrollSections'

const ProjectsSection = () => {
    //const [element, controls] = ScrollSections();
    return (
        <>
        <motion.div >
            <H2>Projects</H2>
                <CardWrapper className = "cards" id="projects" > 
                    <Card  
                        className = "card" 
                        whileHover={{scale: 1.1}}> 
                    <img src={meditationapp} alt="html"/>
                    <H3>Heaven - Meditation Web App</H3>
                        <Link 
                            to = {{pathname:"https://github.com/aegli84/heaven"}} 
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
                    <Para>Project under construction. All links lead to my personal GitHub until further notice </Para> 
                    <H6>REACT</H6>
                    <H6>SASS</H6>
                    <H6>FRAMER MOTION</H6>
            </Card>
                    <Card  
                        className = "card" 
                        whileHover={{scale: 1.1}}> 
                    <img src={portfolio} alt="webdev"/>
                    <H3>WebDev Portfolio</H3>
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
                            to = {{pathname:"https://portfolio-andreea-egli-jwlmizxe7-aegli84.vercel.app/"}} 
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
                    <Para>Portfolio built in React with styled-components for stylig and framer motion for page animations. A long content page with a smooth scroll to section for a modern look and feel</Para> 
                    <H6>REACT</H6>
                    <H6>STYLED-COMPONENTS</H6>
                    <H6>FRAMER MOTION</H6>
            </Card>
                    <Card  
                        className = "card" 
                        whileHover={{scale: 1.1}}> 
                    <img src={todo} alt="todo"/>
                    <H3>Wunder - Todo List</H3>
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
                            to = {{pathname:"https://aegli84.github.io/Todo-list/"}} 
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
                    <Para>A classic and simple to-do list built with HTML, CSS and vanilla Javascript with a touch of light animations</Para> 
                    <H6>HTML</H6>
                    <H6>CSS</H6>
                    <H6>JAVASCRIPT</H6>
                </Card>
                    <Card  
                        className = "card" 
                        whileHover={{scale: 1.1}}> 
                    <img src={foodapp} alt="recipe-app"/>
                    <H3>Mangiare - recipe search</H3>
                        <Link 
                            to = {{pathname:"https://github.com/aegli84/Mangiare---recipe-search"}} 
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
                            to = {{pathname:"https://mangiare-recipe-app.herokuapp.com/"}} 
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
                    <Para>A simple recipe API search web app built in React with React hooks. Future versions will include account creation and login as well as recipe saving and organizing</Para> 
                    <H6>REACT</H6>
                    <H6>STYLED-COMPONENTS</H6>
                    <H6>API</H6>
                </Card> 
                    <Card  
                        className = "card" 
                        whileHover={{scale: 1.1}}> 
                    <img src={comingsoon} alt="todo"/>
                    <H3>Project undefined</H3>
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
                    <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, delectus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. </Para> 
                    <H6>HTML</H6>
                    <H6>CSS</H6>
                    <H6>JAVASCRIPT</H6>
                </Card> 
                    <Card  
                        className = "card" 
                        whileHover={{scale: 1.1}}> 
                    <img className = "colorize" src={comingsoon} alt="todo"/>
                    <H3>Project undefined</H3>
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
                    <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, delectus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. </Para> 
                    <H6>HTML</H6>
                    <H6>CSS</H6>
                    <H6>JAVASCRIPT</H6>
                </Card> 
            </CardWrapper>
        {/* <h3><Para>Check back soon for new and exciting projects!</Para></h3> */}
        </motion.div>
        </>
    )
}

const CardWrapper = styled.div`
    min-height: 75vh;
    padding: 3rem 4rem;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
`
const Card = styled(motion.div)`
    width: 26vw;
    height: 65vh;
    box-shadow: 1px 3px 32px -7px black;
    border-radius:10px;
    text-align: center;
    margin: 2vh;
    background: rgba(245, 245, 245, 0.829); 
    overflow: hidden;
    &:hover {
        border: 2px solid rgba(245, 245, 245, 0.829);
        box-shadow: 0px 5px 20px #515861;
    }
@media (max-width: 1024px){
        width: 35vw;
        height: 65vh;
        margin: 1vh;
    }
@media (max-width: 768px){
        width: 70vw;
        height: 70vh;
    } 
@media (max-width: 500px){
    height: 65vh;
    width: 85vw;
    font-size: 1.8rem;
    margin-bottom: 2.5rem;
    } 
    
    img {
        height: 32vh;
        width: 26vw;
@media (max-width: 1024px){
        width: 35vw;
        height: 32.5vh;
    }
@media (max-width: 768px){
        width: 70vw;
        height: 35vh;
    } 
@media (max-width: 500px){
        width: 80vw;
        height: 30vh;
        }
    }
    .github,
    .desktop {
        @media (max-width: 768px){
        font-size: 2.5rem;
        margin-bottom: 1rem;
        }
        @media (max-width: 500px){
        font-size: 2rem;
        margin-bottom: 1rem;
        }
    }
    
`
const H2 = styled.h2`
    font-weight: 900;
    color: whitesmoke;
    text-align: center;
@media (max-width: 1024px){
        padding-top: 14vh;
        margin-top: 12vh;
    }
    
`
const H3 = styled.h3`
    margin-top: 1rem;
    color: #343a40;
@media (max-width: 1024px){
        font-size: 2.1vh;
    }
@media (max-width: 768px){
        font-size: 2.5vh;
    }
    
`
const H6 = styled.h6`
    margin-top: 0.8rem;
    display: inline-block;
    align-items: left;
    padding: 0.4rem;
    font-weight: bolder;
    font-size: 0.7rem;
    color: #343a40;
@media (max-width: 1024px){
        font-size: 1.3vh;
    }
@media (max-width: 768px){
        font-size: 1.4vh;
        padding-bottom: 1rem;
    }
`
const Para = styled.p`
    font-weight: 400;
    font-size: 0.9rem;
    margin-top: 1.3rem;
    margin-left: 0.9rem;
    margin-right: 0.9rem;
    color: #343a40;
@media (max-width: 1024px){
        font-size: 1.4vh;
    }
@media (max-width: 768px){
        font-size: 1.8vh;
    }
`

export default ProjectsSection;