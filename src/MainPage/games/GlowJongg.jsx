import React from 'react';
import GlowJonggImage from "../games/gameimg/glowjongg300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const GlowJongg = () => {
  return (
    <GamePreview
      imageUrl={GlowJonggImage}
      gameUrl="https://cdn.htmlgames.com/GlowJongg/"
    />
  );
};

export default GlowJongg;