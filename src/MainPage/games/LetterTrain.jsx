import React from 'react';
import LetterTrainImage from "../games/gameimg/lettertrain300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const LetterTrain = () => {
  return (
    <GamePreview
      imageUrl={LetterTrainImage}
      gameUrl="https://cdn.htmlgames.com/LetterTrain/"
    />
  );
};

export default LetterTrain;