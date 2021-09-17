import React from 'react';
import Button from '../../atoms/Button';
import {
  StyledBox,
  StyledCard,
  StyledContent,
  StyledName,
  StyledNumber,
} from './StyledCard';

const Card = ({ number, name }) => {
  return (
    <StyledCard>
      <StyledBox>
        <StyledContent>
          <StyledNumber type="h2">{number}</StyledNumber>
          <StyledName>{name}</StyledName>
          <Button>Add to fav</Button>
        </StyledContent>
      </StyledBox>
    </StyledCard>
  );
};

export default Card;
