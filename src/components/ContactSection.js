import styled from 'styled-components';
import Connect from './Connect';
import { useForm, ValidationError } from '@formspree/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactSection = () => {
    AOS.init({
        duration: 1200,
    })

    const [state, handleSubmit] = useForm('mleawqzn')

    if(state.succeeded) {
        return <div>
        <H2>Contact me</H2>
        <P>Thanks! Your message has been sent!</P>
        </div>
    }
    return(
        <>
        <H2>Contact me</H2>
            <DivCon>
                <Connect/>
            </DivCon>
        <FormWrapper 
            data-aos="zoom-in"
            >
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
    </>
    )
}

const DivCon = styled.div`
@media (max-width: 768px){
    display: flex;
    justify-content: center;
    
    }

`

const FormWrapper = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    align-items: center;
    width: 100%;
    form {
        width: 35rem;
        margin: 0 auto;
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
        width: 100%;
        }
    @media (max-width: 480px){
        width: 100%;
        }
    }     
    
    input{
        background: #081730b9;
        margin: .7rem 0;
        width: 28vw;
        padding: 1rem;
        align-items: left;
        display: inline-block;
        text-align: left;
        justify-content: left;
        color: whitesmoke;
        font-size: 0.9rem;
        font-family: 'Montserrat', sans-serif;
        border: none;
        border: 1px solid #2EBA8B;
        border-radius: .4rem;
        outline:none;
    @media (max-width: 768px){
        margin-top: 2.2rem;
        padding: 1rem;
        width: 70vw; 
        font-size: 1.5rem; 
        }
    @media (max-width: 480px){
        margin-top: 1rem;
        width: 82vw; 
        font-size: 1.3rem; 
        }
    }

    textarea {
        background: #081730b9;
        font-family: 'Montserrat', sans-serif;
        font-size: 0.9rem;
        color: whitesmoke;
        cursor: pointer;
        margin-top: 2rem; 
        margin-left: auto;
        margin-right:auto;
        width: 28vw;
        border: 1.5px solid #495059;
        border-radius: .4rem;
        border: 1px solid #2EBA8B;
        outline:none; 
        padding: 1rem;
        @media (max-width: 768px){
            margin-top: 5rem;
            width: 70vw;
            font-size: 1.6rem; 
        }
        @media (max-width: 480px){
            margin-top: 4rem;
            width: 82vw;
            font-size: 1.5rem;
        }
    }
    .button {
        width: 10em;
        font-weight: bold;
        font-size: 1rem;
        padding: 1rem 2.5rem;
        margin: 2rem;
        cursor: pointer;
        border: 1px solid #2EBA8B;
        color: lightgrey;
        transition: all 0.5s ease;
        outline: none;
        background: #081730;
        border-radius: 5rem;
        text-transform: uppercase;
    &:hover {
        background-color:  #3dc9a6d3;
    }
        @media (max-width: 768px){
            font-size: 1.7rem;
            padding: 2rem 1rem;
            width: 11em;
        }
        @media (max-width: 480px){
            font-size: 1.2rem;
            margin-left: 1rem; 
            padding: 1rem 2rem ;
            width: 10em;
        }
    } 
`
const H2 = styled.h2 `
    text-align: center;
    margin-top: 25rem;
    margin-bottom: 7rem;
    font-weight: 900;
    color: whitesmoke;
    
@media (max-width: 768px){
        margin-top: 10vh;
        font-size: 5rem;
    }
@media (max-width: 480px){
        margin-top: 10vh;
        font-size: 3.5rem;
    }
`
const P = styled.p`
    text-align: center;
    color: #3DC9A7;
    padding: 8rem 0rem 21rem ;
    font-weight: 300;
`
export default ContactSection;