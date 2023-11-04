import React from 'react';
import TangramBirdImage from "../games/gameimg/tangrambird300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const TangramBird = () => {
  return (
    <GamePreview
      imageUrl={TangramBirdImage}
      gameUrl="https://cdn.htmlgames.com/TangramBird/"
    />
  );
};

export default TangramBird;