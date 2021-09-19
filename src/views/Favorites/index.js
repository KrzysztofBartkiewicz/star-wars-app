import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../../components/organisms/Card';
import { getFavoritesCharacters } from '../../redux/appReducer/selectors';
import List from '../../templates/List';
import { StyledFavorites } from './StyledFavorites';

const Favorites = () => {
  const favs = useSelector(getFavoritesCharacters);

  return (
    <StyledFavorites>
      <List arr={favs} component={Card} />
    </StyledFavorites>
  );
};

export default Favorites;
