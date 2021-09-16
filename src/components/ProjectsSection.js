import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { FiGithub } from 'react-icons/fi';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import portfolioae from '../assets/portfolioae.png'
import neurocat from '../assets/neurocat.png'
import mangiare from '../assets/mangiare.png'
import todo from '../assets/todo.png'
import coming from '../assets/coming.jpeg' 
import plantpedia from '../assets/plantpedia.png'

const ProjectsSection = () => {
    
    return (
        <>
        <div >
            <H2>Projects</H2>
                <CardWrapper className = "cards" id="projects" > 
                    <Card  
                        className = "card" 
                        > 
                    <img src={plantpedia} alt="Plantpedia"/>
                    <H3>Plantpedia</H3>
                        <Para>Plant database and plant care guides with subscription shop and chat function</Para> 
                    <H6>REACT</H6>
                    <H6>STYLED-COMPONENTS</H6>
                    <H6>CONTEXT API</H6>
                    <H6>CHAT ENGINE API</H6>
                    <H6>COMMERCE JS</H6>
                    <H6>STRIPE</H6>
                    <div>
                        <Link 
                            to = {{pathname:"https://github.com/aegli84/Plantpedia-2.0"}} 
                            target={"_blank"} 
                            rel="noopener noreferrer">
                            <FiGithub size = '2rem' color = '#343a40' title= 'github' style={{margin: '2rem 1rem'}} />
                        </Link>
                        <Link 
                            to = {{pathname:"https://plantpedia-2-0.vercel.app/"}} 
                            target={"_blank"} 
                            rel="noopener noreferrer">
                            <BsBoxArrowUpRight size = '2rem' color = '#343a40' title= 'live demo' style={{margin: '2rem .2rem'}} />
                        </Link>
                        </div>
                    </Card>
                    <Card  
                        className = "card" 
                        > 
                    <img src={neurocat} alt="html" style={{background: '#3c8993'}}/>
                    <H3>Neurocat</H3>
                        <Para>AI company marketing website. Simple with added particle background, with bi-color palette</Para> 
                    <H6>REACT</H6>
                    <H6>STYLED-COMPONENTS</H6>
                    <H6>FRAMER MOTION</H6>
                    <div>
                    <Link 
                            to = {{pathname:"https://github.com/aegli84/neurocat-webpage-task"}} 
                            target={"_blank"} 
                            rel="noopener noreferrer">
                            <FiGithub size = '2rem' color = '#343a40' title= 'github' style={{margin: '2rem 1rem'}} />
                        </Link>
                        <Link 
                            to = {{pathname:"https://neurocat-webpage-task.vercel.app/"}} 
                            target={"_blank"} 
                            rel="noopener noreferrer">
                            <BsBoxArrowUpRight size = '2rem' color = '#343a40' title= 'live demo' style={{margin: '2rem .2rem'}} />
                        </Link>
                        </div>
            </Card>
                    <Card  
                        className = "card" 
                        > 
                    <img src={mangiare} alt="recipe-app" style={{background: '#eed0c6'}}/>
                    <H3>Mangiare</H3>
                        <Para>A simple recipe API search web app built in React with React hooks. Future versions will include account creation and login as well as recipe saving and organizing</Para> 
                    <H6>REACT</H6>
                    <H6>STYLED-COMPONENTS</H6>
                    <H6>AXIOS</H6>
                    <H6>API</H6>
                    <div>
                        <Link 
                            to = {{pathname:"https://github.com/aegli84/Mangiare---recipe-search"}} 
                            target={"_blank"} 
                            rel="noopener noreferrer">
                            <FiGithub size = '2rem' color = '#343a40' title= 'github' style={{margin: '2rem 1rem'}} />
                        </Link>
                        <Link 
                            to = {{pathname:"https://mangiare-recipe-app.herokuapp.com/"}} 
                            target={"_blank"} 
                            rel="noopener noreferrer">
                            <BsBoxArrowUpRight size = '2rem' color = '#343a40' title= 'live demo' style={{margin: '2rem .2rem'}} />
                        </Link>
                        </div>
                </Card> 
                    <Card  
                        className = "card" 
                        > 
                    <img src={portfolioae} alt="webdev" style={{background: '#343a40'}}/>
                    <H3>WebDev Portfolio</H3>
                        <Para>My personal portfolio. A long content page with a smooth scroll to section for a modern look and feel</Para> 
                    <H6>REACT</H6>
                    <H6>STYLED-COMPONENTS</H6>
                    <H6>FRAMER MOTION</H6>
                    <div>
                        <Link 
                            to = {{pathname:"https://github.com/aegli84/portfolio"}} 
                            target={"_blank"} 
                            rel="noopener noreferrer">
                            <FiGithub size = '2rem' color = '#343a40' title= 'github' style={{margin: '2rem 1rem'}} />
                        </Link>
                        <Link 
                            to = {{pathname:"https://andreaegli.tech/"}} 
                            target={"_blank"} 
                            rel="noopener noreferrer">
                            <BsBoxArrowUpRight size = '2rem' color = '#343a40' title= 'live demo' style={{margin: '2rem .2rem'}} />
                        </Link>
                        </div>
            </Card>
                    <Card  
                        className = "card" 
                        > 
                    <img src={todo} alt="todo" style={{background: '#3d405b'}}/>
                    <H3>Wunder - Todo List</H3>
                        <Para>A classic and simple to-do list built with HTML, CSS and vanilla Javascript with a touch of light animations</Para> 
                    <H6>HTML</H6>
                    <H6>CSS</H6>
                    <H6>JAVASCRIPT</H6>
                    <div>
                        <Link 
                            to = {{pathname:"https://github.com/aegli84/Todo-list"}} 
                            target={"_blank"} 
                            rel="noopener noreferrer">
                            <FiGithub size = '2rem' color = '#343a40' title= 'github' style={{margin: '2rem 1rem'}} />
                        </Link>
                        <Link 
                            to = {{pathname:"https://aegli84.github.io/Todo-list/"}} 
                            target={"_blank"} 
                            rel="noopener noreferrer">
                            <BsBoxArrowUpRight size = '2rem' color = '#343a40' title= 'live demo' style={{margin: '2rem .2rem'}} />
                        </Link>
                        </div>
                </Card>
                    <Card  
                        className = "card" 
                        > 
                    <img src={coming} alt="todo" style={{background: '#d7d3c8'}}/>
                    <H3>Chat WebApp </H3>
                        <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, delectus. Lorem ipsum. </Para> 
                    <H6>HTML</H6>
                    <H6>CSS</H6>
                    <H6>JAVASCRIPT</H6>
                    <div>
                    <Link 
                            to = {{pathname:"https://github.com/aegli84"}} 
                            target={"_blank"} 
                            rel="noopener noreferrer">
                            <FiGithub size = '2rem' color = '#343a40' title= 'github' style={{margin: '2rem 1rem'}} />
                        </Link>
                        <Link 
                            to = {{pathname:"https://github.com/aegli84"}} 
                            target={"_blank"} 
                            rel="noopener noreferrer">
                            <BsBoxArrowUpRight size = '2rem' color = '#343a40' title= 'live demo' style={{margin: '2rem .2rem'}} />
                        </Link>
                        </div>
                </Card> 
                
                </CardWrapper>
        </div>
        </>
    )
}

