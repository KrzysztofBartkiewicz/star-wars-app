import styled from 'styled-components';
import bg from '../../assets/images/bg4.jpg';

export const StyledFavorites = styled.section`
  ${({ theme }) => theme.mixins.view(bg)}
`;
