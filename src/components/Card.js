import styled from 'styled-components'
// import { Link } from 'react-router-dom';
import { FiGithub } from 'react-icons/fi';
import { BsBoxArrowUpRight } from 'react-icons/bs';



const Card = ({ item: {  title, body, image, tech, linkgithub, linkdemo } }) => {
    
    return (
        <>
        <CardContainer data-aos="zoom-in">
            <div>
                <img src={image} alt=""/>
            </div>
            <CardContent>
                <h3>{title}</h3>
                <p>{body}</p>
                <p className='tech'>{tech}</p>
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
            </CardContent>
        </CardContainer>
        </>
    )
}

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 960px;
    background-color: rgba(255, 255, 255, 0.87);
    box-shadow: 1px 3px 32px -7px black;
    border-radius:10px;
    text-align: center;
    overflow: hidden;
    img {
        width: 100%;
        border-radius:10px;
        padding: .3rem;
    }
    @media (max-width: 768px){
        width: 100%;
    }
    /* flex-direction: ${({ layout }) => layout || 'column'}; */
`

const CardContent = styled.div `
    text-align: center;
    h3 {
        margin: 2.5rem 0;
        padding: 0 .8rem;
        font-size: 2rem;
        color: #3d3f42;
    }
    p {
        margin: 2.5rem 0;
        padding: 1rem 1.5rem;
        font-size: 1.2rem;
        font-weight: 400;
        color: #343a40;
    }
    .tech {
        margin:  0 1rem;
        padding: 0 2rem 2rem 2rem;
        font-size: .8rem;
        font-weight: 700;
    }
`
const CardLink = styled.div `
    .icon{
        font-size: 2rem;
        color: #343a40;
        margin: 1rem 1rem 2rem 1rem;
        &:hover{
            color: purple;
        }
    }
`
export default Card