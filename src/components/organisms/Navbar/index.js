import React from 'react';
import routes from '../../../router/routes';
import Logo from '../../atoms/Logo';
import NavLink from '../../molecules/NavLink';
import { StyledNavbar } from './StyledNavbar';

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavLink exact to={routes.home}>
        Home
      </NavLink>
      <NavLink to={routes.characters}>Characters</NavLink>
      <Logo />
    </StyledNavbar>
  );
};

export default Navbar;
