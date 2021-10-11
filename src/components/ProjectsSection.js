import styled from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css';
import contentCard from '../Content'
import Card from '../components/Card'

const ProjectsSection = () => {
    AOS.init({
        duration: 1200,
    })
    return (
        <>
            <H2>Projects</H2>
                <ProjectContainer className = "cards" id="projects" > 
                    {contentCard.map((item) => (
                    <Card key={item.id} item={item}/>
                    ))}
                </ProjectContainer>
        </>
    )
}


const ProjectContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    
    gap: 1rem;
    align-items: center;
    align-content: center;
    justify-content: space-around;
    margin: 3rem;
    @media (max-width: 768px){
        grid-template-columns: auto;
        gap: 3rem;
        margin: .5rem;
    }
`


// const Card = styled.div`
//     width: 24%;
//     height: 71vh;
//     box-shadow: 1px 3px 32px -7px black;
//     border-radius:10px;
//     text-align: center;
//     margin: 1.5rem;
//     background: rgba(245, 245, 245, 0.829); 
//     overflow: hidden;
//     padding: .2rem;
    
//     &:hover {
//         border: 1px solid rgba(245, 245, 245, 0.829);
//         box-shadow:0px 15px 30px #515861;
        
//     }
// @media (max-width: 1502px){
//         width: 29vw;
//         height: 87vh;
//         margin: 2vh;
//     }
//     @media (max-width: 768px){
//         width: 71vw;
//         height: 70vh;
//     }
// @media (max-width: 480px){
//     height: 65vh;
//     width: 90vw;
//     font-size: 1.8rem;
//     margin: 1.5rem;
//     } 
    
//     img {
//         height: 29px;
//         width: 330px;
//         /* object-fit: scale-down; */
//         /* object-position: 100%; */
//         border-radius:10px;
// @media (max-width: 1502px){
//     height: 40vh;
//     } 
// @media (max-width: 768px){
//         width: 100%;
//         height: 35vh;
//     } 
// @media (max-width: 480px){
//         width: 100%;
//         height: 25vh;
//         }
//     }
    
// `
const H2 = styled.h2`
    font-weight: 900;
    color: whitesmoke;
    text-align: center;
    margin-bottom: 2em;
    margin-top: 2em;
@media (max-width: 768px){
        margin-top: 2vh;
        margin-bottom: 7vh;
        font-size: 5rem;
    }
@media (max-width: 480px){
        margin-top: 10vh;
        margin-bottom: 7vh;
        font-size: 3.5rem;
    }  
`
// const H3 = styled.h3`
//     margin-top: 1em;
//     color: #343a40;
//     font-size: 1.7rem;
// @media (max-width: 1024px){
//         font-size: 2.1vh;
//     }
// @media (max-width: 768px){
//         font-size: 2.5vh;
//     }
    
// `
// const H6 = styled.h6`
//     margin-top: 0.9rem;
//     display: inline-block;
//     align-items: left;
//     padding: 0.4rem;
//     font-weight: bolder;
//     font-size: 0.7rem;
//     color: #343a40;
// @media (max-width: 768px){
//         font-size: 1.3vh;
//     }
// @media (max-width: 480px){
//         font-size: 1.4vh;
//         padding-bottom: 1rem;
//     }
// `
// const Para = styled.p`
//     font-weight: 400;
//     font-size: 1rem;
//     margin-top: 2em;
//     margin-bottom: 1em;
//     margin-left: 0.9rem;
//     margin-right: 0.9rem;
//     color: #343a40;
// @media (max-width: 1024px){
//         font-size: 1.4vh;
//     }
// @media (max-width: 768px){
//         font-size: 1.8vh;
//     }
// `

export default ProjectsSection;