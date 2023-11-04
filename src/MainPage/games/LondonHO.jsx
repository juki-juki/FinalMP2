import React from 'react';
import LondonHOImage from "../games/gameimg/londonhiddenobjects300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const LondonHO = () => {
  return (
    <GamePreview
      imageUrl={LondonHOImage}
      gameUrl="https://cdn.htmlgames.com/LondonHiddenObjects/"
    />
  );
};

export default LondonHO;