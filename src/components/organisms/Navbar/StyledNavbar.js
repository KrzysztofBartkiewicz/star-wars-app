import styled from 'styled-components';
import Logo from '../../atoms/Logo';

export const StyledNavbar = styled.nav`
  padding: 7rem 10rem 3rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
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
