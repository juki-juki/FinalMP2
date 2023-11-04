import React from 'react';
import DailyfutoshikiImage from "../games/gameimg/dailyfutoshiki300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const Dailyfutoshiki = () => {
  return (
    <GamePreview
      imageUrl={DailyfutoshikiImage}
      gameUrl="https://cdn.htmlgames.com/DailyFutoshiki/"
    />
  );
};

export default Dailyfutoshiki;