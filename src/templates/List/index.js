import React from 'react';
import { StyledListItem, StyledList } from './StyledList';

const List = ({ arr, component: Component, ...rest }) => {
  return (
    <StyledList>
      {arr.map(({ ...props }, index) => (
        <StyledListItem key={props.name}>
          <Component
            number={(rest.currentPage - 1) * 10 + index + 1}
            {...props}
          />
        </StyledListItem>
      ))}
    </StyledList>
  );
};

export default List;
