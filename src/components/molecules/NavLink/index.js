import React from 'react';
import { StyledNavLink, StyledUnderline } from './StyledNavLink';

const NavLink = ({ children, to, exact }) => {
  return (
    <StyledNavLink to={to} exact={exact}>
      {children}
      <StyledUnderline />
    </StyledNavLink>
  );
};

export default NavLink;
