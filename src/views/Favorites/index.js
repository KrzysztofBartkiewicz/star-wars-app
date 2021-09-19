import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../../components/organisms/Card';
import Spinner from '../../components/utils/Spinner';
import { getFavoritesCharacters } from '../../redux/appReducer/selectors';
import List from '../../templates/List';
import { StyledFavorites } from './StyledFavorites';

const Favorites = () => {
  const favs = useSelector(getFavoritesCharacters);

  return (
    <StyledFavorites>
      {favs ? <List arr={favs} component={Card} /> : <Spinner />}
    </StyledFavorites>
  );
};

export default Favorites;
