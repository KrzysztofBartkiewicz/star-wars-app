import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchSearchedCharacters } from '../../api/swapi';
import SearchBox from '../../components/organisms/SearchBox';
import { setSearchedCharacters } from '../../redux/appReducer/actions';
import { getSearchedCharacters } from '../../redux/appReducer/selectors';
import List from '../../templates/List';
import Pagination from '../../components/molecules/Pagination';
import Card from '../../components/organisms/Card';
import { StyledSearch } from './StyledSearch';
import Heading from '../../components/atoms/Heading';

const Search = () => {
  const characters = useSelector(getSearchedCharacters);
  const dispatch = useDispatch();

  const handleNext = async () => {
    const data = await fetchSearchedCharacters(characters.next, true);
    dispatch(setSearchedCharacters(data));
  };

  const handlePrevious = async () => {
    const data = await fetchSearchedCharacters(characters.previous, true);
    dispatch(setSearchedCharacters(data));
  };

  return (
    <StyledSearch>
      <SearchBox />
      {characters && characters.results && (
        <>
          <Pagination
            totalElements={characters.count}
            currentPage={characters.page}
            previousLimit={!characters.previous}
            nextLimit={!characters.next}
            onNextClick={handleNext}
            onPreviousClick={handlePrevious}
          />
          <List
            arr={characters.results}
            currentPage={characters.page}
            component={Card}
          />
        </>
      )}
      {characters && characters.page === 0 && (
        <Heading>No characters found</Heading>
      )}
    </StyledSearch>
  );
};

export default Search;
