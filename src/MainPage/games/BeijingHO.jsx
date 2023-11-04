import React from 'react';
import BeijingHOImage from "../games/gameimg/beijinghiddenobjects300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const BeijingHO = () => {
  return (
    <GamePreview
      imageUrl={BeijingHOImage}
      gameUrl="https://cdn.htmlgames.com/BeijingHiddenObjects/"
    />
  );
};

export default BeijingHO;