import React from 'react';
import NeonBreakerImage from '../../assets/airportsniper300200.webp'; // Include the appropriate file extension
import GamePreview from './gamePreview'; // Make sure the component filename matches

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
