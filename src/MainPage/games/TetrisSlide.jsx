import React from 'react';
import TetrisSlideImage from "../games/gameimg/tetrisslide300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview";// Make sure the component filename matches

const TetrisSlide = () => {
  return (
    <GamePreview
      imageUrl={TetrisSlideImage}
      gameUrl="https://cdn.htmlgames.com/TetrisSlide/"
    />
  );
};

export default TetrisSlide;