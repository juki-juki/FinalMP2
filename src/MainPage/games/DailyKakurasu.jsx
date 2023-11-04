import React from 'react';
import DailyKakurasuImage from "../games/gameimg/dailykakurasu300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const DailyKakurasu = () => {
  return (
    <GamePreview
      imageUrl={DailyKakurasuImage}
      gameUrl="https://cdn.htmlgames.com/DailyKakurasu/"
    />
  );
};

export default DailyKakurasu;