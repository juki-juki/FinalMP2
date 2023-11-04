import React from 'react';
import MahjongCardSolitaireImage from "../games/gameimg/mahjongcardsolitaire300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const MahjongCardSolitaire = () => {
  return (
    <GamePreview
      imageUrl={MahjongCardSolitaireImage}
      gameUrl="https://cdn.htmlgames.com/MahjongCardSolitaire/"
    />
  );
};

export default MahjongCardSolitaire;