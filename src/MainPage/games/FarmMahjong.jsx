import React from 'react';
import FarmMahjongImage from "../games/gameimg/farmmahjongg300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const FarmMahjong = () => {
  return (
    <GamePreview
      imageUrl={FarmMahjongImage}
      gameUrl="https://cdn.htmlgames.com/FarmMahjong/"
    />
  );
};

export default FarmMahjong;