import React from 'react';
import SquirrelConnectionImage from '../../assets/squirrelconnection300200.webp';
import GamePreview from './gamePreview';

const SquirrelConnection = () => {
  return (
    <GamePreview
      name="Squirrel Connection"
      imageUrl={SquirrelConnectionImage}
      gameUrl="https://cdn.htmlgames.com/GalaxyShooter/"
    />
  );
};

export default SquirrelConnection;
