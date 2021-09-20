import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const activeClassName = 'active-link';

export const StyledUnderline = styled.div`
  width: 40%;
  height: 2px;
  background-color: ${({ theme, activeColor }) => theme.colors[activeColor]};
  position: absolute;
  bottom: 0rem;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
`;

export const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
  padding: 1rem;
  position: relative;

  &.active-link ${StyledUnderline} {
    opacity: 1;
  }
`;
