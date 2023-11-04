import React from 'react';
import DailyUp15Image from "../games/gameimg/Daily15Up-300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const DailyUp15 = () => {
  return (
    <GamePreview
      imageUrl={DailyUp15Image}
      gameUrl="https://cdn.htmlgames.com/DailyUp15/"
    />
  );
};

export default DailyUp15;