import React, { useState, useEffect } from 'react';
import routes from '../../../router/routes';
import { useSelector, useDispatch } from 'react-redux';
import { isMenuOpen } from '../../../redux/appReducer/selectors';
import NavLink from '../../molecules/NavLink';
import Paragraph from '../../atoms/Paragraph';
import Popover from '../../utils/Popover';
import {
  StyledNavbar,
  StyledNavMenuWrapper,
  StyledUserMenuWrapper,
  StyledLogo,
} from './StyledNavbar';
import { toggleMenuOpen } from '../../../redux/appReducer/actions';

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const menuStatus = useSelector(isMenuOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const scrollValue = document.scrollingElement.scrollTop;
    setScrollPosition(scrollValue);
  };

  const handleCLoseMenu = () => {
    dispatch(toggleMenuOpen());
  };

  return (
    <StyledNavbar isMenuOpen={menuStatus} scrollPosition={scrollPosition}>
      <StyledNavMenuWrapper>
        <NavLink onClick={handleCLoseMenu} exact to={routes.home} navMenu>
          <Paragraph>Home</Paragraph>
        </NavLink>
        <NavLink onClick={handleCLoseMenu} to={routes.characters} navMenu>
          <Paragraph>Characters</Paragraph>
        </NavLink>
        <NavLink onClick={handleCLoseMenu} to={routes.favorites} navMenu>
          <Paragraph>Favorites</Paragraph>
        </NavLink>
        <NavLink onClick={handleCLoseMenu} to={routes.search} navMenu>
          <Paragraph>Search</Paragraph>
        </NavLink>
      </StyledNavMenuWrapper>

      <StyledLogo scrollPosition={scrollPosition} />

      <StyledUserMenuWrapper>
        <Popover />
      </StyledUserMenuWrapper>
    </StyledNavbar>
  );
};

export default Navbar;
