import styled from 'styled-components';
import {motion} from 'framer-motion'
import {useLocation} from 'react-router-dom'
import { NavHashLink as Link } from "react-router-hash-link";
import ScrollIntoView from 'react-scroll-into-view'


const NavbarPages = () => {
    
    const { pathname } = useLocation();
    

    return (
        <StyledNavContainer>
        
            <h1>
                <ScrollIntoView selector= "#about">
                    <Link id = "logo" to= "/about">ae</Link>
                </ScrollIntoView>
            </h1>
            <ul>
                <li>
                <ScrollIntoView selector= "#about">
                    <Link to="/about">About me</Link>
                    </ScrollIntoView>
                        <NavLine 
                            transition= {{ duration:0.75 }} 
                            initial =  {{ width: '0%' }}
                            animate={{ width: pathname === '/about' ? '65%' : "0" }}
                            /> 
                </li>
                <li>
                <ScrollIntoView selector= "#skills">
                    <Link to="/skills">Skills</Link>
                    </ScrollIntoView>
                        <NavLine 
                            transition= {{ duration:0.75 }} 
                            initial =  {{ width: '0%' }}
                            animate={{ width: pathname === '/skills' ? '77%' : "0" }}
                            /> 
                            
                </li>
                <li>
                <ScrollIntoView selector= "#projects">
                    <Link to="/projects">Projects</Link>
                    </ScrollIntoView>
                        <NavLine 
                            transition= {{ duration:0.75 }} 
                            initial =  {{ width: '0%' }}
                            animate={{ width: pathname === '/projects' ? '70%' : "0" }}
                            /> 
                </li>
                <li>
                <ScrollIntoView selector= "#contact">
                    <Link to="/contact">Contact</Link>
                    </ScrollIntoView>
                    <NavLine 
                            transition= {{ duration:0.75 }} 
                            initial =  {{ width: '0%' }}
                            animate={{ width: pathname === '/contact' ? '70%' : "0" }}
                            /> 
                </li>
            </ul>
        </StyledNavContainer>
    )
}

const StyledNavContainer = styled.nav`
    min-height: 10vh;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    overflow: hidden; 
    padding: 1rem 10rem;
    box-shadow:  0 8px 6px -6px black;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    a {
        font-weight: 700;
        color: whitesmoke;
        text-decoration: none;
    }
    ul {
        display: flex;
        list-style: none;
    }
    #logo {
        font-weight: 800;
        font-size: 2.5rem;
    } 
    li {
        margin-bottom: 0.5rem;
        padding-left: 4rem;
        position: relative;
}
`
const NavLine = styled(motion.div)`
    height: 0.2rem;
    background: #D96ED4; 
    opacity: 0.6;
    width: 0%;
    position: absolute;
    bottom: -35%;
    left: 40%;
    
`
export default NavbarPages;

