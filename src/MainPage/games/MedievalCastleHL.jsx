import React from 'react';
import MedievalCastleHLImage from "../games/gameimg/medievalcastlehiddenletters300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const MedievalCastleHL = () => {
  return (
    <GamePreview
      imageUrl={MedievalCastleHLImage}
      gameUrl="https://cdn.htmlgames.com/MedievalCastleHiddenLetters/"
    />
  );
};

export default MedievalCastleHL;