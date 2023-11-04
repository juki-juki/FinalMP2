import React from 'react';
import EasterMahjongImage from "../games/gameimg/eastermahjong300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const EasterMahjong = () => {
  return (
    <GamePreview
      imageUrl={EasterMahjongImage}
      gameUrl="https://cdn.htmlgames.com/EasterMahjongg/"
    />
  );
};

export default EasterMahjong;