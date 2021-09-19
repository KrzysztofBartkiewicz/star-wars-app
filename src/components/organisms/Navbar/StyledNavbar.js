import styled, { css, keyframes } from 'styled-components';
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
  transition: padding 0.3s ease-in-out;

  ${({ scrollPosition }) =>
    scrollPosition !== 0 &&
    css`
      padding: 2rem 10rem;
    `}
`;

export const StyledLogo = styled(Logo)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
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
