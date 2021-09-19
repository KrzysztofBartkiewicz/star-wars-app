import styled from 'styled-components';

export const StyledHeadingH1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: ${({ theme, weight }) =>
    weight ? theme.fontWeIghts[weight] : theme.fontWeights.regular};
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.white};
`;

export const StyledHeadingH2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme, weight }) =>
    weight ? theme.fontWeights[weight] : theme.fontWeights.regular};
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.white};
`;

export const StyledHeadingH3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme, weight }) =>
    weight ? theme.fontWeights[weight] : theme.fontWeights.regular};
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.white};
`;

export const StyledHeadingH4 = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme, weight }) =>
    weight ? theme.fontWeights[weight] : theme.fontWeights.regular};
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.white};
`;
