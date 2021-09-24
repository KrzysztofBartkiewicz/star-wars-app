import React from 'react';
import { useSelector } from 'react-redux';
import { getActiveColor } from '../../../redux/appReducer/selectors';
import { StyledLink } from './StyledLink';

const Link = ({ children, href, target }) => {
  const activeColor = useSelector(getActiveColor);

  return (
    <StyledLink rel="noopener" color={activeColor} target={target} href={href}>
      {children}
    </StyledLink>
  );
};

export default Link;
