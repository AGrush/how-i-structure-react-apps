import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url('../../assets/fonts) format('woff2');
  };
  body {
    font-family: 'Roboto';
    max-width: 100vw;
    height: 100vh;
    overflow-y: hidden;
    margin: 0;
    padding: 40px;
  }
`;