import React from 'react';
import HuntingJackatHomeImage from '../../assets/huntingjackathome300200.webp'; // 
import GamePreview from './gamePreview';

const HuntingJackatHome = () => {
  return (
    <GamePreview
      name="Hunting Jack at Home"
      imageUrl={HuntingJackatHomeImage}
      gameUrl="https://cdn.htmlgames.com/HuntingJackAtHome/"
    />
  );
};

export default HuntingJackatHome;
