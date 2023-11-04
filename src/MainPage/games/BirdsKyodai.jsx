import React from 'react';
import BirdsKyodaiImage from "../games/gameimg/birdskyodai300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const BirdsKyodai = () => {
  return (
    <GamePreview
      imageUrl={BirdsKyodaiImage}
      gameUrl="https://cdn.htmlgames.com/BirdsKyodai/"
    />
  );
};

export default BirdsKyodai;