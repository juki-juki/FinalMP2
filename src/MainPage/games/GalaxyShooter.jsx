import React from 'react';
import GamePreview from '../MainComponent/gamePreview';
import GalaxyShooterImage from '../games/gameimg/galaxyshooter300200.webp';

const GalaxyShooter = () => {
  return (
    <GamePreview
      name="Galaxy Shooter"
      imageUrl={GalaxyShooterImage}
      gameUrl="https://cdn.htmlgames.com/GalaxyShooter/"
    />
  );
};

export default GalaxyShooter;
