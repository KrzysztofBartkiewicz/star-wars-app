import React, { useState } from 'react';
import Card from '../../components/organisms/Card';
import { useSelector, useDispatch } from 'react-redux';
import { getCharacters } from '../../redux/appReducer/selectors';
import List from '../../templates/List';
import { StyledCharacters } from './StyledCharacters';
import Pagination from '../../components/molecules/Pagination';
import { setCharacters } from '../../redux/appReducer/actions';
import { fetchCharacters } from '../../api/swapi';
import Spinner from '../../components/utils/Spinner';

const Characters = () => {
  const characters = useSelector(getCharacters);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleNext = async () => {
    setIsLoading(true);
    const data = await fetchCharacters(characters.next);
    dispatch(setCharacters(data));
    setIsLoading(false);
  };

  const handlePrevious = async () => {
    setIsLoading(true);
    const data = await fetchCharacters(characters.previous);
    dispatch(setCharacters(data));
    setIsLoading(false);
  };

  return (
    <StyledCharacters>
      {characters ? (
        <>
          <Pagination
            totalElements={characters.count}
            currentPage={characters.page}
            previousLimit={!characters.previous}
            nextLimit={!characters.next}
            onNextClick={handleNext}
            onPreviousClick={handlePrevious}
          />
          {isLoading ? (
            <Spinner />
          ) : (
            <List
              arr={characters.results}
              currentPage={characters.page}
              component={Card}
            />
          )}
        </>
      ) : (
        <Spinner />
      )}
    </StyledCharacters>
  );
};

export default Characters;
