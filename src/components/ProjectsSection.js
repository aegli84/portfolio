import styled from 'styled-components'
import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'

const ProjectsSection = () => {
    return (
        <div>
        <StyledH2Top>Projects</StyledH2Top>
        <StyledDivCards className = "cards" id="projects" >
        
            <StyledDivCard className = "card">
            
                {/* <h3>Project 1</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, delectus.</p> */}
            </StyledDivCard>
            <StyledDivCard  className = "card">
                {/* <h3>Project 2</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, delectus.</p> */}
            </StyledDivCard>
            <StyledDivCard  className = "card">
                {/* <h3>Project 3</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, delectus.</p> */}
            </StyledDivCard>
            <StyledDivCard  className = "card">
                {/* <h3>Project 4</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, delectus.</p> */}
            </StyledDivCard>
            <StyledDivCard  className = "card">
                {/* <h3>Project 5</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, delectus.</p> */}
            </StyledDivCard>
            <StyledDivCard  className = "card">
                {/* <h3>Project 6</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, delectus.</p> */}
            </StyledDivCard>
        </StyledDivCards>
        </div>
    )
}
const StyledDivSection = styled.div`
min-height: 100vh;
`
const StyledDivCards = styled.div `
    padding: 5rem ;
    margin-bottom: 7vh;
    display: grid;
    grid-template-columns:  2fr 2fr 2fr ;
    justify-items: center;
    column-gap: 20px;
    row-gap: 15px;
    justify-content: space-between;
    
`
const StyledH2Top = styled.h2`
    margin-left: 85vh;
    margin-top: 15vh;
    margin-bottom: -7vh;
    font-weight: 900;
    color: whitesmoke;
    /* display: flex;
    align-items: center;
    justify-items: center; */

`

const StyledDivCard = styled.div `
    width: 35vh;
    height: 35vh;
    box-shadow: 0px 7px 7px -5px black;
    &:hover {
        transform: translate3D(0,-1px,0) scale(1.10) ;
        transition: all .5s ease ; 
        cursor: pointer;
        /* zoom: 1;
        filter: alpha(opacity=50);
        opacity: 0.5; */
    }
`

export default ProjectsSection;