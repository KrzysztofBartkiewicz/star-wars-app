import React from 'react';
import { useSelector } from 'react-redux';
import { getActiveColor } from '../../../redux/appReducer/selectors';
import { StyledNavLink, StyledUnderline } from './StyledNavLink';

const NavLink = ({ onClick, children, to, exact, navMenu, className }) => {
  const activeColor = useSelector(getActiveColor);
  return (
    <StyledNavLink
      className={className}
      onClick={onClick}
      to={to}
      exact={exact}
    >
      {children}
      {navMenu && <StyledUnderline activeColor={activeColor} />}
    </StyledNavLink>
  );
};

export default NavLink;
