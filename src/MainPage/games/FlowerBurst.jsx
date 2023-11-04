import React from 'react';
import FlowerBurstImage from "../games/gameimg/flowerburst300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const FlowerBurst = () => {
  return (
    <GamePreview
      imageUrl={FlowerBurstImage}
      gameUrl="https://cdn.htmlgames.com/FlowerBurst/"
    />
  );
};

export default FlowerBurst;