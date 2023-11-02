import React from 'react';
import TeslaDefenseImage from '../../assets/tesladefense300200.webp'; // Include the appropriate file extension
import GamePreview from './gamePreview'; // Ensure the component filename matches

const TeslaDefense = () => {
  return (
    <GamePreview
      name="Tesla Defense"
      imageUrl={TeslaDefenseImage}
      gameUrl="https://cdn.htmlgames.com/TeslaDefense/" // Replace with the actual URL of TeslaDefense
    />
  );
};

export default TeslaDefense;
