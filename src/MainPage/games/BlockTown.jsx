import React from 'react';
import BlockTownImage from "../games/gameimg/tetristown300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const BlockTown = () => {
  return (
    <GamePreview
      imageUrl={BlockTownImage}
      gameUrl="https://cdn.htmlgames.com/BlockTown/"
    />
  );
};

export default BlockTown;