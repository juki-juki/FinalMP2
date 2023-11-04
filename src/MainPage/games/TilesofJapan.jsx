import React from 'react';
import TilesofJapanImage from "../games/gameimg/tilesofjapan300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const TilesofJapan = () => {
  return (
    <GamePreview
      imageUrl={TilesofJapanImage}
      gameUrl="https://cdn.htmlgames.com/TilesOfJapan/"
    />
  );
};

export default TilesofJapan;