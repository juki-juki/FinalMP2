import React from 'react';
import FamousPaintingImage from "../games/gameimg/famouspaintings1300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const FamousPainting = () => {
  return (
    <GamePreview
      imageUrl={FamousPaintingImage}
      gameUrl="https://cdn.htmlgames.com/FamousPaintings1/"
    />
  );
};

export default FamousPainting;