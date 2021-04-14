import styled from 'styled-components'
import { useState } from "react"
import SideNav from './SideNav';


const BurgerMenu = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <StyledLogo >ae.</StyledLogo>
                <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <SideNav open={open}/>
        </>
    )
};


const StyledBurger = styled.div`
    display: none;
    
@media (max-width: 500px) {
    width: 4rem;
    height: 2rem;
    position: fixed;
    top: 7vh;
    right: 5vh;
    z-index: 20;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    
    div {
        width: 3rem;
        height: 0.27rem;
        background-color: ${({ open }) => open ? 'lightgreen' : '#d96ed4bb'};
        opacity: 0.6;
        border-radius: 15px;
        transform-origin: 1px;
        transition: all 0.3s linear;
        &:nth-child(1) {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
        transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({ open }) => open ? 0 : 1};
        }
        &:nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }}
}
`
const StyledLogo = styled.div`
    display: none;  
    @media (max-width: 500px){
        display: block;
        font-weight: 800;
        font-size: 2.9rem;
        color: whitesmoke;
        margin-top: 6vh;
        margin-left: 4rem;
    } 
    `


export default BurgerMenu;