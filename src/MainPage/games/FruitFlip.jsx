import React from 'react';
import FruitFlipImage from "../games/gameimg/fruitflip300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const FruitFlip = () => {
  return (
    <GamePreview
      imageUrl={FruitFlipImage}
      gameUrl="https://cdn.htmlgames.com/FruitFlip/"
    />
  );
};

export default FruitFlip;