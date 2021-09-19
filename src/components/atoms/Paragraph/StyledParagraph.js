import styled, { css } from 'styled-components';

export const StyledParagraph = styled.p`
  ${({ theme, size, color, weight }) => {
    const { fontSizes, fontWeights, colors } = theme;
    return css`
      font-size: ${size ? fontSizes[size] : fontSizes.l};
      font-weight: ${weight ? fontWeights[weight] : fontWeights.regular};
      color: ${color ? colors[color] : colors.white};
      letter-spacing: 1px;
    `;
  }}
`;
