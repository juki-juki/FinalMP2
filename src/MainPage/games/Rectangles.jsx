import React from 'react';
import RectanglesImage from "../games/gameimg/rectangles300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const Rectangles = () => {
  return (
    <GamePreview
      imageUrl={RectanglesImage}
      gameUrl="https://cdn.htmlgames.com/Rectangles/"
    />
  );
};

export default Rectangles;