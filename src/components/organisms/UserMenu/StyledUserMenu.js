import styled from 'styled-components';

export const StyledUserMenu = styled.div`
  ${({ theme }) => theme.mixins.box}
  background-color: ${({ theme }) => theme.colors.black(0.5)};
  padding: 3rem;
  margin: 0;
  border-radius: 1rem 0.5rem;
`;

export const StyledInnerWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 2rem;

  & > *:first-child {
    margin-right: 3rem;
  }
`;
