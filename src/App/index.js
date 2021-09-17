import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setCharacters } from '../redux/actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('https://swapi.dev/api/people')
      .then((res) => dispatch(setCharacters(res.data)))
      .catch((err) => console.error('err', err));
  }, [dispatch]);

  return <div>sdfsdfsdfsdf</div>;
};

export default App;
