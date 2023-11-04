import React from 'react';
import AncientMahjongImage from "../games/gameimg/ancientmahjong300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const AncientMahjong = () => {
  return (
    <GamePreview
      imageUrl={AncientMahjongImage}
      gameUrl="https://cdn.htmlgames.com/AncientMahjong/"
    />
  );
};

export default AncientMahjong;