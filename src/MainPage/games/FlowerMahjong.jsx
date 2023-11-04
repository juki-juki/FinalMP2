import React from 'react';
import FlowerMahjongImage from "../games/gameimg/flowerslidemahjong300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const FlowerMahjong = () => {
  return (
    <GamePreview
      imageUrl={FlowerMahjongImage}
      gameUrl="https://cdn.htmlgames.com/FlowerSlideMahjong/"
    />
  );
};

export default FlowerMahjong;