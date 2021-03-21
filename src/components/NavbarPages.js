import styled from 'styled-components';

const NavbarPages = () => {
    return (
        <StyledNavContainer className = "container">
            <h1>
                <a id = "logo" href="#" >AE</a>
            </h1>
            <ul>
                <li className = "about-me">
                    <a href = "#">About me</a>
                </li>
                <li>
                    <a href = "#">Skills</a>
                </li>
                <li>
                    <a href = "#">Projects</a>
                </li>
                <li>
                    <a href = "#">Contact</a>
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