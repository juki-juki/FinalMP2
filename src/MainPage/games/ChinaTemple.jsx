import React from 'react';
import ChinaTempleImage from "../games/gameimg/chinatemple300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const ChinaTemple = () => {
  return (
    <GamePreview
      imageUrl={ChinaTempleImage}
      gameUrl="https://cdn.htmlgames.com/ChinaTemple/"
    />
  );
};

export default ChinaTemple;