import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Arial', sans-serif;
        background-color: #f0f8ff;
        transition: background-color 0.5s ease;
    }
`;

export default GlobalStyle;
