import styled from 'styled-components';
import * as Scroll from 'react-scroll';
import {motion} from 'framer-motion'
import {useLocation} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { NavHashLink } from "react-router-hash-link";
// import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import ScrollIntoView from 'react-scroll-into-view'

const NavbarPages = () => {
    
    const { pathname } = useLocation();
    //const NavHashLink = Scroll.Link;

    
    return (
        <StyledNavContainer>
        
            <h1>
            <ScrollIntoView selector = "#about">
                <NavHashLink 
                    id = "logo" 
                    to= "/about" 
                >AE
                </NavHashLink>
                </ScrollIntoView>
            </h1>
            <ul>
                <li>
                <ScrollIntoView selector = "#about"
                >
                    <NavHashLink 
                        to="/about"
                        // smooth = {true} 
                        // duration = {700} 
                        // spy = {true}  
                        // offset={-225}
                        > About me
                    </NavHashLink>
                    </ScrollIntoView>
                        <NavLine 
                            transition= {{ duration:0.75 }} 
                            initial =  {{ width: '0%' }}
                            animate={{ width: pathname === '/about' ? '65%' : "0" }}
                            /> 
                </li>
                <li>
                <ScrollIntoView selector = "#skills">
                    <NavHashLink 
                
                        to="/skills" 
                        // smooth = {true} 
                        // duration = {700} 
                        // spy = {true}  
                        // offset={-110} 
                        >Skills
                    </NavHashLink>
                    </ScrollIntoView>
                        <NavLine 
                            transition= {{ duration:0.75 }} 
                            initial =  {{ width: '0%' }}
                            animate={{ width: pathname === '/skills' ? '75%' : "0" }}
                            /> 
                            
                </li>
                <li >
                <ScrollIntoView selector = "#projects">
                    <NavHashLink 
                        to="/projects" 
                        // smooth = {true} 
                        // duration = {700} 
                        // spy = {true} 
                        // offset={-115}
                        >Projects
                    </NavHashLink>
                    </ScrollIntoView>
                        <NavLine 
                            transition= {{ duration:0.75 }} 
                            initial =  {{ width: '0%' }}
                            animate={{ width: pathname === '/projects' ? '65%' : "0" }}
                            /> 
                </li>
                <li>
                <ScrollIntoView selector = "#contact">
                    <NavHashLink  
                        to="/contact" 
                        // smooth = {true} 
                        // duration = {700} 
                        // spy = {true} 
                        // offset={-60}
                        >Contact
                    </NavHashLink>
                    </ScrollIntoView>
                    <NavLine 
                            transition= {{ duration:0.75 }} 
                            initial =  {{ width: '0%' }}
                            animate={{ width: pathname === '/contact' ? '65%' : "0" }}
                            /> 
                </li>
            </ul>
        </StyledNavContainer>
    )
}

const StyledNavContainer = styled.nav`
    min-height: 10vh;
    /* margin: auto; */
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    overflow: hidden; 
    padding: 1rem 10rem;
    box-shadow:  0 8px 6px -6px black;
    position: fixed;
    top: 0;
    width: 100%;
    

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
        font-size: 900;
        font-weight: lighter;
    }
    li {
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
    bottom: -30%;
    left: 40%;
    
`
export default NavbarPages;

