import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Heading from '../../atoms/Heading';
import Paragraph from '../../atoms/Paragraph';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoritesCharacters } from '../../../redux/appReducer/selectors';
import {
  addCharacterToFavorites,
  deleteCharacterFromFavorites,
} from '../../../redux/appReducer/actions';
import {
  StyledCharacterDetails,
  StyledContent,
  StyledDetailsWrapper,
  StyledFavIcon,
  StyledFilmItem,
  StyledFilmsList,
  StyledImage,
  StyledMainWrapper,
  StyledNumber,
  StyledNumberBox,
  StyledNumberWrapper,
  StyledSingleDetailWrapper,
} from './StyledCharacterDetails';
import Button from '../../atoms/Button';
import { fetchFilms } from '../../../api/swapi';
import Spinner from '../../utils/Spinner';

const CharacterDetails = ({ details }) => {
  const { name, number, birth_year, eye_color, height, mass, films } = details;
  const dispatch = useDispatch();
  const favs = useSelector(getFavoritesCharacters);
  const [filmsArr, setFilmsArr] = useState([]);
  const [img, setImg] = useState('');

  import(`../../../assets/images/characters/${name}.jpg`).then((res) =>
    setImg(res.default)
  );

  useEffect(() => {
    const getFilms = async () => {
      const returnedFilms = await fetchFilms(films);
      setFilmsArr(returnedFilms);
    };
    getFilms();
  }, [films]);

  const handleAddToFav = () => {
    dispatch(addCharacterToFavorites(details));
  };

  const handleDeleteFromFavs = () => {
    dispatch(deleteCharacterFromFavorites(details));
  };
  const isInFavs = () => favs.some((character) => character.name === name);

  const renderDetailsWrapper = () => (
    <StyledDetailsWrapper>
      <StyledSingleDetailWrapper>
        <Heading>Name:</Heading>
        <Paragraph>{name}</Paragraph>
      </StyledSingleDetailWrapper>
      <StyledSingleDetailWrapper>
        <Heading>Birth Year:</Heading>
        <Paragraph>{birth_year}</Paragraph>
      </StyledSingleDetailWrapper>
      <StyledSingleDetailWrapper>
        <Heading>Height:</Heading>
        <Paragraph>{height}</Paragraph>
      </StyledSingleDetailWrapper>
      <StyledSingleDetailWrapper>
        <Heading>Eye Color:</Heading>
        <Paragraph>{eye_color}</Paragraph>
      </StyledSingleDetailWrapper>
      <StyledSingleDetailWrapper>
        <Heading>Mass:</Heading>
        <Paragraph>{mass}</Paragraph>
      </StyledSingleDetailWrapper>
      {filmsArr.length !== 0 ? renderFilmsWrapper() : <Spinner />}
    </StyledDetailsWrapper>
  );

  const renderFilmsWrapper = () => (
    <StyledFilmsList>
      <Heading>Films:</Heading>
      {filmsArr.map(({ title, producer, director, release_date }, index) => (
        <StyledFilmItem key={title}>
          <Paragraph>{`${index + 1}. ${title}`}</Paragraph>
          <Paragraph size="s">{`Producer: ${producer}`}</Paragraph>
          <Paragraph size="s">{`Director: ${director}`}</Paragraph>
          <Paragraph size="s">{`Release: ${release_date}`}</Paragraph>
        </StyledFilmItem>
      ))}
    </StyledFilmsList>
  );

  return (
    <StyledCharacterDetails>
      <StyledMainWrapper>
        <StyledImage src={img} alt={name} />

        <StyledNumberWrapper>
          <StyledNumberBox>
            <StyledContent>
              <StyledNumber type="h1">{number}</StyledNumber>
              {isInFavs() && <StyledFavIcon size="6x" />}
              <Button
                color={isInFavs() ? 'secondary' : 'primary'}
                onClick={isInFavs() ? handleDeleteFromFavs : handleAddToFav}
              >
                {isInFavs() ? 'Delete from favs' : 'Add to favs'}
              </Button>
            </StyledContent>
          </StyledNumberBox>
        </StyledNumberWrapper>
      </StyledMainWrapper>
      {renderDetailsWrapper()}
    </StyledCharacterDetails>
  );
};

export default CharacterDetails;
