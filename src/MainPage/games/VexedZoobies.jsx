import React from 'react';
import VexedZoobiesImage from "../games/gameimg/vexedzoobies300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const VexedZoobies = () => {
  return (
    <GamePreview
      imageUrl={VexedZoobiesImage}
      gameUrl="https://cdn.htmlgames.com/VexedZoobies/"
    />
  );
};

export default VexedZoobies;