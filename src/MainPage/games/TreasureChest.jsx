import React from 'react';
import TreasureChestImage from "../games/gameimg/treasurechests-300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const TreasureChest = () => {
  return (
    <GamePreview
      imageUrl={TreasureChestImage}
      gameUrl="https://cdn.htmlgames.com/TreasureChests/"
    />
  );
};

export default TreasureChest;