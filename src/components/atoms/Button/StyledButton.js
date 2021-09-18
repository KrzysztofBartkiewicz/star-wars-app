import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  position: relative;
  display: inline-block;
  padding: 0.8rem 2rem;
  border-radius: 1rem 0.5rem;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: 0.5s;

  ${({ theme, color, variant }) => {
    const { colors } = theme;
    let cssRules;

    const getBtnColor = () => {
      if (color) {
        cssRules = css`
          background-color: ${colors[color]};
        `;
      }
      if (color === 'primary' || !color) {
        cssRules = css`
          background-color: ${colors.active};
        `;
      }
      if (color === 'secondary') {
        cssRules = css`
          background-color: rgba(0, 0, 0, 0.4);
          border: 1px solid ${colors.white};
        `;
      }
    };
    getBtnColor();
    return cssRules;
  }}

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
  }
`;
