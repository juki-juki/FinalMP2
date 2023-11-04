import React from 'react';
import HiddenLibraryImage from "../games/gameimg/hiddenlibrary300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const HiddenLibrary = () => {
  return (
    <GamePreview
      imageUrl={HiddenLibraryImage}
      gameUrl="https://cdn.htmlgames.com/HiddenLibrary/"
    />
  );
};

export default HiddenLibrary;