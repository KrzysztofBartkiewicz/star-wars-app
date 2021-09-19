import styled from 'styled-components';
import FavIcon from '../../atoms/FavIcon/Index';
import Heading from '../../atoms/Heading';
import bg from '../../../assets/images/luke.jpg';

export const StyledCharacterDetails = styled.div`
  ${({ theme }) => theme.defaultBoxShape}
  display: flex;
  align-items: stretch;
  min-width: 80rem;
`;

export const StyledMainWrapper = styled.div`
  width: 40%;
  margin: 1rem;
`;

export const StyledImageWrapper = styled.div`
  ${({ theme }) => theme.defaultBoxShape}

  height: 40rem;
  width: 100%;
`;

export const StyledNumberWrapper = styled.div`
  ${({ theme }) => theme.defaultBoxShape}
`;

export const StyledNumberBox = styled.div`
  ${({ theme }) => theme.mixins.innerBox}
`;

export const StyledContent = styled.div`
  min-width: 60rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  & > * {
    margin-bottom: 1.5rem;
  }
`;

export const StyledFavIcon = styled(FavIcon)``;

export const StyledNumber = styled(Heading)`
  z-index: 10;
`;

export const StyledDetailsWrapper = styled.div`
  width: 60%;
  padding: 4rem;
`;

export const StyledSingleDetailWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 1rem;

  & > *:first-child {
    margin-right: 2rem;
  }
`;

export const StyledFilmsList = styled.ul`
  margin-top: 1rem;
`;

export const StyledFilmItem = styled.li`
  margin: 1rem;

  & > * {
    padding: 0.3rem;
  }

  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;
