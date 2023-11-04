import React from 'react';
import FarmTownImage from "../games/gameimg/farmtown300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const FarmTown = () => {
  return (
    <GamePreview
      imageUrl={FarmTownImage}
      gameUrl="https://cdn.htmlgames.com/FarmTown/"
    />
  );
};

export default FarmTown;