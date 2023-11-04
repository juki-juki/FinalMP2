import React from 'react';
import ClearTheNumbersImage from "../games/gameimg/clearthenumbers300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const ClearTheNumbers = () => {
  return (
    <GamePreview
      imageUrl={ClearTheNumbersImage}
      gameUrl="https://cdn.htmlgames.com/ClearTheNumbers/"
    />
  );
};

export default ClearTheNumbers;