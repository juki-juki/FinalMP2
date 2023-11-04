import React from 'react';
import MahjongTripleDimentionImage from "../games/gameimg/mahjongtripledimensions-300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const MahjongTripleDimention = () => {
  return (
    <GamePreview
      imageUrl={MahjongTripleDimentionImage}
      gameUrl="https://cdn.htmlgames.com/MahjongTripleDimentions/"
    />
  );
};

export default MahjongTripleDimention;