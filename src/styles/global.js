import * as styled from 'styled-components';

const GlobalStyle = styled.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Open Sans', sans-serif;
  }

  button,
  input,
  textarea {
    font-family: inherit;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
