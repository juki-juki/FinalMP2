import React from 'react';
import DailyWordokuImage from "../games/gameimg/dailyworduky300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const DailyWordoku = () => {
  return (
    <GamePreview
      imageUrl={DailyWordokuImage}
      gameUrl="https://cdn.htmlgames.com/DailyWordoku/"
    />
  );
};

export default DailyWordoku;