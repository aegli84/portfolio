const ContactForm = () => {
    return(
        <div className = "form">
            <h2>Contact me</h2>
            <form >
            <h4>First name</h4>
                <input name = "first-name" type = "name" placeholder ="First name" />
                <h4>Last name</h4>
                <input name = "last-name" type = "name" placeholder ="Last name" />
                <h4>E-mail</h4>
                <input name = "email" type = "name" placeholder ="Email" />
            </form>
            <h4>Message</h4>
            <textarea type="text" name="message" id="exp" cols="25" rows="6" placeholder="Your message here"></textarea>
            <br/>
            <button id = "submit" type = "submit" value = "submit">Send</button>
        </div>
    )
}

export default ContactForm;