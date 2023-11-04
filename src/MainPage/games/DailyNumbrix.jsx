import React from 'react';
import DailyNumbrixImage from "../games/gameimg/dailynumbrix300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const DailyNumbrix = () => {
  return (
    <GamePreview
      imageUrl={DailyNumbrixImage}
      gameUrl="https://cdn.htmlgames.com/DailyNumbrix/"
    />
  );
};

export default DailyNumbrix;