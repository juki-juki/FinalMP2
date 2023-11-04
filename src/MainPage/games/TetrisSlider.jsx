import React from 'react';
import TetrisSliderImage from "../games/gameimg/tetrisslider300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const TetrisSlider = () => {
  return (
    <GamePreview
      imageUrl={TetrisSliderImage}
      gameUrl="https://cdn.htmlgames.com/TetrisSlider/"
    />
  );
};

export default TetrisSlider;