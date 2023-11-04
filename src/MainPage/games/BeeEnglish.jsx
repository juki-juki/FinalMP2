import React from 'react';
import BeeEnglishImage from "../games/gameimg/beeenglish300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const BeeEnglish = () => {
  return (
    <GamePreview
      imageUrl={BeeEnglishImage}
      gameUrl="https://cdn.htmlgames.com/BeeEnglish/"
    />
  );
};

export default BeeEnglish;