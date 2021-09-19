import React from 'react';
import { StyledButton } from './StyledButton';

const Button = ({
  children,
  className,
  color,
  variant,
  onClick,
  disabled,
  type,
}) => {
  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      color={color}
      className={className}
      type={type}
      variant={variant}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
