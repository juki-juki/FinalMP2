import React from 'react';
import CaribbeanSlideImage from "../games/gameimg/caribbeanslide300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const CaribbeanSlide = () => {
  return (
    <GamePreview
      imageUrl={CaribbeanSlideImage}
      gameUrl="https://cdn.htmlgames.com/CaribbeanSlide/"
    />
  );
};

export default CaribbeanSlide;