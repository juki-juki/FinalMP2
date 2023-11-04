import React from 'react';
import SpaceTrisImage from "../games/gameimg/spacetris300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview";// Make sure the component filename matches

const SpaceTris = () => {
  return (
    <GamePreview
      imageUrl={SpaceTrisImage}
      gameUrl="https://cdn.htmlgames.com/Spacetris/"
    />
  );
};

export default SpaceTris;