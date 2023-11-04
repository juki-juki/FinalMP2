import React from 'react';
import HiddenIconsImage from "../games/gameimg/hiddenicon300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const HiddenIcons = () => {
  return (
    <GamePreview
      imageUrl={HiddenIconsImage}
      gameUrl="https://cdn.htmlgames.com/HiddenIcons/"
    />
  );
};

export default HiddenIcons;