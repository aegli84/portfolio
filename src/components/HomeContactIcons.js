import github from '../assets/github.svg';
import linkedin1 from '../assets/linkedin1.svg';
import email from '../assets/email.svg';

const HomeContactIcons = () => {
    return (
        <div className = "home">
            <div className = "contact">
                <div className = "icon">
                    <ul>
                        <li>Let's connect</li>
                    <li>
                        <div></div>
                    </li>
                    <li>
                        <img src={github} alt="html"  width = "20" height = "20"/>
                        <a href = "https://github.com/aegli84" target = "_blank" />
                    </li>
                    <li>
                        <img src={linkedin1} alt="html"  width = "20" height = "20"/>
                        <a href = "https://www.linkedin.com/in/andreeaegli/" target = "_blank" />
                    </li>
                    <li>
                        <img src={email} alt="html"  width = "20" height = "20"/>
                        <a href = "https://github.com/aegli84" target = "_blank" />
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default HomeContactIcons;