import styled from 'styled-components'

const FooterSection = () => {
    return (
        <Div>
            <H4>Made with ❤️ by Andreea Egli 2021</H4>
        </Div>
    )
}

const Div = styled.div `
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    text-align: center;

@media (min-width: 320px) and (max-width: 1024px){
        margin-bottom: 2rem;
    }
`
const H4 = styled.h4`
    color: whitesmoke;
    font-weight: lighter;
    font-size: 0.8rem;

@media (max-width: 480px){
        font-size: 1rem; 
        padding-top: 3rem;
        margin-top: 10rem;
    }
`

export default FooterSection;
