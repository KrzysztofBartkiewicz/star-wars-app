import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import routes from '../../../router/routes';
import NavLink from '../../molecules/NavLink';
import Paragraph from '../../atoms/Paragraph';
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
        <NavLink exact to={routes.home} navMenu>
          <Paragraph>Home</Paragraph>
        </NavLink>
        <NavLink to={routes.characters} navMenu>
          <Paragraph>Characters</Paragraph>
        </NavLink>
        <NavLink to={routes.favorites} navMenu>
          <Paragraph>Favorites</Paragraph>
        </NavLink>
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
