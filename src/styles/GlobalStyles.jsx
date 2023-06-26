import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Shantell Sans', cursive;
    }
    body{
        font-size:1.5rem;
        background: ${({ theme }) => theme.colors.second}
    }
`;
