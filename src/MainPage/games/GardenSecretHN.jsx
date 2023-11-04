import React from 'react';
import GardenSecretHNImage from "../games/gameimg/gardensecretshiddennumbers300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const GardenSecretHN = () => {
  return (
    <GamePreview
      imageUrl={GardenSecretHNImage}
      gameUrl="https://cdn.htmlgames.com/GardenSecretsHiddenNumbers/"
    />
  );
};

export default GardenSecretHN;