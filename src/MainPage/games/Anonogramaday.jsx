import React from 'react';
import AnonogramadayImage from "../games/gameimg/anonogramaday300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const Anonogramaday = () => {
  return (
    <GamePreview
      imageUrl={AnonogramadayImage}
      gameUrl="https://cdn.htmlgames.com/ANonogramADay/"
    />
  );
};

export default Anonogramaday;