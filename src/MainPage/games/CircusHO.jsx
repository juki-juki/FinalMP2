import React from 'react';
import CircusHOImage from "../games/gameimg/circushiddenobjects300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const CircusHO = () => {
  return (
    <GamePreview
      imageUrl={CircusHOImage}
      gameUrl="https://cdn.htmlgames.com/CircusHiddenObjects/"
    />
  );
};

export default CircusHO;