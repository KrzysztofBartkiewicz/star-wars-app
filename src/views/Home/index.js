import React from 'react';
import SettingsMenu from '../../components/organisms/SettingsMenu';
import { StyledHome } from './StyledHome';

const Home = () => {
  return (
    <StyledHome>
      <SettingsMenu />
    </StyledHome>
  );
};

export default Home;
