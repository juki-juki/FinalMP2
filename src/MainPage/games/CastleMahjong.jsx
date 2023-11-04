import React from 'react';
import CastleMahjongImage from "../games/gameimg/castlemahjong300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const CastleMahjong = () => {
  return (
    <GamePreview
      imageUrl={CastleMahjongImage}
      gameUrl="https://cdn.htmlgames.com/CastleMahjong/"
    />
  );
};

export default CastleMahjong;