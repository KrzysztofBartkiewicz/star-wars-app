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

  &:hover {
    box-shadow: ${({ theme, disabled }) =>
      !disabled && `0 10px 20px ${theme.colors.black(0.6)}`};
    background: ${({ theme, disabled }) => !disabled && theme.colors.white};
    color: ${({ theme, disabled }) => !disabled && theme.colors.black};
  }

  ${({ theme, color, variant, disabled, activeColor, active }) => {
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

          &:hover {
            background-color: transparent;
            & > * {
              transition: color 0.3s ease-in-out;
              color: ${theme.colors[activeColor]};
            }
          }
        `;
      }
      if (variant === 'hamburger') {
        const bar = css`
          content: '';
          min-width: ${active ? '3.5rem' : '5rem'};
          height: .8rem;
          border-radius: 1rem 0.5rem;
          border: 1px solid ${colors.grey};
          background-color: ${colors[activeColor]};
          position: absolute;
          left: calc(50% - 5rem / 2);
          transition transform .3s ease-in-out;
        `;
        cssRules = css`
          width: 6rem;
          height: 5rem;
          position: relative;
          border-radius: ${active ? '1rem 0.5rem' : '0.5rem 1rem'} ;
          background-color: transparent;
          border: 3px solid ${colors.grey};
          padding: 0 3rem;
          transition border-radius .3s ease-in-out;
          display: none;
          position: fixed;
          top: 2rem;
          left: 2rem;
          z-index: 1500;

          &:active, &:hover, &:focus {
            background-color: transparent;
          }

          ${({ theme }) => theme.mq.mobile} {
            display: block;
          }

          &:before {
            ${bar}
            top: 1rem;
            transform: ${active && ' translate(1.6rem, 0.7rem)  rotate(90deg)'};
          }
          &:after {
            ${bar}
            bottom: 1rem;
            transform: ${
              active && ' translate(-0.5rem, -0.7rem)  rotate(90deg)'
            };
          }
        `;
      }
    };
    getBtnColor();
    return cssRules;
  }}
`;
