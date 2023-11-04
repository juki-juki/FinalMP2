import React from 'react';
import VexedImage from "../games/gameimg/vexed300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const Vexed = () => {
  return (
    <GamePreview
      imageUrl={VexedImage}
      gameUrl="https://cdn.htmlgames.com/Vexed/"
    />
  );
};

export default Vexed;