import React from 'react';
import TikiTotemsQuartetImage from "../games/gameimg/tikitotemsquartet300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const TikiTotemsQuartet = () => {
  return (
    <GamePreview
      imageUrl={TikiTotemsQuartetImage}
      gameUrl="https://cdn.htmlgames.com/TikiTotemsQuartet/"
    />
  );
};

export default TikiTotemsQuartet;