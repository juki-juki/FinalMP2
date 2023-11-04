import React from 'react';
import TilesofEgyptImage from "../games/gameimg/tilesofegypt300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const TilesofEgypt = () => {
  return (
    <GamePreview
      imageUrl={TilesofEgyptImage}
      gameUrl="https://cdn.htmlgames.com/TilesOfEgypt/"
    />
  );
};

export default TilesofEgypt;