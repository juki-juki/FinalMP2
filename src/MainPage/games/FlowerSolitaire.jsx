import React from 'react';
import FloweSolitaireImage from "../games/gameimg/flowermahjongsolitaire300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const FloweSolitaire = () => {
  return (
    <GamePreview
      imageUrl={FloweSolitaireImage}
      gameUrl="https://cdn.htmlgames.com/FlowerMahjongSolitaire/"
    />
  );
};

export default FloweSolitaire;