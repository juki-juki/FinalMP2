import React from 'react';
import TetroClassicImage from "../games/gameimg/tetroclassic300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview";// Make sure the component filename matches

const TetroClassic = () => {
  return (
    <GamePreview
      imageUrl={TetroClassicImage}
      gameUrl="https://cdn.htmlgames.com/TetroClassic/"
    />
  );
};

export default TetroClassic;