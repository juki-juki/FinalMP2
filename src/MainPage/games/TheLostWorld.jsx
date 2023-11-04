import React from 'react';
import TheLostWorldImage from "../games/gameimg/thelostworld300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const TheLostWorld = () => {
  return (
    <GamePreview
      imageUrl={TheLostWorldImage}
      gameUrl="https://cdn.htmlgames.com/TheLostWorld/"
    />
  );
};

export default TheLostWorld;