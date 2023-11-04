import React from 'react';
import CrossWords3Image from "../games/gameimg/crosswords300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const CrossWords3 = () => {
  return (
    <GamePreview
      imageUrl={CrossWords3Image}
      gameUrl="https://cdn.htmlgames.com/Crosswords/"
    />
  );
};

export default CrossWords3;