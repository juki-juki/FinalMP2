import React from 'react';
import NeonLightsImage from '../../assets/neonlights300200.webp';
import GamePreview from './gamePreview';

const NeonLights = () => {
  return (
    <GamePreview
      name="NeonLights"
      imageUrl={NeonLightsImage}
      gameUrl="https://cdn.htmlgames.com/NeonLights/"
    />
  );
};

export default NeonLights;
