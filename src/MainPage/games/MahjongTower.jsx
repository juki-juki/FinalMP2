import React from 'react';
import MahjongTowerImage from "../games/gameimg/mahjongtower300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const MahjongTower = () => {
  return (
    <GamePreview
      imageUrl={MahjongTowerImage}
      gameUrl="https://cdn.htmlgames.com/MahjongTower/"
    />
  );
};

export default MahjongTower;