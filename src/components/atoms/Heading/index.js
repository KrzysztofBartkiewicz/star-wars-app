import React from 'react';
import {
  StyledHeadingH1,
  StyledHeadingH2,
  StyledHeadingH3,
  StyledHeadingH4,
} from './StyledHeading';

const Heading = ({ type, children, className, color, weight }) => {
  const renderHeading = () => {
    switch (type) {
      case 'h1':
        return (
          <StyledHeadingH1 weight={weight} color={color} className={className}>
            {children}
          </StyledHeadingH1>
        );
      case 'h2':
        return (
          <StyledHeadingH2 weight={weight} color={color} className={className}>
            {children}
          </StyledHeadingH2>
        );

      case 'h4':
        return (
          <StyledHeadingH4 weight={weight} color={color} className={className}>
            {children}
          </StyledHeadingH4>
        );

      default:
        return (
          <StyledHeadingH3 weight={weight} color={color} className={className}>
            {children}
          </StyledHeadingH3>
        );
    }
  };

  return <>{renderHeading()}</>;
};

export default Heading;
