import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { FiGithub } from 'react-icons/fi';
import { BsBoxArrowUpRight } from 'react-icons/bs';


const Card = ({ item: {  title, body, image, tech, linkgithub, linkdemo } }) => {
    return (
        <>
        <CardContainer >
            <div>
                <img src={image} alt=""/>
            </div>
            <div>
                <h3>{title}</h3>
                <p>{body}</p>
                <h6>{tech}</h6>
            </div>
            <div>
                <Link 
                    to = {{pathname:{linkgithub}}} 
                    target={"_blank"} 
                    rel="noopener noreferrer">
                    <FiGithub/>
                </Link>
                <Link 
                    to = {{pathname:{linkdemo}}} 
                    target={"_blank"} 
                    rel="noopener noreferrer">
                    <BsBoxArrowUpRight/>
                </Link>
            </div>
        </CardContainer>
        </>
    )
}

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    width: 30%;
    background-color: rgba(245, 245, 245, 0.829);
    box-shadow: 1px 3px 32px -7px black;
    border-radius:10px;
    text-align: center;
    /* margin: 40px 0;
    padding: 60px; */
    img {
    width: 100%;
    border-radius:10px;
    padding: .2rem;
  }
    @media (max-width: 768px){
        width: 100%;
    }
    /* flex-direction: ${({ layout }) => layout || 'column'}; */
`
export default Card