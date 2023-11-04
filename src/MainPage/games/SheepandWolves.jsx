import React from 'react';
import SheepandWolvesImage from "../games/gameimg/sheepandwolves300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const SheepandWolves = () => {
  return (
    <GamePreview
      imageUrl={SheepandWolvesImage}
      gameUrl="https://cdn.htmlgames.com/SheepAndWolves/"
    />
  );
};

export default SheepandWolves;