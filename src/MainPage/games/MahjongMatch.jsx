import React from 'react';
import MahjongMatchImage from "../games/gameimg/mahjongmatch300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const MahjongMatch = () => {
  return (
    <GamePreview
      imageUrl={MahjongMatchImage}
      gameUrl="https://cdn.htmlgames.com/MahjongMatch/"
    />
  );
};

export default MahjongMatch;