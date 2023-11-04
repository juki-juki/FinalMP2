import React from 'react';
import SpaceCubesImage from "../games/gameimg/spacecubes300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const SpaceCubes = () => {
  return (
    <GamePreview
      imageUrl={SpaceCubesImage}
      gameUrl="https://cdn.htmlgames.com/SpaceCubes/"
    />
  );
};

export default SpaceCubes;