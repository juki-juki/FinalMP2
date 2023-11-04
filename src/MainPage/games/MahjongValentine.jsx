import React from 'react';
import MahjongValentineImage from "../games/gameimg/mahjonggvalentine300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const MahjongValentine = () => {
  return (
    <GamePreview
      imageUrl={MahjongValentineImage}
      gameUrl="https://cdn.htmlgames.com/MahjonggValentine/"
    />
  );
};

export default MahjongValentine;