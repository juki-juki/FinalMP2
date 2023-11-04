import React from 'react';
import TetrisFunImage from "../games/gameimg/tetrisfun300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview";// Make sure the component filename matches

const TetrisFun = () => {
  return (
    <GamePreview
      imageUrl={TetrisFunImage}
      gameUrl="https://cdn.htmlgames.com/TetrisFun/"
    />
  );
};

export default TetrisFun;