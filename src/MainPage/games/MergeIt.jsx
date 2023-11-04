import React from 'react';
import MergeItImage from "../games/gameimg/mergeit300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const MergeIt = () => {
  return (
    <GamePreview
      imageUrl={MergeItImage}
      gameUrl="https://cdn.htmlgames.com/MergeIt/"
    />
  );
};

export default MergeIt;