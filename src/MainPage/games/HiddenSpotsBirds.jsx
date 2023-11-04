import React from 'react';
import HiddenSpotsBirdsImage from "../games/gameimg/hiddenspots-birds300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const HiddenSpotsBirds = () => {
  return (
    <GamePreview
      imageUrl={HiddenSpotsBirdsImage}
      gameUrl="https://cdn.htmlgames.com/HiddenSpotsBirds/"
    />
  );
};

export default HiddenSpotsBirds;