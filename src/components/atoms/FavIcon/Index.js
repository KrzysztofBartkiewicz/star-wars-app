import React from 'react';
import { StyledHeartIcon } from './StyledFavIcon';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const FavIcon = ({ size, className }) => (
  <StyledHeartIcon className={className} icon={faHeart} size={size} />
);

export default FavIcon;
