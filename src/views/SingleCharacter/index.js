import React from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CharacterDetails from '../../components/organisms/CharacterDetails';
import { StyledGobackBtn, StyledSingleCharacter } from './StyleSingleCharacter';
import { useHistory } from 'react-router';
import useScrollPosition from '../../hooks/useScrollPosition';

const SingleCharacter = ({ location }) => {
  const history = useHistory();
  const scrollPosition = useScrollPosition();

  const handleGoback = () => {
    history.goBack();
  };

  return (
    <StyledSingleCharacter>
      <StyledGobackBtn scrollPosition={scrollPosition} onClick={handleGoback}>
        <FontAwesomeIcon size="2x" icon={faArrowLeft} />
      </StyledGobackBtn>
      <CharacterDetails details={location.state} />
    </StyledSingleCharacter>
  );
};

export default SingleCharacter;
