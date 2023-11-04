import React from 'react';
import ClassicFrogImage from "../games/gameimg/classicfrog300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const ClassicFrog = () => {
  return (
    <GamePreview
      imageUrl={ClassicFrogImage}
      gameUrl="https://cdn.htmlgames.com/ClassicFrog/"
    />
  );
};

export default ClassicFrog;