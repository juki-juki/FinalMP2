import React from 'react';
import ChinaMahjongImage from "../games/gameimg/mahjonggchina300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const ChinaMahjong = () => {
  return (
    <GamePreview
      imageUrl={ChinaMahjongImage}
      gameUrl="https://cdn.htmlgames.com/MahjonggChina/"
    />
  );
};

export default ChinaMahjong;