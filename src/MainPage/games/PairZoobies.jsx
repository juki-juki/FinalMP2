import React from 'react';
import PairZoobiesImage from "../games/gameimg/pairzoobies200120.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const PairZoobies = () => {
  return (
    <GamePreview
      imageUrl={PairZoobiesImage}
      gameUrl="https://cdn.htmlgames.com/PairZoobies/"
    />
  );
};

export default PairZoobies;