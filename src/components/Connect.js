import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Connect = () => {
    return (
        <>
                <Icons>
                <Space>
                    <Link 
                        to = {{pathname:"https://github.com/aegli84"}} 
                        target={"_blank"} 
                        rel="noopener noreferrer">
                            <FontAwesomeIcon 
                                className = "github" 
                                size = "lg"
                                color = "whitesmoke"
                                transform="down-1 grow-5.5" 
                                fixedWidth
                                icon = {faGithub}/>
                    </Link>
                    </Space>
                    <Space>
                    <Link 
                        to = {{pathname: "https://www.linkedin.com/in/andreeaegli/"}} 
                        target={"_blank"} 
                        rel="noopener noreferrer">
                            <FontAwesomeIcon 
                                className = "linkedin" 
                                size = "lg"
                                color = "whitesmoke"
                                transform="down-2 grow-5.6" 
                                fixedWidth
                                icon = {faLinkedin}/>
                    </Link>
                    </Space>
                    <Space>
                    <Link 
                        to = {{pathname:"mailto:aegli@ymail.com"}} 
                        target={"_blank"} 
                        rel="noopener noreferrer"> 
                            <FontAwesomeIcon 
                                className = "email" 
                                size = "lg"
                                color = "whitesmoke"
                                transform="down-1 grow-4" 
                                fixedWidth
                                icon = {faEnvelope}/>  
                        </Link>
                    </Space>
                    </Icons>
        </>
    );
};

const Space = styled.div`
    margin: 2rem;
`
const Icons = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 2rem 4rem;

    .github:hover {
        color: #3DC9A7;
        transition: all 0.7s ease;
    } 
    .linkedin:hover {
        color: #3DC9A7;
        transition: all 0.7s ease;
    } 
    .email:hover {
        color: #3DC9A7;
        transition: all 0.7s ease;
    }
    
@media (max-width: 1502px){
    font-size: 1.2rem;
    margin-top: 5rem;
    } 
    
@media (max-width: 480px){
    font-size: 1.5rem;
    } 
`
export default Connect;