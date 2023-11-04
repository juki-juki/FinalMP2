import React from 'react';
import FairyTripleMahjongImage from "../games/gameimg/fairytriplemahjong300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const FairyTripleMahjong = () => {
  return (
    <GamePreview
      imageUrl={FairyTripleMahjongImage}
      gameUrl="https://cdn.htmlgames.com/FairyTripleMahjong/"
    />
  );
};

export default FairyTripleMahjong;