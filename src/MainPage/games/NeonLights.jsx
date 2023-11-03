import React from 'react';
import GamePreview from '../MainComponent/gamePreview';
import NeonLightsImage from '../games/gameimg/neonlights300200.webp';

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
