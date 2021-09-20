import React from 'react';
import { useSelector } from 'react-redux';
import { getActiveColor } from '../../../redux/appReducer/selectors';
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
  const activeColor = useSelector(getActiveColor);

  return (
    <StyledButton
      activeColor={activeColor}
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
