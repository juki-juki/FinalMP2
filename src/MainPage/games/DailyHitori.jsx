import React from 'react';
import DailyHitoriImage from "../games/gameimg/daily-hitori-300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const DailyHitori = () => {
  return (
    <GamePreview
      imageUrl={DailyHitoriImage}
      gameUrl="https://cdn.htmlgames.com/DailyHitori/"
    />
  );
};

export default DailyHitori;