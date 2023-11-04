import React from 'react';
import HiddenToysImage from "../games/gameimg/hiddentoys300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const HiddenToys = () => {
  return (
    <GamePreview
      imageUrl={HiddenToysImage}
      gameUrl="https://cdn.htmlgames.com/HiddenToys/"
    />
  );
};

export default HiddenToys;