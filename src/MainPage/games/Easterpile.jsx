import React from 'react';
import EasterpileImage from "../games/gameimg/easterpile300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const Easterpile = () => {
  return (
    <GamePreview
      imageUrl={EasterpileImage}
      gameUrl="https://cdn.htmlgames.com/EasterPile/"
    />
  );
};

export default Easterpile;