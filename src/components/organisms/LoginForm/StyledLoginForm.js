import styled from 'styled-components';

export const StyledLoginForm = styled.form`
  ${({ theme }) => theme.mixins.box}
  background-color: ${({ theme }) => theme.colors.black(0.8)};
  padding: 6rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  text-align: center;

  & > *:not(:last-child) {
    margin-bottom: 3rem;
  }
`;
