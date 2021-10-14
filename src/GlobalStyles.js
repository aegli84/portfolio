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
        background-color: #081730;
        font-family: 'Montserrat', sans-serif;
        overflow-x: hidden;
        width: 100%;
        
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
    ::-webkit-scrollbar {
        width: 12px;
        z-index: -1;
    }
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.363); 
        -webkit-border-radius: 10px;
        border-radius: 10px;
        z-index: -1;
    }
    ::-webkit-scrollbar-thumb {
        -webkit-border-radius: 10px;
        border-radius: 10px;
        background:#4230649a;
        box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
        z-index: -1;
    }
    ::-webkit-scrollbar-thumb:window-inactive {
        background:#6e52a5b4;
        z-index: -1;
    }

`;

export default GlobalStyle;