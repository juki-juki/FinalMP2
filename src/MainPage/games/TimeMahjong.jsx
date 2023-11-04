import React from 'react';
import TimeMahjongImage from "../games/gameimg/timemahjong300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const TimeMahjong = () => {
  return (
    <GamePreview
      imageUrl={TimeMahjongImage}
      gameUrl="https://cdn.htmlgames.com/TimeMahjong/"
    />
  );
};

export default TimeMahjong;