import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const appear = keyframes`
  0% {transform: scale(0); opacity: .3;}
  50% {transform: scale(2); opacity: .6;}
  100% {transform: scale(1); opacity: 1;}
`;

export const StyledHeartIcon = styled(FontAwesomeIcon)`
  color: ${({ theme, activeColor }) => theme.colors[activeColor]};
  position: absolute;
  top: 2rem;
  left: 2rem;
  animation: ${appear} 0.2s linear;
`;
