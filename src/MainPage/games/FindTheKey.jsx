import React from 'react';
import AirportSniperImage from '../../assets/airportsniper300200.webp'; // Include the appropriate file extension
import GamePreview from './gamePreview'; // Make sure the component filename matches

const AirportSniper = () => {
  return (
    <GamePreview
      name="Airport Sniper"
      imageUrl={AirportSniperImage}
      gameUrl="https://cdn.htmlgames.com/AirportSniper/"
    />
  );
};

export default AirportSniper;
