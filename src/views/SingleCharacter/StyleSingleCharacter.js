import styled, { css } from 'styled-components';
import Button from '../../components/atoms/Button';
import bg from '../../assets/images/bg3.jpg';

export const StyledSingleCharacter = styled.section`
  ${({ theme }) => theme.mixins.view(bg)}
  display: flex;
  justify-content: space-around;
`;

export const StyledGobackBtn = styled(Button)`
  position: fixed;
  left: 10rem;
  top: 15rem;

  ${({ scrollPosition }) =>
    scrollPosition !== 0 &&
    css`
      left: 5rem;
      top: 10rem;
    `}

  ${({ theme }) => theme.mq.desktopSm} {
    top: 8rem;
    left: 5rem;
  }

  ${({ theme }) => theme.mq.mobile} {
    display: none;
  }
`;
