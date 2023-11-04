import React from 'react';
import CelticMahjongImage from "../games/gameimg/celticmahjong300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const CelticMahjong = () => {
  return (
    <GamePreview
      imageUrl={CelticMahjongImage}
      gameUrl="https://cdn.htmlgames.com/CelticMahjong/"
    />
  );
};

export default CelticMahjong;