import React from 'react';
import DailyNetImage from "../games/gameimg/dailynet300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const DailyNet = () => {
  return (
    <GamePreview
      imageUrl={DailyNetImage}
      gameUrl="https://cdn.htmlgames.com/DailyNet/"
    />
  );
};

export default DailyNet;