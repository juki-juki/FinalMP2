import React from 'react';
import GoldMinerImage from "../games/gameimg/goldminer300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const GoldMiner = () => {
  return (
    <GamePreview
      imageUrl={GoldMinerImage}
      gameUrl="https://cdn.htmlgames.com/GoldMiner/"
    />
  );
};

export default GoldMiner;