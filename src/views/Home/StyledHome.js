import styled from 'styled-components';
import bg from '../../assets/images/bg1.jpg';

export const StyledHome = styled.section`
  ${({ theme }) => theme.mixins.view(bg)}
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;
