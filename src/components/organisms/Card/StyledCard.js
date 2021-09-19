import styled from 'styled-components';
import Heading from '../../atoms/Heading';

export const StyledCard = styled.div`
  ${({ theme }) => theme.mixins.box}

  transition: 0.5s;
`;

export const StyledBox = styled.div`
  ${({ theme }) => theme.mixins.innerBox}
  transition: 0.5s;

  &:hover {
    transform: translateY(-15px);
  }
`;

export const StyledContent = styled.div`
  padding: 2rem;
  min-width: 28rem;
  margin-top: 9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  & > * {
    margin-bottom: 1.5rem;
  }
`;

export const StyledNumber = styled(Heading)`
  position: absolute;
  top: 2rem;
  right: 4rem;
  color: rgba(255, 255, 255, 0.1);
`;

export const StyledName = styled(Heading)`
  color: ${({ theme }) => theme.colors.white};
  z-index: 1;
  transition: 0.5s;
`;
