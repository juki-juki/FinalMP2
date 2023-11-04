import React from 'react';
import NumberFillImage from "../games/gameimg/numberfill300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const NumberFill = () => {
  return (
    <GamePreview
      imageUrl={NumberFillImage}
      gameUrl="https://cdn.htmlgames.com/NumberFill/"
    />
  );
};

export default NumberFill;