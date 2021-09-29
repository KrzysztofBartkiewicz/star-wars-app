import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  loadCharactersFromLS,
  setCharacters,
} from '../redux/appReducer/actions';
import Router from '../router';
import { fetchCharacters } from '../api/swapi';
import { useSelector } from 'react-redux';
import { getFavoritesCharacters } from '../redux/appReducer/selectors';
import { getUserData } from '../redux/userReducer/selectors';

const App = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(getFavoritesCharacters);
  const { currentUser } = useSelector(getUserData);

  useEffect(() => {
    if (currentUser && currentUser !== 'user signed out') {
      localStorage.setItem(
        `${currentUser.uid}-favCharacters`,
        JSON.stringify(favorites)
      );
    }
  }, [favorites]);

  useEffect(() => {
    if (currentUser && currentUser !== 'user signed out') {
      dispatch(
        loadCharactersFromLS(
          JSON.parse(
            localStorage.getItem(`${currentUser.uid}-favCharacters`) || []
          )
        )
      );

      const getData = async () => {
        const characters = await fetchCharacters(
          'https://swapi.dev/api/people/'
        );
        dispatch(setCharacters(characters));
      };
      getData();
    } else {
      dispatch(setCharacters(null));
    }
  }, [currentUser]);

  return <Router />;
};

export default App;
