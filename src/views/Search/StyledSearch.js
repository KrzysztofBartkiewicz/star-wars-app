import styled from 'styled-components';
import bg from '../../assets/images/bg5.jpg';

export const StyledSearch = styled.section`
  ${({ theme }) => theme.mixins.view(bg)}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
