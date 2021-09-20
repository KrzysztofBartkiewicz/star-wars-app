import React from 'react';
import Button from '../../atoms/Button';
import FavIcon from '../../atoms/FavIcon/Index';
import routes from '../../../router/routes';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoritesCharacters } from '../../../redux/appReducer/selectors';
import {
  StyledBox,
  StyledCard,
  StyledContent,
  StyledName,
  StyledNavLink,
  StyledNumber,
} from './StyledCard';
import {
  addCharacterToFavorites,
  deleteCharacterFromFavorites,
} from '../../../redux/appReducer/actions';

const Card = (props) => {
  const { name, number } = props;
  const dispatch = useDispatch();
  const favs = useSelector(getFavoritesCharacters);

  const handleAddToFav = () => {
    dispatch(addCharacterToFavorites(props));
  };

  const handleDeleteFromFavs = () => {
    dispatch(deleteCharacterFromFavorites(props));
  };

  const isInFavs = () => favs.some((character) => character.name === name);

  return (
    <StyledCard>
      <StyledBox>
        <StyledContent>
          {isInFavs() && <FavIcon size={'3x'} />}

          <StyledNumber type="h2">{number}</StyledNumber>
          <StyledName>{name}</StyledName>
          <Button
            color={isInFavs() ? 'secondary' : 'primary'}
            onClick={isInFavs() ? handleDeleteFromFavs : handleAddToFav}
          >
            {isInFavs() ? 'Delete from favs' : 'Add to favs'}
          </Button>
          <StyledNavLink
            to={{
              pathname: `${routes.character}/${name.replace(/\s/g, '')}`,
              state: props,
            }}
          >
            <Button color="secondary">See details</Button>
          </StyledNavLink>
        </StyledContent>
      </StyledBox>
    </StyledCard>
  );
};

export default Card;
