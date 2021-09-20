import React from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CharacterDetails from '../../components/organisms/CharacterDetails';
import { StyledGobackBtn, StyledSingleCharacter } from './StyleSingleCharacter';
import { useHistory } from 'react-router';

const SingleCharacter = ({ location }) => {
  const history = useHistory();

  const handleGoback = () => {
    history.goBack();
  };

  return (
    <StyledSingleCharacter>
      <StyledGobackBtn onClick={handleGoback}>
        <FontAwesomeIcon size="2x" icon={faArrowLeft} />
      </StyledGobackBtn>
      <CharacterDetails details={location.state} />
    </StyledSingleCharacter>
  );
};

export default SingleCharacter;
