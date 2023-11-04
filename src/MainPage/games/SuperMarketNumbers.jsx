import React from 'react';
import SuperMarketNumbersImage from "../games/gameimg/supermarketnumbers300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const SuperMarketNumbers = () => {
  return (
    <GamePreview
      imageUrl={SuperMarketNumbersImage}
      gameUrl="https://cdn.htmlgames.com/SupermarketNumbers/"
    />
  );
};

export default SuperMarketNumbers;