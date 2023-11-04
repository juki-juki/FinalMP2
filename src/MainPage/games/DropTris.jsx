import React from 'react';
import DropTrisImage from "../games/gameimg/droptris300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const DropTris = () => {
  return (
    <GamePreview
      imageUrl={DropTrisImage}
      gameUrl="https://cdn.htmlgames.com/DropTris/"
    />
  );
};

export default DropTris;