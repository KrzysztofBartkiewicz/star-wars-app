import React from 'react';
import { useSelector } from 'react-redux';
import { getActiveColor } from '../../../redux/appReducer/selectors';
import { StyledNavLink, StyledUnderline } from './StyledNavLink';

const NavLink = ({ children, to, exact, navMenu }) => {
  const activeColor = useSelector(getActiveColor);
  return (
    <StyledNavLink to={to} exact={exact}>
      {children}
      {navMenu && <StyledUnderline activeColor={activeColor} />}
    </StyledNavLink>
  );
};

export default NavLink;
