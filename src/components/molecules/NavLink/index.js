import React from 'react';
import Paragraph from '../../atoms/Paragraph';
import { StyledNavLink, StyledUnderline } from './StyledNavLink';

const NavLink = ({ children, to, exact }) => {
  return (
    <StyledNavLink to={to} exact={exact}>
      <Paragraph>{children}</Paragraph>
      <StyledUnderline />
    </StyledNavLink>
  );
};

export default NavLink;
