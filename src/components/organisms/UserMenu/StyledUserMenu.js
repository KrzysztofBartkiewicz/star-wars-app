import styled from 'styled-components';

export const StyledUserMenu = styled.div`
  ${({ theme }) => theme.mixins.box}
  background-color: ${({ theme }) => theme.colors.black(0.5)};
  padding: 3rem;
  margin: 0;
  border-radius: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledInnerWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 2rem;

  & > *:first-child {
    margin-right: 3rem;
  }
`;
