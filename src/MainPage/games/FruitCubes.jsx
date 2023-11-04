import React from 'react';
import FruitCubesImage from "../games/gameimg/fruitcubes300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const FruitCubes = () => {
  return (
    <GamePreview
      imageUrl={FruitCubesImage}
      gameUrl="https://cdn.htmlgames.com/FruitCubes/"
    />
  );
};

export default FruitCubes;