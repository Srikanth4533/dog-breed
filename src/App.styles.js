import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 18px;
    background: ${props => props.theme.secondary};
    color: ${props => props.theme.mainFont};
    min-height: 100vh;
    font-family: 'Poppins', sans-serif;
  }
`