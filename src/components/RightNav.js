import styled from 'styled-components';

const RightNav = ({ open }) => {
    return (
        <Ul open={open}>
            
        </Ul>
    )
}

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    li {
    padding: 10px 10px;
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
    }
` 
export default RightNav;