import React from 'react';
import JewelMahjongImage from "../games/gameimg/jewelmahjongg300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const JewelMahjong = () => {
  return (
    <GamePreview
      imageUrl={JewelMahjongImage}
      gameUrl="https://cdn.htmlgames.com/JewelMahjongg/"
    />
  );
};

export default JewelMahjong;