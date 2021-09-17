import { css } from 'styled-components';

const mainTheme = {
  colors: {
    blue: '#106ae0',
    red: '#ec3137',
    orange: '##F1B346',
    grey: '#4d4d4d',
    lightGrey: '#717171',
    black: '#000000',
    white: '#ffffff',
    active: '#ec3137',
  },

  fontSizes: {
    s: '1.4rem',
    l: '1.6rem',
    xl: '8.1rem',
    xxl: '18rem',
  },

  fontWeights: {
    regular: 400,
    bold: 700,
  },

  mixins: {
    view: (bg) => css`
      height: 100vh;
      background-image: radial-gradient(
          circle closest-corner at 50% 70%,
          transparent 15%,
          rgba(0, 0, 0, 0.9) 60%
        ),
        url(${bg});
      background-position: center;
      background-size: cover;
    `,
  },
};

export default mainTheme;
