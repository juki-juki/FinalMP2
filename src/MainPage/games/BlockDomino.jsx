import React from 'react';
import BlockDominoImage from "../games/gameimg/blockdomino300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const BlockDomino = () => {
  return (
    <GamePreview
      imageUrl={BlockDominoImage}
      gameUrl="https://cdn.htmlgames.com/BlockDomino/"
    />
  );
};

export default BlockDomino;