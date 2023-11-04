import React from 'react';
import GoldenAutumMahjongImage from "../games/gameimg/goldenautumn300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const GoldenAutumMahjong = () => {
  return (
    <GamePreview
      imageUrl={GoldenAutumMahjongImage}
      gameUrl="https://cdn.htmlgames.com/GoldenAutumnMahjong/"
    />
  );
};

export default GoldenAutumMahjong;