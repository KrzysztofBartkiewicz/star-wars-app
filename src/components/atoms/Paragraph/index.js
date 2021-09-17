import React from 'react';
import { StyledParagraph } from './StyledParagraph';

const Paragraph = ({ color, size, weight, children }) => {
  return (
    <StyledParagraph color={color} size={size} weight={weight}>
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
