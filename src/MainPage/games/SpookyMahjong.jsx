import React from 'react';
import SpookyMahjongImage from "../games/gameimg/spookymahjong300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const SpookyMahjong = () => {
  return (
    <GamePreview
      imageUrl={SpookyMahjongImage}
      gameUrl="https://cdn.htmlgames.com/SpookyMahjong/"
    />
  );
};

export default SpookyMahjong;