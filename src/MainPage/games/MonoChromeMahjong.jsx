import React from 'react';
import MonoChromeMahjongImage from "../games/gameimg/monochromemahjongg300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const MonoChromeMahjong = () => {
  return (
    <GamePreview
      imageUrl={MonoChromeMahjongImage}
      gameUrl="https://cdn.htmlgames.com/MonochromeMahjongg/"
    />
  );
};

export default MonoChromeMahjong;