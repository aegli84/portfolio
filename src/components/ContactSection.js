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
    min-height: 95vh;
    padding: 6rem;
    margin-top: 2vh;
    text-align: center;
    align-items: center;
    display: block;
    justify-content: center;
    @media (max-width: 1300px){
            margin-top: 30vh;  
            padding: 7rem 2rem;
            
        }
/*     
    form {
        margin-top: 5rem;
        
    }   */
    
    input{
        background: #343a40;
        width: 55vh;
        margin-left: 61vh;
        margin-top: 3vh;
        padding-top: 2vh;
        color: whitesmoke;
        font-size: 0.9rem;
        align-items: center;
        border: none;
        border-bottom: 1px solid lightgreen;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        outline:none;
        display: block;
        justify-content: center;
        &:placeholder-shown {
            padding: 0.5rem 0.5rem;
        } 
        @media (max-width: 1300px){
            margin-left: 6vh; 
            margin-top: 6vh;
            width: 50vh; 
        }
        
    }

    textarea {
        background: #343a40;
        color: whitesmoke;
        cursor: pointer;
        margin-top: 5vh; 
        margin-left: 2vh;
        align-items: center;
        width: 30%;
        border-left: 1.5px solid #495059;
        border-right: 1.5px solid #495059;
        border-top: 1.5px solid #495059;
        border-radius: 5px;
        border-bottom: 1px solid lightgreen;
        outline:none; 
        &:placeholder-shown {
            padding: 0.5rem 0.5rem;
        @media (max-width: 1300px){
            margin-left: 2vh; 
            margin-top: 6vh;
            width: 50vh; 
        }
        } 
    }

    button {
        font-weight: bold;
        font-size: 1rem;
        padding: 1rem 3rem;
        margin-top: 5vh;
        margin-right: 30vh;
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
    @media (max-width: 1300px){
            margin-left: -1.5vh; 
            padding: 1.5rem 4rem 1.5rem 4rem;
        }
    } 
`

const StyledH2Contact = styled.h2 `
    justify-content: center;
    margin-top: 5vh;
    margin-bottom: 3vh;
    font-weight: 900;
    color: whitesmoke;
`
export default ContactSection;