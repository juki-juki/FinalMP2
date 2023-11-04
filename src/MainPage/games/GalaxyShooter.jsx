import React from 'react';
import GalaxyShooterImage from "../games/gameimg/galaxyshooter300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const GalaxyShooter = () => {
  return (
    <GamePreview
      imageUrl={GalaxyShooterImage}
      gameUrl="https://cdn.htmlgames.com/GalaxyShooter/"
    />
  );
};

export default GalaxyShooter;