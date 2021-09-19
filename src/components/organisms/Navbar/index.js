import React, { useEffect, useState } from 'react';
import routes from '../../../router/routes';
import NavLink from '../../molecules/NavLink';
import Paragraph from '../../atoms/Paragraph';
import Popover from '../../utils/Popover';
import Modal from '../../utils/Modal';
import {
  StyledNavbar,
  StyledNavMenuWrapper,
  StyledUserMenuWrapper,
  StyledLogo,
} from './StyledNavbar';

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

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
        <NavLink to={routes.search} navMenu>
          <Paragraph>Search</Paragraph>
        </NavLink>
      </StyledNavMenuWrapper>

      <StyledLogo />

      <StyledUserMenuWrapper>
        <Modal />
        <Popover />
      </StyledUserMenuWrapper>
    </StyledNavbar>
  );
};

export default Navbar;
