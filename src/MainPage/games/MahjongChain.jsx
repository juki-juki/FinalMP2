import React from 'react';
import MahjongChainImage from "../games/gameimg/mahjongchain300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const MahjongChain = () => {
  return (
    <GamePreview
      imageUrl={MahjongChainImage}
      gameUrl="https://cdn.htmlgames.com/MahjongChain/"
    />
  );
};

export default MahjongChain;