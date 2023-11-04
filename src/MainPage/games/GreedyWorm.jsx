import React from 'react';
import GreedyWormImage from "../games/gameimg/greedyworm300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const GreedyWorm = () => {
  return (
    <GamePreview
      imageUrl={GreedyWormImage}
      gameUrl="https://cdn.htmlgames.com/GreedyWorm/"
    />
  );
};

export default GreedyWorm;