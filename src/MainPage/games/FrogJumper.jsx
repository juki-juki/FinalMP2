import React from 'react';
import FrogJumperImage from "../games/gameimg/frogjumper300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const FrogJumper = () => {
  return (
    <GamePreview
      imageUrl={FrogJumperImage}
      gameUrl="https://cdn.htmlgames.com/FrogJumper/"
    />
  );
};

export default FrogJumper;