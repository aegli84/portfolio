import styled from 'styled-components';
import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'



const ContactSection = () => {
    return(
        
    <StyledFormWrapper  initial = "hidden" animate = "show" exit = "exit">
        
        <StyledH2Contact>Contact me</StyledH2Contact>
        
        <div className = "form" id="contact">
            <form >
            {/* <h4>First name</h4> */}
                <input name = "first-name" type = "name" placeholder ="First name" />
                {/* <h4>Last name</h4> */}
                <input name = "last-name" type = "name" placeholder ="Last name" />
                {/* <h4>E-mail</h4> */}
                <input name = "email" type = "name" placeholder ="you@email.com" />
            </form>
            {/* <h4>Message</h4> */}
            <textarea type="text" name="message" id="exp" cols="25" rows="7" placeholder="Your message here"></textarea>
            <button id = "submit" type = "submit" value = "submit">Send</button>
        </div>
        
    </StyledFormWrapper>
    )
}

const StyledFormWrapper = styled(motion.div) `
    padding: 4rem ;
    margin-bottom: 4vh;
    text-align: left;
    
    form, textarea, button {
        display: inline-block;
        margin-left: 25%;
        margin-right:25%;
        width: 50%;
    }
    h4 {
        font-weight: 400;
        color: white;
        margin-left: 13rem;
        padding: 1vh 1vh;
    }
    input{
        background: #343a40;
        width: 58%;
        margin-left: 9.5rem;
        margin-top: 3vh;
        padding-top: 2rem;
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
    }

    textarea {
        background: #343a40;
        color: whitesmoke;
        cursor: pointer;
        margin-top: 8vh;
        margin-left: 65vh;
        width: 30%;
        border-left: 1.5px solid #495059;
        border-right: 1.5px solid #495059;
        border-top: 1.5px solid #495059;
        border-radius: 5px;
        border-bottom: 1px solid lightgreen;
        outline:none; 
        &:placeholder-shown {
            padding: 0.5rem 0.5rem;
            
        } 
    }

    button {
        width: 8%;
        height: 6vh;
        margin-left: 31.5rem;
    }
`

const StyledH2Contact = styled.h2 `
    margin-left: 70vh;
    margin-top: 5vh;
    margin-bottom: 3vh;
    font-weight: 900;
    color: whitesmoke;
`
export default ContactSection;