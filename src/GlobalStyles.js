import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle `
     * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-margin-top: 25vh;
        
    ${'' /* ::-webkit-scrollbar {
        width: 15px;
    }
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgb(144, 238, 144); 
        -webkit-border-radius: 10px;
        border-radius: 10px;
        // background: transparent;
    }
    ::-webkit-scrollbar-thumb {
        -webkit-border-radius: 20px;
        border-radius: 20px;
        border: transparent;
        background: #90ee90; 
        box-shadow: inset 0 0 6px rgb(144, 238, 144); 
    }
    ::-webkit-scrollbar-thumb:window-inactive {
        background: #0c298a77; 
    } */}
    }

    html {
        overflow-x: hidden;
        @media (max-width: 1200px){
            font-size: 75%;
        }
${'' /*         
        @media (max-width: 1024px){
            font-size: 75%;
        } */}
        
} 

body {
    background: #343a40;
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
`;

export default GlobalStyle;