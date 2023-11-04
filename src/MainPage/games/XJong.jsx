import React from 'react';
import XJongImage from "../games/gameimg/xjong300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const XJong = () => {
  return (
    <GamePreview
      imageUrl={XJongImage}
      gameUrl="https://cdn.htmlgames.com/X-Jong/"
    />
  );
};

export default XJong;