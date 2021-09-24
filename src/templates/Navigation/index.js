import React from 'react';
import Navbar from '../../components/organisms/Navbar';
import Button from '../../components/atoms/Button';
import { useDispatch, useSelector } from 'react-redux';
import { isMenuOpen } from '../../redux/appReducer/selectors';
import { toggleMenuOpen } from '../../redux/appReducer/actions';
import Footer from '../../components/organisms/Footer';
import { StyledNavigationTemplate } from './StyledNavigation';

const NavigationTemplate = ({ children }) => {
  const menuStatus = useSelector(isMenuOpen);
  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenuOpen());
  };

  return (
    <StyledNavigationTemplate>
      <Button
        onClick={handleToggleMenu}
        active={menuStatus}
        variant="hamburger"
      />
      <Navbar />
      {children}
      <Footer />
    </StyledNavigationTemplate>
  );
};

export default NavigationTemplate;
