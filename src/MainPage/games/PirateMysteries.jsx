import React from 'react';
import PirateMysteriesImage from "../games/gameimg/PirateMysteries300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const PirateMysteries = () => {
  return (
    <GamePreview
      imageUrl={PirateMysteriesImage}
      gameUrl="https://cdn.htmlgames.com/PirateMysteries/"
    />
  );
};

export default PirateMysteries;