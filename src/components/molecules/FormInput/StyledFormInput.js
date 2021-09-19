import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledInput = styled.input`
  padding: 1rem;
  margin-bottom: 0.5rem;
  background-color: ${({ theme }) => theme.colors.black(0.7)};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.l};
  border: 2px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 1rem 0.5rem;
`;

export const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.l};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 0.5rem;
`;
