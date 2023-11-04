import React from 'react';
import TicTacToeImage from "../games/gameimg/tictactoe300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const TicTacToe = () => {
  return (
    <GamePreview
      imageUrl={TicTacToeImage}
      gameUrl="https://cdn.htmlgames.com/TicTacToe/"
    />
  );
};

export default TicTacToe;