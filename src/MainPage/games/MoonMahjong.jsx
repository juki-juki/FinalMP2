import React from 'react';
import MoonMahjongImage from "../games/gameimg/moonmahjong300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const MoonMahjong = () => {
  return (
    <GamePreview
      imageUrl={MoonMahjongImage}
      gameUrl="https://cdn.htmlgames.com/MoonMahjong/"
    />
  );
};

export default MoonMahjong;