import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
     * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-margin-top: 25vh;
    }
    html {
        overflow-x: hidden;
        @media (max-width: 1200px){
            font-size: 75%;
        }
    } 
    body {
        background: #343a40;
        font-family: 'Montserrat', sans-serif;
        overflow-x: hidden;
        
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