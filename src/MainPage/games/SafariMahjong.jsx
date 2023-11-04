import React from 'react';
import SafariMahjongImage from "../games/gameimg/safarimahjong300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const SafariMahjong = () => {
  return (
    <GamePreview
      imageUrl={SafariMahjongImage}
      gameUrl="https://cdn.htmlgames.com/SafariMahjong/"
    />
  );
};

export default SafariMahjong;