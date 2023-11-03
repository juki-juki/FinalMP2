import React from 'react';
import GamePreview from '../MainComponent/gamePreview';
import HuntingJackatHomeImage from '../games/gameimg/huntingjackathome300200.webp'; // 

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
