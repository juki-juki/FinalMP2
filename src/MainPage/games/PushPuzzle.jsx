import React from 'react';
import PushPuzzleImage from "../games/gameimg/pushpuzzle300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const PushPuzzle = () => {
  return (
    <GamePreview
      imageUrl={PushPuzzleImage}
      gameUrl="https://cdn.htmlgames.com/PushPuzzle/"
    />
  );
};

export default PushPuzzle;