import React from 'react';
import FallingSudokuImage from "../games/gameimg/fallingsudoku300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const FallingSudoku = () => {
  return (
    <GamePreview
      imageUrl={FallingSudokuImage}
      gameUrl="https://cdn.htmlgames.com/FallingSudoku/"
    />
  );
};

export default FallingSudoku;