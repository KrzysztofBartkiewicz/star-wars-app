import React from 'react';
import { StyledNavLink, StyledUnderline } from './StyledNavLink';

const NavLink = ({ children, to, exact, navMenu }) => {
  return (
    <StyledNavLink to={to} exact={exact}>
      {children}
      {navMenu && <StyledUnderline />}
    </StyledNavLink>
  );
};

export default NavLink;
