import React from 'react';
import StoleArtImage from "../games/gameimg/stolenart300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const StoleArt = () => {
  return (
    <GamePreview
      imageUrl={StoleArtImage}
      gameUrl="https://cdn.htmlgames.com/StolenArt/"
    />
  );
};

export default StoleArt;