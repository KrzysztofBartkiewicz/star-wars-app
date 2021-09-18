import React, { useEffect } from 'react';
import Card from '../../components/organisms/Card';
import { useSelector, useDispatch } from 'react-redux';
import { getCharacters } from '../../redux/selectors';
import List from '../../templates/List';
import { StyledCharacters } from './StyledCharacters';
import Pagination from '../../components/molecules/Pagination';
import { setCharacters } from '../../redux/actions';
import { fetchCharacters } from '../../api/swapi';

const Characters = () => {
  const characters = useSelector(getCharacters);
  const dispatch = useDispatch();

  useEffect(() => {}, [characters]);

  const handleNext = async () => {
    const data = await fetchCharacters(characters.next);
    dispatch(setCharacters(data));
  };

  const handlePrevious = async () => {
    const data = await fetchCharacters(characters.previous);
    dispatch(setCharacters(data));
  };

  return (
    <StyledCharacters>
      {characters && (
        <>
          <Pagination
            totalElements={characters.count}
            currentPage={characters.page}
            previousLimit={!characters.previous}
            nextLimit={!characters.next}
            onNextClick={handleNext}
            onPreviousClick={handlePrevious}
          />
          <List arr={characters.results} component={Card} />
        </>
      )}
    </StyledCharacters>
  );
};

export default Characters;
