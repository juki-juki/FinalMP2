import React from 'react';
import PandaMahjongImage from "../games/gameimg/pandamahjong300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const PandaMahjong = () => {
  return (
    <GamePreview
      imageUrl={PandaMahjongImage}
      gameUrl="https://cdn.htmlgames.com/PandaMahjong/"
    />
  );
};

export default PandaMahjong;