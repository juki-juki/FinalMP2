import React from 'react';
import NeonBreakerImage from "../games/gameimg/neonbreaker300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview";// Make sure the component filename matches

const NeonBreaker = () => {
  return (
    <GamePreview
      imageUrl={NeonBreakerImage}
      gameUrl="https://cdn.htmlgames.com/NeonBreaker/"
    />
  );
};

export default NeonBreaker;