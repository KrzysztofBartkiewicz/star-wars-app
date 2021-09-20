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

  ${({ theme }) => theme.mq.desktopSm} {
    padding: 1rem 1rem;
    background-color: ${({ theme }) => theme.colors.lightGrey(0.97)};
  }

  ${({ theme }) => theme.mq.mobile} {
    padding-top: 3rem;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: flex-end;
    height: 100vh;
    transition: transform 0.3s ease-in-out;
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? 'translateX(0)' : 'translateX(-100%)'};
  }
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

  ${({ theme }) => theme.mq.desktopSm} {
    max-width: 10rem;
    max-height: 10rem;
    left: 60%;
  }

  ${({ theme }) => theme.mq.mobile} {
    position: static;
    transform: translateX(0);
  }
`;

export const StyledNavMenuWrapper = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.mq.mobile} {
    flex-direction: column;

    & > * {
      margin-bottom: 3rem;
    }
  }
`;

export const StyledUserMenuWrapper = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-right: 4rem;
  }
  ${({ theme }) => theme.mq.mobile} {
    & > * {
      margin-right: 0;
    }
  }
`;
