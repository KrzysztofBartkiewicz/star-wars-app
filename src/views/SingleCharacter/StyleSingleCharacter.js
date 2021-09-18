import styled from 'styled-components';
import bg from '../../assets/images/bg3.jpg';

export const StyledSingleCharacter = styled.section`
  ${({ theme }) => theme.mixins.view(bg)}
  display: flex;
  justify-content: space-around;
`;
