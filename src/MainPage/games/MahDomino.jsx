import React from 'react';
import MahDominoImage from "../games/gameimg/mah-domino300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const MahDomino = () => {
  return (
    <GamePreview
      imageUrl={MahDominoImage}
      gameUrl="https://cdn.htmlgames.com/Mah-Domino/"
    />
  );
};

export default MahDomino;