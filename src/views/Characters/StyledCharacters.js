import styled from 'styled-components';
import bg from '../../assets/images/bg2.jpg';

export const StyledCharacters = styled.section`
  ${({ theme }) => theme.mixins.view(bg)}
`;
