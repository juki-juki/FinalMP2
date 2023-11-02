import React from 'react';
import TrafficRacerImage from '../../assets/trafficracer2300200.webp'; // Import the image
import GamePreview from './gamePreview';

const TrafficRacer = () => {
  return (
    <GamePreview
      name="Traffic Racer"
      imageUrl={TrafficRacerImage} // Use the imported image
      gameUrl="https://cdn.htmlgames.com/TrafficRacer2/"
    />
  );
};

export default TrafficRacer;
