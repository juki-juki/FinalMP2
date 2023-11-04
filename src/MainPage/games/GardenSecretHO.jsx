import React from 'react';
import GardenSecretHOImage from "../games/gameimg/gardensecretshiddenobjects-300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const GardenSecretHO = () => {
  return (
    <GamePreview
      imageUrl={GardenSecretHOImage}
      gameUrl="https://cdn.htmlgames.com/GardenSecretsHiddenObjects/"
    />
  );
};

export default GardenSecretHO;