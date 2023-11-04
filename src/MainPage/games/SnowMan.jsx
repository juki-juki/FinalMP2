import React from 'react';
import SnowManImage from "../games/gameimg/snowman300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview";// Make sure the component filename matches

const SnowMan = () => {
  return (
    <GamePreview
      imageUrl={SnowManImage}
      gameUrl="https://cdn.htmlgames.com/SnowMan/"
    />
  );
};

export default SnowMan;