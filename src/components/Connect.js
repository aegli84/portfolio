import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SiHashnode } from 'react-icons/si';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';



const Connect = () => {
    return (
        <>
            <Icons>
                
                    <Link 
                        to = {{pathname:"https://github.com/aegli84"}} 
                        target={"_blank"} 
                        rel="noopener noreferrer">
                            <FaGithub className='icon' title='github'/>
                    </Link>
                    
                    
                    <Link 
                        to = {{pathname: "https://www.linkedin.com/in/andreeaegli/"}} 
                        target={"_blank"} 
                        rel="noopener noreferrer">
                            <FaLinkedin className='icon' title='linkedin'/>
                    </Link>
                    
                
                    <Link 
                        to = {{pathname:"mailto:egli.andreea@yahoo.com"}} 
                        target={"_blank"} 
                        rel="noopener noreferrer"> 
                            <FaEnvelope className='icon' title='email'/>  
                        </Link>

                    <Link 
                        to = {{pathname:"https://aegli.hashnode.dev/"}} 
                        target={"_blank"} 
                        rel="noopener noreferrer">
                            <SiHashnode className='icon' title='hashnode'/>
                    </Link>
                    
                </Icons>
        </>
    );
};


const Icons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    margin: 2rem 4rem;
    .icon {
        font-size: 2rem;
        color: whitesmoke;
        margin: 1.2rem;
        &:hover {
        color: #3DC9A7;
        transition: all 0.7s ease;
        } 
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