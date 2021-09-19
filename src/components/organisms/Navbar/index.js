import React, { useContext, useEffect, useState } from 'react';
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
import Button from '../../atoms/Button';
import { AuthContext } from '../../../context';

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const { signOut } = useContext(AuthContext);

  const handleScroll = () => {
    const scrollValue = document.scrollingElement.scrollTop;
    setScrollPosition(scrollValue);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <StyledNavbar scrollPosition={scrollPosition}>
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
        <Button onClick={signOut}>
          <FontAwesomeIcon icon={faUser} size="2x" color="white" />
        </Button>
        <FontAwesomeIcon icon={faSearch} size="2x" color="white" />
      </StyledUserMenuWrapper>
    </StyledNavbar>
  );
};

export default Navbar;
