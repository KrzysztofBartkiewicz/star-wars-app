import { css } from 'styled-components';

const colors = {
  blue: (alpha) =>
    typeof alpha === 'object' ? '#106AE0' : `rgba(16,106,224, ${alpha})`,
  red: (alpha) =>
    typeof alpha === 'object' ? '#EC3137' : `rgba(236,49,55, ${alpha})`,
  orange: (alpha) =>
    typeof alpha === 'object' ? '#F1B046' : `rgba(241,179,70, ${alpha})`,
  grey: (alpha) =>
    typeof alpha === 'object' ? '#4D4D4D' : `rgba(77,77,77, ${alpha})`,
  lightGrey: (alpha) =>
    typeof alpha === 'object' ? '#717171' : `rgba(113,113,113, ${alpha})`,
  black: (alpha) =>
    typeof alpha === 'object' ? '#000000' : `rgba(0,0,0, ${alpha})`,
  white: (alpha) =>
    typeof alpha === 'object' ? '#FFFFFF' : `rgba(255,255,255, ${alpha})`,
};

const defaultBoxShape = css`
  box-shadow: inset 5px 5px 5px ${colors.black(0.2)},
    inset -5px -5px 15px ${colors.white(0.1)}, 5px 5px 15px ${colors.black(0.3)},
    -5px -5px 15px ${colors.white(0.1)};
  border-radius: 1.5rem;
  margin: 3rem;
  background-color: ${colors.black(0.5)};
  padding: 2rem;
`;

const mainTheme = {
  colors,
  defaultBoxShape,
  fontSizes: {
    s: '1.4rem',
    l: '1.6rem',
    m: '2rem',
    xl: '8.1rem',
    xxl: '18rem',
  },

  fontWeights: {
    regular: 400,
    bold: 700,
  },

  mixins: {
    view: (bg) => css`
      min-height: 100vh;
      padding-top: 20rem;
      background-image: radial-gradient(
          circle closest-corner at 50% 70%,
          transparent 15%,
          rgba(0, 0, 0, 0.9) 60%
        ),
        url(${bg});
      background-position: center;
      background-size: cover;
      background-attachment: fixed;
      overflow-y: auto;
    `,
    box: css`
      ${defaultBoxShape}
      display: flex;
      align-items: center;
      justify-content: space-around;
    `,
    innerBox: css`
      border-radius: 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: ${colors.grey};
      position: relative;

      &:before {
        content: '';
        border-radius: 1.5rem;
        position: absolute;
        width: 50%;
        height: 100%;
        left: 0;
        background-color: ${colors.lightGrey};
      }
    `,
  },
};

export default mainTheme;
