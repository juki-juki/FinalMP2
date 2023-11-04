import React from 'react';
import DailyCalcudokuImage from "../games/gameimg/dailycalcudoku300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const DailyCalcudoku = () => {
  return (
    <GamePreview
      imageUrl={DailyCalcudokuImage}
      gameUrl="https://cdn.htmlgames.com/DailyCalcudoku/"
    />
  );
};

export default DailyCalcudoku;