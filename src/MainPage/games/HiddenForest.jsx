import React from 'react';
import HiddenForestImage from "../games/gameimg/hiddenforest300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const HiddenForest = () => {
  return (
    <GamePreview
      imageUrl={HiddenForestImage}
      gameUrl="https://cdn.htmlgames.com/HiddenForest/"
    />
  );
};

export default HiddenForest;