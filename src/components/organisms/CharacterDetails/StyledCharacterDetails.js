import styled from 'styled-components';
import FavIcon from '../../atoms/FavIcon/Index';
import Heading from '../../atoms/Heading';

export const StyledCharacterDetails = styled.div`
  ${({ theme }) => theme.defaultBoxShape}
  display: flex;
  align-items: stretch;
  justify-content: center;

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: column;
    align-items: center;
    min-width: 50rem;
  }
`;

export const StyledMainWrapper = styled.div`
  width: 100%;
  margin: 1rem;

  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledImage = styled.img`
  ${({ theme }) => theme.defaultBoxShape}
  max-height: 40rem;
  max-width: 50rem;

  ${({ theme }) => theme.mq.tablet} {
    margin: 0 auto;
  }
`;

export const StyledNumberWrapper = styled.div`
  ${({ theme }) => theme.defaultBoxShape}
  max-width: 50rem;
  margin: 1rem;
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

  ${({ theme }) => theme.mq.tablet} {
    margin-left: 0;
  }
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
