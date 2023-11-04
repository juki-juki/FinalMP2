import React from 'react';
import HiddenSpotJewelryImage from "../games/gameimg/hiddenspots-jewelry300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const HiddenSpotJewelry = () => {
  return (
    <GamePreview
      imageUrl={HiddenSpotJewelryImage}
      gameUrl="https://cdn.htmlgames.com/HiddenSpotsJewelry/"
    />
  );
};

export default HiddenSpotJewelry;