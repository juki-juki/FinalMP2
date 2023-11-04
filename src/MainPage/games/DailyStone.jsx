import React from 'react';
import DailyStoneImage from "../games/gameimg/daily-stostone-300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const DailyStone = () => {
  return (
    <GamePreview
      imageUrl={DailyStoneImage}
      gameUrl="https://cdn.htmlgames.com/DailyStoStone/"
    />
  );
};

export default DailyStone; 