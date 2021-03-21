import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle `
     * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    } 

body {
    background: #495057;
    font-family: 'Montserrat', sans-serif;
}

button {
    font-weight: bold;
    font-size: 1rem;
    padding: 1rem 2rem;
    margin-top: 2.5rem;
    cursor: pointer;
    border: 1px solid darkgrey;
    color: grey;
    transition: all 0.5s ease;
    &:hover {
        background-color: #575a5e ;
        color: lightgreen;
    }
    
    background: #495057;
    border-radius: 5%;
    box-shadow: 9.91px 9.91px 15px #495057
    , -9.91px -9.91px 15px #495057;

}

h2 {
    font-weight: bold;
    font-size: 3rem;
}

h3 {
    color: whitesmoke;
}
p {
        font-weight: lighter;
        font-size: 1.4rem;
        line-height: 150%;
}
`;

export default GlobalStyle;