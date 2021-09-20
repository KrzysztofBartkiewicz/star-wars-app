import styled from 'styled-components';

export const StyledSearchBox = styled.form`
  ${({ theme }) => theme.mixins.box}
  padding: 3rem;
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  text-align: center;

  ${({ theme }) => theme.mq.tablet} {
    width: 50vw;
  }

  & > *:not(:last-child) {
    margin-bottom: 3rem;
  }
`;
