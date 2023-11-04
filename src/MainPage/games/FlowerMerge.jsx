import React from 'react';
import FlowerMergeImage from "../games/gameimg/flowermerge300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const FlowerMerge = () => {
  return (
    <GamePreview
      imageUrl={FlowerMergeImage}
      gameUrl="https://cdn.htmlgames.com/FlowerMerge/"
    />
  );
};

export default FlowerMerge;