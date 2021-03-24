import styled from 'styled-components';
//import {Link} from 'react-router-dom';
//import{ animateScroll as scroll } from "react-scroll";
import * as Scroll from 'react-scroll';



const NavbarPages = () => {
    
    let Link = Scroll.Link;
    
    return (
        <StyledNavContainer>
        
            <h1>
                <Link id = "logo" to="/" smooth = {true} duration = {700} spy = {true}  offset={-225}  >AE</Link>
            </h1>
            <ul>
                <li>
                    <Link to="/" smooth = {true} duration = {700} spy = {true}  offset={-225}  >About me</Link>
                </li>
                <li>
                    <Link to="skills" smooth = {true} duration = {700} spy = {true}  offset={-110} >Skills</Link>
                </li>
                <li>
                    <Link  to="projects" smooth = {true} duration = {700} spy = {true} offset={-115}>Projects</Link>
                </li>
                <li>
                    <Link  to="contact" smooth = {true} duration = {700} spy = {true} offset={-200}>Contact</Link>
                </li>
            </ul>
            
        </StyledNavContainer>
        
)
}

const StyledNavContainer = styled.nav`
    /* margin-top: 35px;
    margin-left: 110vh; */
    min-height: 10vh;
    margin: auto;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    overflow: hidden; 
    padding: 1rem 10rem;
    box-shadow:  0 8px 6px -6px black;
    /* background: #495057; */
    position: fixed;
    top: 0;
  width: 100%;
  animation: moveDown 0.7s ease-in-out;
    
    a {
        font-weight: 700;
        color: whitesmoke;
        text-decoration: none;
        &:hover {
            color: lightgreen;
            transition: all 0.5s ease;
        }
    }
    ul {
        display: flex;
        list-style: none;
        
    }
    #logo {
        font-size: 900;
        font-weight: lighter;
        /* font-family: "Lobster", cursive; */
    }
    li{
        padding-left: 4rem;
        position: relative;
        &.active {
        border-bottom: 2px solid lightgreen;
    }
        
    }
    
`


// const StyledH3 = styled.h3`
//     font-size: lighter;
//     font-weight: 500;
//     &:hover {
//         color: lightgreen;
//         transition: all 0.5s ease;
//     }
// `
export default NavbarPages;

