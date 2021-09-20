import styled from 'styled-components';
import FavIcon from '../../atoms/FavIcon/Index';
import Heading from '../../atoms/Heading';

export const StyledCharacterDetails = styled.div`
  ${({ theme }) => theme.defaultBoxShape}
  display: flex;
  align-items: stretch;
  justify-content: center;
  min-width: 70rem;
`;

export const StyledMainWrapper = styled.div`
  width: 40%;
  margin: 1rem;
`;

export const StyledImage = styled.img`
  ${({ theme }) => theme.defaultBoxShape}
  max-height: 40rem;
  max-width: 50rem;
`;

export const StyledNumberWrapper = styled.div`
  ${({ theme }) => theme.defaultBoxShape}
`;

export const StyledNumberBox = styled.div`
  ${({ theme }) => theme.mixins.innerBox}
  padding: 0 10rem;
`;

export const StyledContent = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  & > * {
    margin-bottom: 1.5rem;
  }

  & > *:last-child {
    margin-bottom: 2.5rem;
  }
`;

export const StyledFavIcon = styled(FavIcon)`
  z-index: 20;
`;

export const StyledNumber = styled(Heading)`
  z-index: 10;
`;

export const StyledDetailsWrapper = styled.div`
  width: 60%;
  padding: 4rem;
  margin-left: 10rem;
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
