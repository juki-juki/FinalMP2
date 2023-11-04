import React from 'react';
import DigDigImage from "../games/gameimg/digdig300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview";// Make sure the component filename matches

const DigDig = () => {
  return (
    <GamePreview
      imageUrl={DigDigImage}
      gameUrl="https://cdn.htmlgames.com/DigDig/"
    />
  );
};

export default DigDig;