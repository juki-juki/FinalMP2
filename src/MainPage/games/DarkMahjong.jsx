import React from 'react';
import DarkMahjongImage from "../games/gameimg/darkmahjongconnect300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const DarkMahjong = () => {
  return (
    <GamePreview
      imageUrl={DarkMahjongImage}
      gameUrl="https://cdn.htmlgames.com/DarkMahjongConnect/"
    />
  );
};

export default DarkMahjong;