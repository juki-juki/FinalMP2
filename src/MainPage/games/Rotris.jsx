import React from 'react';
import RotrisImage from "../games/gameimg/rotris300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview";// Make sure the component filename matches

const Rotris = () => {
  return (
    <GamePreview
      imageUrl={RotrisImage}
      gameUrl="https://cdn.htmlgames.com/Rotris/"
    />
  );
};

export default Rotris;