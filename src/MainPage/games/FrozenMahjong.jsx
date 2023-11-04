import React from 'react';
import FrozenMahjongImage from "../games/gameimg/frozenmahjong300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const FrozenMahjong = () => {
  return (
    <GamePreview
      imageUrl={FrozenMahjongImage}
      gameUrl="https://cdn.htmlgames.com/FrozenMahjong/"
    />
  );
};

export default FrozenMahjong;