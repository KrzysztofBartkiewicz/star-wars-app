import React from 'react';
import Heading from '../../atoms/Heading';
import Button from '../../atoms/Button';
import { StyledMenu } from './StyledSettingsMenu';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveColor } from '../../../redux/appReducer/actions';
import { getActiveColor } from '../../../redux/appReducer/selectors';

const SettingsMenu = () => {
  const dispatch = useDispatch();
  const activeColor = useSelector(getActiveColor);

  const handleChangeColor = (color) => {
    dispatch(setActiveColor(color));
  };

  return (
    <StyledMenu>
      <Heading>Choose App Color</Heading>
      <Button
        disabled={activeColor === 'blue'}
        onClick={() => handleChangeColor('blue')}
        color="blue"
      >
        Blue
      </Button>
      <Button
        disabled={activeColor === 'red'}
        onClick={() => handleChangeColor('red')}
        color="red"
      >
        Red
      </Button>
      <Button
        disabled={activeColor === 'orange'}
        onClick={() => handleChangeColor('orange')}
        color="orange"
      >
        Orange
      </Button>
    </StyledMenu>
  );
};

export default SettingsMenu;
