import React from 'react';
import SpaceshipLandingImage from "../games/gameimg/spaceshiplanding300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview";// Make sure the component filename matches

const SpaceshipLanding = () => {
  return (
    <GamePreview
      imageUrl={SpaceshipLandingImage}
      gameUrl="https://cdn.htmlgames.com/SpaceshipLanding/"
    />
  );
};

export default SpaceshipLanding;