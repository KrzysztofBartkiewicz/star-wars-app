import styled from 'styled-components';

export const StyledLink = styled.a`
  color: ${({ theme, color }) => theme.colors[color]};
  font-style: italic;
`;
