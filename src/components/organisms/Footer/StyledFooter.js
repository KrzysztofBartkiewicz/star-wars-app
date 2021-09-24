import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledFooter = styled.footer`
  width: 100%;
  padding: 4rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.white};
  text-align: center;
  bottom: 0;

  & > *:first-child {
    margin-bottom: 0.5rem;
  }
`;

export const StyledLoveIcon = styled(FontAwesomeIcon)`
  color: ${({ theme, activeColor }) => theme.colors[activeColor]};
`;
