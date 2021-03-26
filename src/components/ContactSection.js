import styled from 'styled-components';

const ContactSection = () => {
    return(
        <StyledFormWrapper>
        <StyledH2Contact>Contact me</StyledH2Contact>
        <div className = "form" id="contact">
            <form >
            <h4>First name</h4>
                <input name = "first-name" type = "name" placeholder ="First name" />
                <h4>Last name</h4>
                <input name = "last-name" type = "name" placeholder ="Last name" />
                <h4>E-mail</h4>
                <input name = "email" type = "name" placeholder ="Email" />
            </form>
            {/* <h4>Message</h4> */}
            <textarea type="text" name="message" id="exp" cols="25" rows="6" placeholder="Your message here"></textarea>
            <br/>
            <button id = "submit" type = "submit" value = "submit">Send</button>
        </div>
        </StyledFormWrapper>
    )
}

const StyledFormWrapper = styled.div `
    padding: 5rem ;
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
        padding: 1vh 1vh;
    }
    input{
        background: #495057;
    }
    textarea {
        background: #495057;
        cursor: pointer;
        margin-top: 2vh;
        
    }
    button {
        margin-bottom: 4vh;
    }
`

const StyledH2Contact = styled.h2 `
    margin-left: 70vh;
    /* margin-top: 2vh; */
    /* margin-bottom: -7vh; */
    font-weight: 900;
    color: whitesmoke;
`
export default ContactSection;