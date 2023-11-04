import React from 'react';
import SydneyHiddenObjectImage from "../games/gameimg/sydneyhiddenobjects300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const SydneyHiddenObject = () => {
  return (
    <GamePreview
      imageUrl={SydneyHiddenObjectImage}
      gameUrl="https://cdn.htmlgames.com/SydneyHiddenObjects/"
    />
  );
};

export default SydneyHiddenObject;