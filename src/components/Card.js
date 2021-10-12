import styled from 'styled-components'
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
            <Flex>
                    <h3>{title}</h3>
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
            </Flex>
                
                    <p>{body}</p>
                
                <pre>{tech}</pre>
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
    background-color: rgba(255, 255, 255, 0.972);
    box-shadow: 1px 3px 32px -7px black;
    border-radius:10px;
    text-align: center;
    overflow: hidden;
    img {
        width: 97%;
        border-radius:   10px;
        margin-top: .7rem; 
        box-shadow: 1px 3px 32px -1px black;
    }
    @media (max-width: 768px){
        width: 100%;
    }
`
const Flex = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 411px){
        flex-direction: column;
    }
`
const CardContent = styled.div `
    text-align: left;
    h3 {
        margin: 1rem;
        padding: 1rem;
        font-size: 2rem;
        color: #3d3f42;
    }
    p {
        margin: 1rem;
        padding: 1rem;
        font-size: 1.2rem;
        font-weight: 400;
        color: #343a40;
        @media (max-width: 768px){
            font-size: 1.8rem;
    }
    @media (max-width: 480px){
            font-size: 1rem;
    }
    }
    pre {
        margin: 1rem ;
        padding: 1rem;
        font-size: 1rem;
        font-weight: 700;
        @media (max-width: 768px){
            font-size: 1.6rem;
    }
    @media (max-width: 480px){
            font-size: 1.1rem;
    }
    }
`
const CardLink = styled.div `

    .icon{
        font-size: 2rem;
        color: #343a40;
        margin: 2.5rem 2rem 1rem .5rem;
        @media (max-width: 411px){
            margin: .7rem 1rem 1rem 2rem;
    }
        &:hover{
            color: rgba(255, 0, 255, 0.513);
            transition: all 0.5s ease;
        }
    }
`
export default Card