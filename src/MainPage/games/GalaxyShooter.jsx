import React from 'react';
import GalaxyShooterImage from '../../assets/galaxyshooter300200.webp';
import GamePreview from './gamePreview';

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
