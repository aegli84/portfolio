import styled from 'styled-components';
import {useLocation} from 'react-router-dom'
import { useState } from "react"
// import NavbarPages from './NavbarPages';
import {motion} from 'framer-motion'
import { NavHashLink as Link } from "react-router-hash-link";
import ScrollIntoView from 'react-scroll-into-view'

const RightNav = ({ open }) => {
    
    const [closeSideNav, setCloseSideNav] = useState(false)


    const openHandler = () => {
            if (!closeSideNav) {
                setCloseSideNav(true);
            } else {
                setCloseSideNav(false);
            }
        };
    
    return (
        <Ul open={open} >
            {/* <NavbarPages/> */}
            <li >
                <ScrollIntoView  selector= "#about">
                    <Link  to="/about"  onClick={openHandler}>About me</Link>
                    </ScrollIntoView>
                        
                </li>
                <li>
                <ScrollIntoView selector= "#skills">
                    <Link to="/skills">Skills</Link>
                    </ScrollIntoView>
                        
                            
                </li>
                <li>
                <ScrollIntoView selector= "#projects">
                    <Link to="/projects">Projects</Link>
                    </ScrollIntoView>
                        
                </li>
                <li>
                <ScrollIntoView selector= "#contact">
                    <Link to="/contact">Contact</Link>
                    </ScrollIntoView>
                    
                </li>
        </Ul>
    )
}

const Ul = styled.ul`
    /* list-style: none;
    display: block;
    flex-flow: row nowrap; */
    li {
        display: none;
    @media (max-width: 500px) {
        display: block;
        padding: 3rem 12rem 2rem 1rem;
    }
    }

@media (max-width: 500px) {
    flex-flow: column nowrap;
    background-color: black;
    opacity: 0.98;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 1;
    li {
        color: #fff;
    
    }
    a {
        font-weight: 700;
        color: whitesmoke;
        text-decoration: none;
    }
}`

export default RightNav;