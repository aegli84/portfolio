import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

body {
    background: #1b1b1b;
}

button {
    font-weight: bold;
    font-size: 1rem;
    padding: 1rem 2rem;
    cursor: pointer;
    border: 3px solid grey;
    color: grey;
    transition: all 0.5s ease;
    &:hover {
        background-color: grey;
        color: lightgreen;
    }
}
`;

export default GlobalStyle;