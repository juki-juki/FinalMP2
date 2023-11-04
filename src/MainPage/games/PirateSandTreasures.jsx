import React from 'react';
import PirateSandTreasuresImage from "../games/gameimg/piratesandtreasures300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const PirateSandTreasures = () => {
  return (
    <GamePreview
      imageUrl={PirateSandTreasuresImage}
      gameUrl="https://cdn.htmlgames.com/PiratesAndTreasures/"
    />
  );
};

export default PirateSandTreasures;