
import github from '../assets/github.svg';
import linkedin1 from '../assets/linkedin1.svg';
import email from '../assets/email.svg';
import styled from 'styled-components';

const HomeContactIcons = () => {
    return (
        <div className = "home">
            <StyledDiv1 className = "contact">
                <div className = "icon">
                    <div>
                        <StyledLDiv2>Let's connect</StyledLDiv2>
                    <div>
                        <div></div>
                    </div>
                    <div>
                        <StyledImg src={github} alt="html" width = "20" height = "20"/>
                        <a href = "https://github.com/aegli84" target = "_blank" rel="noreferrer"  />
                    </div>
                    <div>
                        <StyledImg src={linkedin1} alt="html"  width = "20" height = "20"/>
                        <a href = "https://www.linkedin.com/in/andreeaegli/" target = "_blank" rel="noreferrer" />
                    </div>
                    <div>
                        <StyledImg src={email} alt="html"  width = "20" height = "20"/>
                        <a href = "https://github.com/aegli84" target = "_blank" rel="noreferrer" />
                    </div>
                    </div>
                </div>
            </StyledDiv1>
        </div>
    )
}

const StyledImg = styled.img `
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%);
`

const StyledDiv1 = styled.div`
    display: flex;
    align-items: right;
    justify-content: space-around;
    line-height: 2rem;
`

const StyledLDiv2 = styled.div `
    writing-mode: vertical-rl;
    text-orientation: mixed;
    margin-bottom: 2rem;
`


export default HomeContactIcons;

