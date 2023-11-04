import React from 'react';
import BrickTetrisImage from "../games/gameimg/bricktetris300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const BrickTetris = () => {
  return (
    <GamePreview
      imageUrl={BrickTetrisImage}
      gameUrl="https://cdn.htmlgames.com/BreakTris/"
    />
  );
};

export default BrickTetris;