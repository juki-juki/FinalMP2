import React from 'react';
import IceCreamBarImage from "../games/gameimg/icecreambar300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const IceCreamBar = () => {
  return (
    <GamePreview
      imageUrl={IceCreamBarImage}
      gameUrl="https://cdn.htmlgames.com/IceCreamBar/"
    />
  );
};

export default IceCreamBar;