import React from 'react';
import MahjongBattleImage from "../games/gameimg/mahjongbattle300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const MahjongBattle = () => {
  return (
    <GamePreview
      imageUrl={MahjongBattleImage}
      gameUrl="https://cdn.htmlgames.com/MahjongBattle/"
    />
  );
};

export default MahjongBattle;