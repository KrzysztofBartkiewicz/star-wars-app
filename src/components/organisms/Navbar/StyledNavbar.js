import styled, { css } from 'styled-components';
import Logo from '../../atoms/Logo';

export const StyledNavbar = styled.nav`
  padding: 7rem 10rem 3rem 10rem;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: padding 0.3s ease-in-out, background-color 0.3s 0.3s ease-in-out;

  ${({ scrollPosition, theme }) =>
    scrollPosition !== 0 &&
    css`
      padding: 1rem 10rem;
      background-color: ${theme.colors.lightGrey(0.97)};
    `}
`;

export const StyledLogo = styled(Logo)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  max-height: 20rem;
  max-width: 30rem;
  transition: max-width 0.3s ease-in-out, max-height 0.3s 0.3s ease-in-out;

  ${({ scrollPosition }) =>
    scrollPosition !== 0 &&
    css`
      max-width: 10rem;
      max-height: 10rem;
    `}
`;

export const StyledNavMenuWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledUserMenuWrapper = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-right: 4rem;
  }
`;
