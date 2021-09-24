import * as styled from 'styled-components';
import xoloniumRegular from '../fonts/Xolonium-Regular.woff';
import xoloniumBold from '../fonts/Xolonium-Bold.woff';

const GlobalStyle = styled.createGlobalStyle`
  @font-face {
    font-family: 'Xolonium Regular';
    font-style: normal;
    font-weight: normal;
    src: local('Xolonium Regular'), url(${xoloniumRegular}) format('woff');
  }

  @font-face {
    font-family: 'Xolonium Bold';
    font-style: normal;
    font-weight: normal;
    src: local('Xolonium Bold'), url(${xoloniumBold}) format('woff');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;

    ${({ theme }) => theme.mq.mobile} {
      font-size: 58%;
    }
  }

  body {
    font-family: 'Xolonium Regular', sans-serif;
    background-color: #000000;
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
