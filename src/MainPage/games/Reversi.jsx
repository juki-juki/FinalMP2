import React from 'react';
import ReversiImage from "../games/gameimg/reversi300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview";// Make sure the component filename matches

const Reversi = () => {
  return (
    <GamePreview
      imageUrl={ReversiImage}
      gameUrl="https://cdn.htmlgames.com/Reversi/"
    />
  );
};

export default Reversi;