import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background: ${({theme}) => theme.colors.base.background};
  }

  button {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, strong {
    font-family: 'Baloo 2', cursive;
    color: ${({theme}) => theme.colors.base.title};
  }

  p, span{
    color: ${({theme}) => theme.colors.base.text};
  }
`