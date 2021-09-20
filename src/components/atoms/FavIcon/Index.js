import React from 'react';
import { StyledHeartIcon } from './StyledFavIcon';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { getActiveColor } from '../../../redux/appReducer/selectors';

const FavIcon = ({ size, className }) => {
  const activeColor = useSelector(getActiveColor);

  return (
    <StyledHeartIcon
      activeColor={activeColor}
      className={className}
      icon={faHeart}
      size={size}
    />
  );
};

export default FavIcon;
