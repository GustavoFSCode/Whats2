import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        height: 100vh;
        font-family: 'Segow UI', tahoma, Geneva, Verdana, sans-serif;
    }
`;

export default GlobalStyle;