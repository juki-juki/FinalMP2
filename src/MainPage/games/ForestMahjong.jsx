import React from 'react';
import ForestMahjongImage from "../games/gameimg/forestmahjong300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const ForestMahjong = () => {
  return (
    <GamePreview
      imageUrl={ForestMahjongImage}
      gameUrl="https://cdn.htmlgames.com/ForestMahjong/"
    />
  );
};

export default ForestMahjong;