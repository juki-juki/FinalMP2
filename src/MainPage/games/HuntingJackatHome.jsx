import React from 'react';
import HuntingJackAtHomeImage from "../games/gameimg/huntingjackathome300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const HuntingJackAtHome = () => {
  return (
    <GamePreview
      imageUrl={HuntingJackAtHomeImage}
      gameUrl="https://cdn.htmlgames.com/HuntingJackAtHome/"
    />
  );
};

export default HuntingJackAtHome;