import React from 'react';
import Button from '../../atoms/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { StyledPagination } from './StyledPagination';
import Paragraph from '../../atoms/Paragraph';

const Pagination = ({
  onNextClick,
  onPreviousClick,
  previousLimit,
  nextLimit,
  currentPage,
  totalElements,
}) => {
  return (
    <StyledPagination>
      <Button disabled={previousLimit} onClick={onPreviousClick}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </Button>
      <Paragraph>{currentPage}</Paragraph>
      <Button disabled={nextLimit} onClick={onNextClick}>
        <FontAwesomeIcon icon={faChevronRight} />
      </Button>
    </StyledPagination>
  );
};

export default Pagination;
