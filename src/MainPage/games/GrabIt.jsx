import React from 'react';
import GrabItImage from "../games/gameimg/grabIt300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const GrabIt = () => {
  return (
    <GamePreview
      imageUrl={GrabItImage}
      gameUrl="https://cdn.htmlgames.com/GrabIt/"
    />
  );
};

export default GrabIt;