import React from 'react';
import FamousPaintings3Image from "../games/gameimg/famouspaintings3300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const FamousPaintings3 = () => {
  return (
    <GamePreview
      imageUrl={FamousPaintings3Image}
      gameUrl="https://cdn.htmlgames.com/FamousPaintings3/"
    />
  );
};

export default FamousPaintings3;