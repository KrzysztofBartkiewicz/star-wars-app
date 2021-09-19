import styled from 'styled-components';
import bg from '../../assets/images/login.jpg';

export const StyledLogin = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
