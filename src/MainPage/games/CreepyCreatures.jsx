import React from 'react';
import CreepyCreaturesImage from "../games/gameimg/creepycreatures300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const CreepyCreatures = () => {
  return (
    <GamePreview
      imageUrl={CreepyCreaturesImage}
      gameUrl="https://cdn.htmlgames.com/CreepyCreatures/"
    />
  );
};

export default CreepyCreatures;