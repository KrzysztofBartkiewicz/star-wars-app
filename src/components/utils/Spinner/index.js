import React from 'react';
import { useSelector } from 'react-redux';
import { getActiveColor } from '../../../redux/appReducer/selectors';
import { StyledSpinner, StyledWrapper } from './StyledSpinner';

const Spinner = () => {
  const activeColor = useSelector(getActiveColor);
  return (
    <StyledWrapper>
      <StyledSpinner activeColor={activeColor} />
    </StyledWrapper>
  );
};

export default Spinner;
