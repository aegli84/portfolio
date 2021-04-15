import styled from 'styled-components';
import { useState } from "react"
import { NavHashLink as Link } from "react-router-hash-link";
import ScrollIntoView from 'react-scroll-into-view'
import {motion} from 'framer-motion'


const SideNav = (props) => {
    const { open, setOpen } = props;
    
    return (
        <>
        <Ul open={open}>
            <motion.li whileTap={{scale: 1.1}} className = 'slide'>
                <ScrollIntoView  selector= "#about">
                    <Link to="/about" onClick={() => setOpen(!open)}>About me</Link>
                    </ScrollIntoView>
                </motion.li>
                <li>
                <ScrollIntoView selector= "#skills">
                    <Link to="/skills" onClick={() => setOpen(!open)}>Skills</Link>
                    </ScrollIntoView>
                </li>
                <li>
                <ScrollIntoView selector= "#projects">
                    <Link to="/projects" onClick={() => setOpen(!open)}>Projects</Link>
                    </ScrollIntoView>
                </li>
                <li>
                <ScrollIntoView selector= "#contact">
                    <Link to="/contact" onClick={() => setOpen(!open)}>Contact</Link>
                    </ScrollIntoView>
                    
                </li>
        </Ul>
        </>
    )
}

const Ul = styled.ul`
    /* list-style: none;
    display: block;
    flex-flow: row nowrap; */
    li {
        display: none;
    @media (max-width: 500px){
        display: block;
        padding-left: 5rem;
        }
        
    }
@media (max-width: 500px) {
    background-color: #08090af1;
    opacity: 1;
    position: fixed; 
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 10rem;
    transition: transform 0.3s ease-in-out;
    z-index: 1;
    a {
        font-weight: 900;
        font-size: 3rem;
        color: whitesmoke;
        text-decoration: underline;
        text-decoration-color: #d96ed4a6;
        line-height: 5rem;
        height: 4rem;
    }
    
}`

export default SideNav;