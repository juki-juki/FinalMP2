import React from 'react';
import PenguinWordTwistImage from "../games/gameimg/penguinwordtwist300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const PenguinWordTwist = () => {
  return (
    <GamePreview
      imageUrl={PenguinWordTwistImage}
      gameUrl="https://cdn.htmlgames.com/PenguinWordTwist/"
    />
  );
};

export default PenguinWordTwist;