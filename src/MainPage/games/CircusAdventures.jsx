import React from 'react';
import CircusAdventuresImage from "../games/gameimg/circusadventures300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const CircusAdventures = () => {
  return (
    <GamePreview
      imageUrl={CircusAdventuresImage}
      gameUrl="https://cdn.htmlgames.com/CircusAdventures/"
    />
  );
};

export default CircusAdventures;