import React from 'react';
import MahjongGardenImage from "../games/gameimg/mahjonggardens300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const MahjongGarden = () => {
  return (
    <GamePreview
      imageUrl={MahjongGardenImage}
      gameUrl="https://cdn.htmlgames.com/MahjongGardens/"
    />
  );
};

export default MahjongGarden;