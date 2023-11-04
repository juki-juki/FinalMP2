import React from 'react';
import PileofTilesConImage from "../games/gameimg/pileoftilesconnect300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const PileofTilesCon = () => {
  return (
    <GamePreview
      imageUrl={PileofTilesConImage}
      gameUrl="https://cdn.htmlgames.com/PileOfTilesConnect/"
    />
  );
};

export default PileofTilesCon;