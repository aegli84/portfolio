import styled from 'styled-components';
//import {Link} from 'react-router-dom';
//import{ animateScroll as scroll } from "react-scroll";
import * as Scroll from 'react-scroll';
import {motion} from 'framer-motion'
import {useLocation} from 'react-router-dom'


const NavbarPages = () => {
    const {active} = useLocation();
    let Link = Scroll.Link;
    
    return (
        <StyledNavContainer>
        
            <h1>
                <Link 
                    id = "logo" 
                    to="/" 
                    smooth = {true} 
                    duration = {700} 
                    spy = {true}  
                    offset={-350}  
                >AE
                </Link>
            </h1>
            <ul>
                <li >
                    <Link 
                        to="/" 
                        smooth = {true} 
                        duration = {700} 
                        spy = {true}  
                        offset={-225}>About me
                    </Link>
                        <NavLine 
                            transition= {{ duration:0.75 }} 
                            initial =  {{ width: "0%" }} 
                            animate = {{ width: active === '/' ? "65%" : '0%'}} />
                </li>
                <li>
                    <Link 
                        to="skills" 
                        smooth = {true} 
                        duration = {700} 
                        spy = {true}  
                        offset={-110} 
                        >Skills
                    </Link>
                        <NavLine 
                            transition= {{ duration:0.75 }} 
                            initial =  {{ width: "0%" }} 
                            animate = {{ width: active === 'skills' ? "65%" : '0%'}} />
                </li>
                <li >
                    <Link 
                        to="projects" 
                        smooth = {true} 
                        duration = {700} 
                        spy = {true} 
                        offset={-115}
                        >Projects
                    </Link>
                    
                </li>
                <li>
                    <Link  activeClassName="underline"
                        to="contact" 
                        smooth = {true} 
                        duration = {700} 
                        spy = {true} 
                        offset={-60}
                        >Contact
                    </Link>
                    
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
        &.active {
        border-bottom: 2px solid lightgreen;
    }
    .underline {
        height: 0.3rem;
    background: #D96ED4;
    width: 0%;
    position: absolute;
    bottom: -80%;
    left: 40%;
    }
}
`
const NavLine = styled(motion.div)`
    height: 0.3rem;
    background: #D96ED4;
    width: 0%;
    position: absolute;
    bottom: -80%;
    left: 40%;
`
export default NavbarPages;

