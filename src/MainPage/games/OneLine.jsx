import React from 'react';
import OneLineImage from "../games/gameimg/oneline300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const OneLine = () => {
  return (
    <GamePreview
      imageUrl={OneLineImage}
      gameUrl="https://cdn.htmlgames.com/OneLine/"
    />
  );
};

export default OneLine;