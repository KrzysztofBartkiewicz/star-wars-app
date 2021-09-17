import styled from 'styled-components';
import Heading from '../../atoms/Heading';

export const StyledCard = styled.div`
  position: relative;
  min-width: 28rem;
  height: 30rem;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  margin: 3rem;
  transition: 0.5s;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledBox = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  right: 2rem;
  bottom: 2rem;
  background: ${({ theme }) => theme.colors.grey};
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 0.5s;

  &:hover {
    transform: translateY(-15px);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: rgba(255, 255, 255, 0.03);
  }
`;

export const StyledContent = styled.div`
  padding: 2rem;
  text-align: center;
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
  margin-top: 9rem;
  margin-bottom: 2.5rem;
`;
