import React from 'react';
import LinkNumbersImage from "../games/gameimg/linknumbers300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const LinkNumbers = () => {
  return (
    <GamePreview
      imageUrl={LinkNumbersImage}
      gameUrl="https://cdn.htmlgames.com/LinkNumbers/"
    />
  );
};

export default LinkNumbers;