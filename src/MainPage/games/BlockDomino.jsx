import React from 'react';
import GamePreview from '../MainComponent/gamePreview'; // Make sure the component filename matches
import BlockDominoImage from '../games/gameimg/blockdomino300200.webp'; // Include the appropriate file extension

const BlockDomino = () => {
  return (
    <GamePreview
      name="Block Domino"
      imageUrl={BlockDominoImage}
      gameUrl="https://cdn.htmlgames.com/BlockDomino/"
    />
  );
};

export default BlockDomino;
