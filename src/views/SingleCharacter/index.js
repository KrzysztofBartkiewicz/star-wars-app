import React from 'react';
import CharacterDetails from '../../components/organisms/CharacterDetails';
import { StyledSingleCharacter } from './StyleSingleCharacter';

const SingleCharacter = ({ location }) => {
  return (
    <StyledSingleCharacter>
      <CharacterDetails details={location.state} />
    </StyledSingleCharacter>
  );
};

export default SingleCharacter;