const CardWrapper = styled.div`
    min-height: 75vh;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
`
const Card = styled.div`
    width: 26vw;
    height: 67vh;
    box-shadow: 1px 3px 32px -7px black;
    border-radius:10px;
    text-align: center;
    margin: 1.5rem;
    background: rgba(245, 245, 245, 0.829); 
    overflow: hidden;
    transition: 0.3s all ease-in-out;
    &:hover {
        /* transition: 0.3s all ease-in-out; */
        border: 1px solid rgba(245, 245, 245, 0.829);
        box-shadow:0px 15px 30px #515861;
        margin-top:-10px;
    }
@media (max-width: 1502px){
        width: 28vw;
        height: 72vh;
        margin: 3vh;
    }
    @media (max-width: 768px){
        width: 71vw;
        height: 70vh;
    }
@media (max-width: 480px){
    height: 65vh;
    width: 90vw;
    font-size: 1.8rem;
    margin: 1.5rem;
    } 
    
    img {
        height: 29vh;
        width: 100%;
        object-fit: fill;
        background-color: black;
        padding-top: .3rem;
@media (max-width: 768px){
        width: 100%;
        height: 35vh;
    } 
@media (max-width: 480px){
        width: 100%;
        height: 25vh;
        }
    }
    
`
const H2 = styled.h2`
    font-weight: 900;
    color: whitesmoke;
    text-align: center;
    margin-bottom: 2em;
@media (max-width: 768px){
        margin-top: 2vh;
        margin-bottom: 7vh;
        font-size: 5rem;
    }
@media (max-width: 480px){
        margin-top: 10vh;
        margin-bottom: 7vh;
        font-size: 3.5rem;
    }  
`
const H3 = styled.h3`
    margin-top: 1em;
    color: #343a40;
    font-size: 1.7rem;
@media (max-width: 1024px){
        font-size: 2.1vh;
    }
@media (max-width: 768px){
        font-size: 2.5vh;
    }
    
`
const H6 = styled.h6`
    margin-top: 0.9rem;
    display: inline-block;
    align-items: left;
    padding: 0.4rem;
    font-weight: bolder;
    font-size: 0.7rem;
    color: #343a40;
@media (max-width: 768px){
        font-size: 1.3vh;
    }
@media (max-width: 480px){
        font-size: 1.4vh;
        padding-bottom: 1rem;
    }
`
const Para = styled.p`
    font-weight: 400;
    font-size: 1rem;
    margin-top: 2em;
    margin-bottom: 1em;
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