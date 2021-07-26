import styled from 'styled-components';
import { motion } from 'framer-motion'
import { ScrollSections } from './ScrollSections'
import { fade } from '../animation'
import { useForm, ValidationError } from '@formspree/react';

const ContactSection = () => {

    const [element, controls] = ScrollSections();

    const [state, handleSubmit] = useForm('mleawqzn')

    if(state.succeeded) {
        return <div>
        <H2>Contact me</H2>
        <P>Thanks! Your message has been sent!</P>
        </div>
    }

    return(
        <FormWrapper 
            variants = {fade} 
            animate={controls} 
            initial = 'hidden' 
            ref={element}>
            <H2>Contact me</H2>
            <div className = "form" id="contact">
            <form onSubmit={handleSubmit}>
                <input 
                    id="name"
                    name = "name" 
                    type = "text" 
                    placeholder ="Full Name" 
                    required= {true}
                    />
                    <ValidationError 
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                    />
                <input 
                    id="email"
                    name = "email" 
                    type = "text" 
                    placeholder ="you@email.com" 
                    required= {true}
                    />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                <input 
                    type="text" 
                    name="_gotcha" 
                    style= {{display:'none'}} 
                    />
                <textarea 
                    id = "message"
                    type = "text" 
                    name = "message" 
                    cols = "25" 
                    rows = "7" 
                    placeholder= "Your message here"
                    required= {true}
                    >
                </textarea>
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                        />
                <button 
                    className = "button"
                    id = "submit" 
                    type = "submit" 
                    value = "submit"
                    disabled={state.submitting}
                    >Send
                </button>
            </form>
        </div>
    </FormWrapper>
    )
}

const FormWrapper = styled(motion.div) `
    height: 90vh;
    margin-top: 10vh;
    padding-top: 2rem;
    padding-bottom: 2rem;
    text-align: center;
    align-items: center;
    display: block;
    justify-content: center;

@media (max-width: 768px){
    margin-top: 10vh;  
    padding: 7rem 2rem;
    }
@media (max-width: 480px){
    margin-top: 5rem;  
    margin-bottom: 7rem;
    padding: 7rem 2rem;
    }

    form {
        max-width: 27%;
        margin: auto;
        text-align: left;
    div, span {
        font-family: 'Montserrat', sans-serif;
        font-size: 1rem; 
        font-weight: 300;
        text-align: left;
        padding-top: 1rem;
        padding-bottom: 1rem;
        color: red;
    }
    @media (max-width: 768px){
        max-width: 75%;
        }
    @media (max-width: 480px){
        max-width: 82%;
        }
    }     
    
    input{
        background: #343a40;
        margin-top: 3vh;
        width: 28vw;
        padding-top: 2vh;
        align-items: left;
        display: inline-block;
        text-align: left;
        justify-content: left;
        color: whitesmoke;
        font-size: 0.9rem;
        border: none;
        border-bottom: 1px solid lightgreen;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        outline:none;
        &:placeholder-shown {
            padding: 0.8rem 0.5rem;
        } 

    @media (max-width: 768px){
        margin-top: 2.2rem;
        width: 70vw; 
        border-bottom: 2px solid lightgreen;
        }
    @media (max-width: 480px){
        margin-top: 2.5rem;
        width: 70vw; 
        }
    }

    textarea {
        background: #343a40;
        font-family: 'Montserrat', sans-serif;
        font-size: 0.9rem;
        color: whitesmoke;
        cursor: pointer;
        margin-top: 7vh; 
        margin-left: auto;
        margin-right:auto;
        width: 28vw;
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
        margin-top: 5rem;
        width: 70vw;
        height: 15rem;
        border-bottom: 2px solid lightgreen;
        }
    @media (max-width: 480px){
        margin-top: 4rem;
        width: 69vw;
        }
    }
    

    .button {
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
        font-size: 1.7rem;
            margin-left: 1.5vh; 
            padding: 2rem;
            width: 30%;
        }
        @media (max-width: 480px){
            font-size: 1.2rem;
            margin-left: 1rem; 
            padding: 1rem 2rem ;
            width: 45%;
        }
    } 
`
const H2 = styled.h2 `
    text-align: center;
    padding-top: 5vh;
    font-weight: 900;
    color: whitesmoke;
    margin-bottom: 5rem;
@media (max-width: 768px){
        margin-top: 1vh;
        padding-top: 2rem;
        padding-bottom: 3vh;
        font-size: 5rem;
    }
@media (max-width: 480px){
        padding-bottom: .5rem;
        font-size: 3.5rem;
    }
`
const P = styled.p`
    text-align: center;
    color: lightgreen;
    padding: 8rem 0rem 21rem ;
    font-weight: 300;
`
export default ContactSection;