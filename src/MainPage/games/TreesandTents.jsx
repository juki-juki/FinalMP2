import React from 'react';
import TreesandTentsImage from "../games/gameimg/treesandtents300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const TreesandTents = () => {
  return (
    <GamePreview
      imageUrl={TreesandTentsImage}
      gameUrl="https://cdn.htmlgames.com/DailyTreesAndTents/"
    />
  );
};

export default TreesandTents;