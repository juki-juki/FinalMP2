import React from 'react';
import ClassicSnakeImage from "../games/gameimg/classicsnake300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const ClassicSnake = () => {
  return (
    <GamePreview
      imageUrl={ClassicSnakeImage}
      gameUrl="https://cdn.htmlgames.com/ClassicSnake/"
    />
  );
};

export default ClassicSnake;