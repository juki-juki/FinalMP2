import React from 'react';
import ClassicMahjongImage from "../games/gameimg/classicmahjongg300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const ClassicMahjong = () => {
  return (
    <GamePreview
      imageUrl={ClassicMahjongImage}
      gameUrl="https://cdn.htmlgames.com/ClassicMahjongg/"
    />
  );
};

export default ClassicMahjong;