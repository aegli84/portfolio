import styled from 'styled-components';
import { NavHashLink as Link } from "react-router-hash-link";
import ScrollIntoView from 'react-scroll-into-view';
import { motion } from 'framer-motion';
import { BsBoxArrowInUpRight } from 'react-icons/bs';

const SideNav = (props) => {
    const { open, setOpen } = props;
    
    return (
        <>
            <Ul open={open}>
                <motion.li whileTap={{scale: 1.1}}>
                    <ScrollIntoView  selector= "#about">
                        <Link to="/about" 
                            onClick={() => setOpen(!open)}>
                            About me
                        </Link>
                    </ScrollIntoView>
                </motion.li>
                <motion.li whileTap={{scale: 1.1}} >
                    <ScrollIntoView selector= "#skills">
                        <Link to="/skills" 
                            onClick={() => setOpen(!open)}>
                            Skills
                        </Link>
                    </ScrollIntoView>
                </motion.li>
                <motion.li whileTap={{scale: 1.1}} >
                    <ScrollIntoView selector= "#projects">
                        <Link to="/projects" 
                            onClick={() => setOpen(!open)}>
                            Projects
                        </Link>
                    </ScrollIntoView>
                </motion.li>
                <motion.li whileTap={{scale: 1.1}} >
                    <ScrollIntoView selector= "#contact">
                        <Link to="/contact" 
                            onClick={() => setOpen(!open)}>
                            Contact
                        </Link>
                    </ScrollIntoView>
                </motion.li>
                <motion.li whileTap={{scale: 1.1}} >
                        <Link to={{pathname:"https://aegli.hashnode.dev/"}} 
                            target={"_blank"} 
                            rel="noopener noreferrer" 
                            onClick={() => setOpen(!open)}>
                            Blog
                            <BsBoxArrowInUpRight className='icon'/>
                        </Link>
                </motion.li>
            </Ul>
            
        </>
    )
}

const Ul = styled.ul`
    li {
        display: none;
    @media (max-width: 768px){
        display: block;
        padding-left: 5rem;
        }
        
    }
    
@media (max-width: 768px) {
    background-color: #081730;
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
    .icon {
        font-size: 1.6rem;
        color: whitesmoke;
        margin-left: .5rem;
        margin-bottom: .7rem;
    }
}`

export default SideNav;