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
    justify-content: center;
    margin-bottom: 1rem;
    text-align: center;

@media (min-width: 320px) and (max-width: 1024px){
        margin-bottom: 2rem;
    }
`
const StyledH4 = styled.h4`
    color: whitesmoke;
    font-weight: lighter;
    font-size: 0.8rem;

@media (min-width: 320px) and (max-width: 1024px){
        font-size: 1rem; 
        /* margin-top: 1rem; */
    }
`

export default FooterSection;
