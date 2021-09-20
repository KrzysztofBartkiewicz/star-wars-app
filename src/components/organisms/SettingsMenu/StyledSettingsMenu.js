import styled from 'styled-components';

export const StyledMenu = styled.div`
  ${({ theme }) => theme.defaultBoxShape}
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  text-align: center;
  min-width: 40rem;
  margin-top: 10rem;

  & > * {
    margin-bottom: 3rem;
  }
`;
