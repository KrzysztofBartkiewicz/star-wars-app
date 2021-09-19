import React from 'react';
import Paragraph from '../../atoms/Paragraph';
import { StyledInput, StyledLabel, StyledWrapper } from './StyledFormInput';

const FormInput = ({
  label,
  type,
  name,
  value,
  onChange,
  errorMsg = 'Wrong login',
}) => {
  return (
    <StyledWrapper>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput
        id={name}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
      />
      {errorMsg && (
        <Paragraph color="red" size="s">
          {errorMsg}
        </Paragraph>
      )}
    </StyledWrapper>
  );
};

export default FormInput;
