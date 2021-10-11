import styled from 'styled-components'
// import { Link } from 'react-router-dom';
import { FiGithub } from 'react-icons/fi';
import { BsBoxArrowUpRight } from 'react-icons/bs';



const Card = ({ item: {  title, body, image, tech, linkgithub, linkdemo } }) => {
    // data-aos="zoom-in"
    return (
        <CardContainer >
            <ul class="card">
                <li >
                    <div>
                        <img src={image} alt=""/>
                    </div>
                        <div className="card__overlay">
                            <div className="card__header">
                                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                                <div className="card__header-text">
                                <CardLink>
                                        <a 
                                            href = {linkgithub} 
                                            target={"_blank"} 
                                            rel="noopener noreferrer">
                                            <FiGithub className='icon'/>
                                        </a>
                                        <a 
                                            href = {linkdemo} 
                                            target={"_blank"} 
                                            rel="noopener noreferrer">
                                            <BsBoxArrowUpRight className='icon'/>
                                        </a>
                                    </CardLink>
                                    <h3>{title}</h3>
                                    <p>{body}</p>   
                                    <span>{tech}</span>        
                                </div>
                            </div>
                        </div>
                </li>
            </ul>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    position: relative;
    display: block;
    height: 100%;  
    margin: 1em;
    border-radius: 15px;
    overflow: hidden;
    text-decoration: none;
    
    img {
        width: 100%;
        
    }
    h3 {
    font-size: 1.5em;
    font-family: "Montserrat", sans-serif;
    margin: .7em .7em 1em .4em;
    color: #08090af1;
    
    }
    
    p {
    margin: 4em .4em 1.2em .4em;
    color: #08090af1;
    font-family: "Montserrat", sans-serif;  
    font-size: 1.3em; 
    font-weight: 400;
    overflow: hidden;
    }    
    span {
    font-size: 1em;
    font-weight: 700;
    margin: 4em 0 1.2em .4em;
    color: #08090af1;
    }
    .card__overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;     
        border-radius: 15px;    
        background-color: #fff;      
        transform: translateY(75%);
        transition: .5s ease-in-out;
        /* @media (max-width: 768px){
            transform: translateY(90%);
        
    } */
        &:hover{
            transform: translateY(0%);
        }
        /* @media (max-width: 375px){
            transform: translateY(78.5%);
        } */
    }
    .card__header {
        position: relative;
        display: flex;
        gap: 4em;
        padding: 1em;
        border-radius: 15px 0 0 0;    
        background-color: #fff;
        transition: .5s ease-in-out;
        
        &:hover{
            transform: translateY(0);
            
        }
    }

    .card__arc {
        width: 80px;
        height: 80px;
        position: absolute;
        bottom: 100%;
        right: 0;      
        z-index: 1;
    }
    .card__arc path {
        fill: #fff;
        d: path("M 40 80 c 22 0 40 -22 40 -40 v 40 Z");
    }       

    
    
`
const CardLink = styled.div `
    .icon{
        font-size: 2rem;
        color: #343a40;
        margin: .5em .7em 7em .4em;
        padding: .1em;
        float: right;
        @media (max-width: 768px){
            font-size: 2.5rem;
            margin: .5em .4em 7em .4em;
    }
        &:hover{
            color: rgba(255, 0, 255, 0.513);
            transition: all 0.5s ease;
        }
    }
`
export default Card