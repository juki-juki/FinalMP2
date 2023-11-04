import React from 'react';
import MahjongButterflyGardenImage from "../games/gameimg/mahjongbutterflygarden300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const MahjongButterflyGarden = () => {
  return (
    <GamePreview
      imageUrl={MahjongButterflyGardenImage}
      gameUrl="https://cdn.htmlgames.com/MahjongButterflyGarden/"
    />
  );
};

export default MahjongButterflyGarden;
