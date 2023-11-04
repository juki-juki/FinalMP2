import React from 'react';
import SpaceConImage from "../games/gameimg/spaceconnect300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const SpaceCon = () => {
  return (
    <GamePreview
      imageUrl={SpaceConImage}
      gameUrl="https://cdn.htmlgames.com/SpaceConnect/"
    />
  );
};

export default SpaceCon;