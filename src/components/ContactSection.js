import styled from 'styled-components';
import { motion } from 'framer-motion'
import { useState } from 'react';
import { ScrollSections } from './ScrollSections'
import { fade } from '../animation'

const ContactSection = () => {
    //TO DO!!! 
    //form validation with state hooks DONE 
    //form submission PENDING
    //state object
    const [element, controls] = ScrollSections();

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const [valid, setValid] = useState(false);

    const handleFirstNameInputChange = (event) => {
        setValues((values) => ({
            ...values,
            firstName: event.target.value,
        }));
    };
    const handleLastNameInputChange = (event) => {
        setValues((values) => ({
            ...values,
            lastName: event.target.value,
            
        }));
    };
    const handleEmailInputChange = (event) => {
        setValues((values) => ({
            ...values,
            email: event.target.value,
            
        }));
    };
    const handleMessageInputChange = (event) => {
        setValues((values) => ({
            ...values,
            message: event.target.value,
            
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(values.firstName && values.lastName && values.email && values.message) {
        setValid(true);
        }
        setSubmitted(true);
        //setValues(values);
    };

    return(
        <StyledFormWrapper 
            variants = {fade} 
            animate={controls} 
            initial = 'hidden' 
            ref={element}>
            <StyledH2Contact>Contact me</StyledH2Contact>
            <div className = "form" id="contact">
            <form onSubmit={handleSubmit}>
            {submitted && valid ? <div class='success-message'>SENT! Thank you for your message</div> : null}
                <input 
                    id="first-name"
                    name = "firstName" 
                    type = "text" 
                    // disabled={setSubmitted}
                    placeholder ="First name" 
                    value={values.firstName} 
                    onChange={handleFirstNameInputChange}
                    />
                {submitted && !values.firstName ? <span id="first-name-error">Please enter your first name</span>: null} 
                <input 
                    id="last-name"
                    name = "lastName" 
                    type = "text" 
                    placeholder ="Last name" 
                    value={values.lastName} 
                    onChange={handleLastNameInputChange}
                    />
                {submitted && !values.lastName ?<span id="last-name-error">Please enter your last name</span> : null} 
                <input 
                    id="email"
                    name = "email" 
                    type = "text" 
                    placeholder ="you@email.com" 
                    value={values.email}
                    onChange={handleEmailInputChange}
                    />
                {submitted && !values.email ? <span id="email-error">Please enter your email address</span> :null} 
            </form>
            <textarea 
                className = "textarea"
                type = "text" 
                name = "message" 
                cols = "25" 
                rows = "7" 
                placeholder= "Your message here"
                value={values.message}
                onChange={handleMessageInputChange}>
            </textarea>
            {submitted && !values.message ? <div id="message-error">Please enter your message</div> : null}
            <div>
                <button onClick={handleSubmit} 
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

@media (max-width: 768px){
    margin-top: 30vh;  
    padding: 7rem 2rem;
    }

#contact {
    text-align: center;
}
    form {
        display: block;
        max-width: 30%;
        margin-left: auto;
        margin-right: auto;
        padding: 10px;
    div, span {
        font-family: 'Montserrat', sans-serif;
        font-size: 1rem; 
        font-weight: 600;
        text-align: center;
        padding-top: 1rem;
        padding-bottom: 1rem;
        color:lightgreen;
    }
    span {
        font-weight: 400;
        font-size: .80rem; 
        color: #d14c3d;
    }
    @media (max-width: 768px){
        max-width: 85%;
        }
    }     
    #message-error {
        color: #d14c3d;
        font-weight: 400;
        font-size: .80rem;
    }
    input{
        
        background: #343a40;
        margin-top: 3vh;
        width: 28vw;
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

    @media (max-width: 768px){
        padding-left: 15rem;
        margin-top: 2.2rem;
        width: 70vw; 
        }
    }

    textarea {
        background: #343a40;
        font-family: 'Montserrat', sans-serif;
        font-size: 0.9rem;
        color: whitesmoke;
        cursor: pointer;
        margin-top: 5vh; 
        margin-left: auto;
        margin-right:auto;
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

    @media (max-width: 768px){
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
        margin-left: auto;
        margin-right:auto;
        cursor: pointer;
        border: 1px solid lightgrey;
        color: lightgrey;
        transition: all 0.5s ease;
        outline: none;
        background: #343a40;
        border-radius: 5%;
    &:hover {
        background-color: #23282db9;
        color: lightgreen;
    }
    @media (max-width: 768px){
            margin-left: -1.5vh; 
            padding: 1rem 2rem ;
            width: 35%;
        }
    } 
`
const StyledH2Contact = styled.h2 `
    justify-content: center;
    padding-top: 5vh;
    font-weight: 900;
    color: whitesmoke;
    
@media (max-width: 768px){
    
        margin-top: 1vh;
        padding-top: 2rem;
        padding-bottom: 3vh;
        }
`
export default ContactSection;