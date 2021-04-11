import styled from 'styled-components';
import {motion} from 'framer-motion'




const ContactSection = () => {
    return(
        
    <StyledFormWrapper  initial = "hidden" animate = "show" exit = "exit">
        
        <StyledH2Contact>Contact me</StyledH2Contact>
        
        <div className = "form" id="contact">
            <form>
                <input name = "first-name" type = "name" placeholder ="First name" />
                <input name = "last-name" type = "name" placeholder ="Last name" />
                <input name = "email" type = "email" placeholder ="you@email.com" />
            </form>
            <textarea 
                className = "textarea"
                type = "text" 
                name = "message" 
                cols = "25" 
                rows = "7" 
                placeholder= "Your message here">
            </textarea>
            <div>
                <button 
                    className = "button"
                    id = "submit" 
                    type = "submit" 
                    value = "submit"
                    >Send
                </button>
            </div>
        </div>
        
    </StyledFormWrapper>
    )
}

const StyledFormWrapper = styled(motion.div) `
    min-height: 90vh;
    margin-top: 10vh;
    padding-top: 2rem;
    text-align: center;
    align-items: center;
    display: block;
    justify-content: center;
@media (max-width: 1024px){
    margin-top: 30vh;  
    padding: 7rem 2rem;
    }
@media (max-width: 500px){
    margin-top: 0;
    padding-bottom: 2rem;
    }

    form {
        display: block;
        justify-content: center;
        align-items: center;
        padding: 1rem 15rem 0 32rem;
        width: 20vw;
    @media (max-width: 1024px){
        /* padding: .5rem 2rem; */
        }
    @media (max-width: 500px){
        padding: 0.5rem 2rem;
        width: 20vw;
        }
    }     
    
    input{
        background: #343a40;
        margin-top: 3vh;
        width: 30vw;
        padding-top: 2vh;
        align-items: center;
        display: block;
        justify-content: center;
        color: whitesmoke;
        font-size: 0.9rem;
        border: none;
        border-bottom: 1px solid lightgreen;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        outline:none;
        
        &:placeholder-shown {
            padding: 0.5rem 0.5rem;
        } 
    @media (max-width: 1024px){
        /* margin-left: 18vh;  */
        padding-left: 5rem;
        margin-top: 6vh;
        width: 29vw; 
        }
    @media (max-width: 500px){
        /* margin-left: 5vh;  */
        margin-top: 2.2rem;
        /* padding-left: 5rem; */
        width: 74vw;
        }
        
    }

    textarea {
        background: #343a40;
        font-family: 'Montserrat', sans-serif;
        font-size: 0.9rem;
        color: whitesmoke;
        cursor: pointer;
        margin-top: 5vh; 
        margin-left: 2vh;
        align-items: center;
        width: 30vw;
        border-left: 1.5px solid #495059;
        border-right: 1.5px solid #495059;
        border-top: 1.5px solid #495059;
        border-radius: 5px;
        border-bottom: 1px solid lightgreen;
        outline:none; 
        &:placeholder-shown {
            padding: 0.5rem 0.5rem;
        } 
    @media (max-width: 500px){
        margin-left: 0.5rem; 
        margin-top: 2rem;
        width: 75vw;
        }
    }

    button {
        font-weight: bold;
        font-size: 1rem;
        padding: 1rem 2.5rem;
        margin-top: 5vh;
        margin-right: 35vh;
        cursor: pointer;
        border: 1px solid darkgrey;
        color: darkgrey;
        transition: all 0.5s ease;
        outline: none;
        background: #495057;
        border-radius: 5%;
    &:hover {
        background-color: #343a40 ;
        color: lightgreen;
    }
    @media (max-width: 1024px){
            margin-left: -1.5vh; 
            padding: 1rem 2rem ;
        }
    @media (max-width: 500px){
        margin-left: 2.2rem;
        width: 35vw;
        font-size: 1.3rem;
        padding: 1rem;
        }
    } 
`

const StyledH2Contact = styled.h2 `
    justify-content: center;
    padding-top: 5vh;
    font-weight: 900;
    color: whitesmoke;
@media (max-width: 500px){
    
        margin-top: 1vh;
        padding-top: 2rem;
        padding-bottom: 3vh;
        }
`
export default ContactSection;