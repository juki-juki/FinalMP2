import React from 'react';
import FruitMahjongImage from "../games/gameimg/fruitmahjong300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const FruitMahjong = () => {
  return (
    <GamePreview
      imageUrl={FruitMahjongImage}
      gameUrl="https://cdn.htmlgames.com/FruitMahjong/"
    />
  );
};

export default FruitMahjong;