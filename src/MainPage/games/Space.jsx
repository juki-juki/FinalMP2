import React from 'react';
import SpaceImage from "../games/gameimg/space300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const Space = () => {
  return (
    <GamePreview
      imageUrl={SpaceImage}
      gameUrl="https://cdn.htmlgames.com/Space/"
    />
  );
};

export default Space;