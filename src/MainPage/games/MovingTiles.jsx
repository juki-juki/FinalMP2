import React from 'react';
import MovingTilesImage from "../games/gameimg/movingtiles300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const MovingTiles = () => {
  return (
    <GamePreview
      imageUrl={MovingTilesImage}
      gameUrl="https://cdn.htmlgames.com/MovingTiles/"
    />
  );
};

export default MovingTiles;