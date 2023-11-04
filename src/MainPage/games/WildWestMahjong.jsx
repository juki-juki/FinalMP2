import React from 'react';
import WildWestMahjongImage from "../games/gameimg/wildwestmahjong300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const WildWestMahjong = () => {
  return (
    <GamePreview
      imageUrl={WildWestMahjongImage}
      gameUrl="https://cdn.htmlgames.com/WildWestMahjong/"
    />
  );
};

export default WildWestMahjong;