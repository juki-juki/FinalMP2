import React from 'react';
import MasterQwansMahjongImage from "../games/gameimg/masterqwansmahjong300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const MasterQwansMahjong = () => {
  return (
    <GamePreview
      imageUrl={MasterQwansMahjongImage}
      gameUrl="https://cdn.htmlgames.com/MasterQwansMahjong/"
    />
  );
};

export default MasterQwansMahjong;