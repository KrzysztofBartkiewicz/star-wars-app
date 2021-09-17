import React from 'react';
import routes from '../../../router/routes';
import NavLink from '../../molecules/NavLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {
  StyledNavbar,
  StyledNavMenuWrapper,
  StyledUserMenuWrapper,
  StyledLogo,
} from './StyledNavbar';

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledNavMenuWrapper>
        <NavLink exact to={routes.home}>
          Home
        </NavLink>
        <NavLink to={routes.characters}>Characters</NavLink>
      </StyledNavMenuWrapper>

      <StyledLogo />

      <StyledUserMenuWrapper>
        <FontAwesomeIcon icon={faSearch} size="2x" color="white" />
        <FontAwesomeIcon icon={faUser} size="2x" color="white" />
      </StyledUserMenuWrapper>
    </StyledNavbar>
  );
};

export default Navbar;
