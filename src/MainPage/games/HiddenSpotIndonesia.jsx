import React from 'react';
import HiddenSpotIndonesiaImage from "../games/gameimg/hiddenspotsindonesia300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const HiddenSpotIndonesia = () => {
  return (
    <GamePreview
      imageUrl={HiddenSpotIndonesiaImage}
      gameUrl="https://cdn.htmlgames.com/HiddenSpotsIndonesia/"
    />
  );
};

export default HiddenSpotIndonesia;