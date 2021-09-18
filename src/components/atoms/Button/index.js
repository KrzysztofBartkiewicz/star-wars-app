import React from 'react';
import { StyledButton } from './StyledButton';

const Button = ({ children, className, color, variant }) => {
  return (
    <StyledButton color={color} className={className}>
      {children}
    </StyledButton>
  );
};

export default Button;
