import React from 'react';
import EscapetheForestImage from "../games/gameimg/escapetheforest300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const EscapetheForest = () => {
  return (
    <GamePreview
      imageUrl={EscapetheForestImage}
      gameUrl="https://cdn.htmlgames.com/EscapeTheForest/"
    />
  );
};

export default EscapetheForest;