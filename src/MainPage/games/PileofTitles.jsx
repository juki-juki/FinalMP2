import React from 'react';
import PileofTitlesImage from "../games/gameimg/pileoftiles300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const PileofTitles = () => {
  return (
    <GamePreview
      imageUrl={PileofTitlesImage}
      gameUrl="https://cdn.htmlgames.com/PileOfTiles/"
    />
  );
};

export default PileofTitles;