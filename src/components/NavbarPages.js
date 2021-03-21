import styled from 'styled-components';
import {Link} from 'react-router-dom';

const NavbarPages = () => {
    return (
        <StyledNavContainer className = "container">
            <h1>
                <Link id = "logo" to="/" >AE</Link>
            </h1>
            <ul>
                <li>
                    <Link to="/">About me</Link>
                </li>
                <li>
                    <Link to="/skills">Skills</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
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
    /* overflow: hidden; */
    padding: 1rem 10rem;
    box-shadow:  0 8px 6px -6px black;
    /* background: #495057; */
    
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