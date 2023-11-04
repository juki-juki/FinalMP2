import React from 'react';
import MahjongBlockMayaImage from "../games/gameimg/mahjongblocks300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const MahjongBlockMaya = () => {
  return (
    <GamePreview
      imageUrl={MahjongBlockMayaImage}
      gameUrl="https://cdn.htmlgames.com/MahjongBlocksMaya/"
    />
  );
};

export default MahjongBlockMaya;