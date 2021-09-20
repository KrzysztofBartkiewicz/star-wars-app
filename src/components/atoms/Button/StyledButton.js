import styled, { css } from 'styled-components';

let cssRules;

export const StyledButton = styled.button`
  position: relative;
  display: inline-block;
  padding: 0.8rem 2rem;
  border-radius: 1rem 0.5rem;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: 0.5s;

  ${({ theme, color, variant, disabled, activeColor }) => {
    const { colors } = theme;

    const getBtnColor = () => {
      if (color) {
        cssRules = css`
          background-color: ${colors[color]};
        `;
      }
      if (color === 'primary' || !color) {
        cssRules = css`
          background-color: ${colors[activeColor]};
        `;
      }
      if (color === 'secondary') {
        cssRules = css`
          background-color: ${colors.black('0.6')};
          border: 1px solid ${colors.white};
        `;
      }
      if (disabled) {
        cssRules = css`
          background-color: ${colors.lightGrey};
          filter: blur(1px);
          cursor: default;
        `;
      }

      if (variant === 'round') {
        cssRules = css`
          width: 3rem;
          height: 3rem;
          padding: 2rem;
          border-radius: 50%;
          background-color: transparent;
          display: flex;
          align-items: center;
          justify-content: space-around;
        `;
      }
    };
    getBtnColor();
    return cssRules;
  }}

  &:hover {
    ${({ disabled, theme, variant, activeColor }) => {
      if (!disabled) {
        if (variant === 'round') {
          return css`
            & > * {
              transition: color 0.3s ease-in-out;
              color: ${theme.colors[activeColor]};
            }
          `;
        } else {
          return css`
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
            background: ${theme.colors.white};
            color: ${theme.colors.black};
          `;
        }
      }
    }}
  }
`;
