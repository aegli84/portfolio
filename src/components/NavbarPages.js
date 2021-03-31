import styled from 'styled-components';
import * as Scroll from 'react-scroll';
import {motion, AnimatePresence} from 'framer-motion'
import {useLocation} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const NavbarPages = () => {
    // const {pathname} = window.location;
    const [activeLine, setActiveLine] = useState();

    const defaultState = {
        opacity: 0,
    };

    let Tabs = Scroll.Link;
    
    return (
        <StyledNavContainer>
        
            <h1>
                <Tabs 
                    id = "logo" 
                    to="/" 
                    smooth = {true} 
                    duration = {700} 
                    spy = {true}  
                    offset={-350}  
                >AE
                </Tabs>
            </h1>
            <ul>
                <li >
    
                    <Tabs onClick = {() =>setActiveLine(!activeLine)}
                        to="/" 
                        smooth = {true} 
                        duration = {700} 
                        spy = {true}  
                        offset={-225}>About me
                    </Tabs>
                        <NavLine 
                            // initial={defaultState}
                            // exit={defaultState}
                            transition= {{ duration:0.75 }} 
                            initial={{defaultState}}
                            exit={{defaultState}}
                            animate={{ width: activeLine ? "65%" : "0" }}
                            />
                </li>
                <li>
                    <Tabs onClick = {() =>setActiveLine(!activeLine)}
                        to="skills" 
                        smooth = {true} 
                        duration = {700} 
                        spy = {true}  
                        offset={-110} 
                        >Skills
                    </Tabs>
                        <NavLine 
                            transition= {{ duration:0.75 }} 
                            initial =  {{ width: "0%" }} 
                            animate={{ width: activeLine ? "65%" : "0" }}
                            />
                </li>
                <li >
                    <Tabs 
                        to="projects" 
                        smooth = {true} 
                        duration = {700} 
                        spy = {true} 
                        offset={-115}
                        >Projects
                    </Tabs>
                    
                </li>
                <li>
                    <Tabs  
                        to="contact" 
                        smooth = {true} 
                        duration = {700} 
                        spy = {true} 
                        offset={-60}
                        >Contact
                    </Tabs>
                    
                </li>
            </ul>
            
        </StyledNavContainer>
    )
}

const StyledNavContainer = styled.nav`
    min-height: 10vh;
    margin: auto;
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
    &:hover {
        height: 0.2rem;
    background: #D96ED4;
    opacity: 0.6;
    width: 0%;
    position: absolute;
    bottom: -30%;
    left: 40%;
    }
`
export default NavbarPages;

