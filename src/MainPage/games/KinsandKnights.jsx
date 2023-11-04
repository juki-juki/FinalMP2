import React from 'react';
import KinsandKnightsImage from "../games/gameimg/kingsandknights300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const KinsandKnights = () => {
  return (
    <GamePreview
      imageUrl={KinsandKnightsImage}
      gameUrl="https://cdn.htmlgames.com/KingsAndKnights/"
    />
  );
};

export default KinsandKnights;