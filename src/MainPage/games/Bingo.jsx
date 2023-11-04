import React from 'react';
import BingoImage from "../games/gameimg/bingo300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const Bingo = () => {
  return (
    <GamePreview
      imageUrl={BingoImage}
      gameUrl="https://cdn.htmlgames.com/Bingo/"
    />
  );
};

export default Bingo;