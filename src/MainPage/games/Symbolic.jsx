import React from 'react';
import SymbolicImage from "../games/gameimg/symbolic300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const Symbolic = () => {
  return (
    <GamePreview
      imageUrl={SymbolicImage}
      gameUrl="https://cdn.htmlgames.com/Symbolic/"
    />
  );
};

export default Symbolic;