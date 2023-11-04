import React from 'react';
import DailyKakuroImage from "../games/gameimg/dailykakuro300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const DailyKakuro = () => {
  return (
    <GamePreview
      imageUrl={DailyKakuroImage}
      gameUrl="https://cdn.htmlgames.com/DailyKakuro/"
    />
  );
};

export default DailyKakuro;