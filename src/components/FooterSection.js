import styled from 'styled-components'

const FooterSection = () => {
    return (
        
        <StyledDiv>
            <StyledH4>Made with ❤️ by Andreea Egli 2021</StyledH4>
        </StyledDiv>
    
    )
}

const StyledDiv = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 1rem;

`
const StyledH4 = styled.h4`
    color: whitesmoke;
    font-weight: lighter;
    font-size: 0.8rem;
    margin-bottom: 0;
    /* writing-mode: vertical-rl;
    text-orientation: mixed;  */
`

export default FooterSection;
