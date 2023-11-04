import React from 'react';
import DailyStarBattleImage from "../games/gameimg/daily-star-battle-300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const DailyStarBattle = () => {
  return (
    <GamePreview
      imageUrl={DailyStarBattleImage}
      gameUrl="https://cdn.htmlgames.com/DailyStarBattle/"
    />
  );
};

export default DailyStarBattle;