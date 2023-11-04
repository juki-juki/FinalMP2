import React from 'react';
import TetrixImage from "../games/gameimg/tetrix300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview";// Make sure the component filename matches

const Tetrix = () => {
  return (
    <GamePreview
      imageUrl={TetrixImage}
      gameUrl="https://cdn.htmlgames.com/Tetrix/"
    />
  );
};

export default Tetrix;