import React from 'react';
import MedievalMergeImage from "../games/gameimg/medievalmerge300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const MedievalMerge = () => {
  return (
    <GamePreview
      imageUrl={MedievalMergeImage}
      gameUrl="https://cdn.htmlgames.com/MedievalMerge/"
    />
  );
};

export default MedievalMerge;