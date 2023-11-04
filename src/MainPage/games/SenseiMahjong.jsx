import React from 'react';
import SenseiMahjongImage from "../games/gameimg/senseimahjongg300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const SenseiMahjong = () => {
  return (
    <GamePreview
      imageUrl={SenseiMahjongImage}
      gameUrl="https://cdn.htmlgames.com/SenseiMahjongg/"
    />
  );
};

export default SenseiMahjong;