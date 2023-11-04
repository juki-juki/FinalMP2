import React from 'react';
import RetroMahjongImage from "../games/gameimg/retromahjong300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const RetroMahjong = () => {
  return (
    <GamePreview
      imageUrl={RetroMahjongImage}
      gameUrl="https://cdn.htmlgames.com/RetroMahjong/"
    />
  );
};

export default RetroMahjong;