import React from 'react';
import GamePreview from '../MainComponent/gamePreview'; // Make sure the component filename matches
import NeonBreakerImage from '../games/gameimg/airportsniper300200.webp'; // Include the appropriate file extension

const NeonBreaker = () => {
  return (
    <GamePreview
      name="Neon Breaker"
      imageUrl={NeonBreakerImage}
      gameUrl="https://cdn.htmlgames.com/NeonBreaker/"
    />
  );
};

export default NeonBreaker;
