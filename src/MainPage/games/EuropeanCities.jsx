import React from 'react';
import EuropeanCitiesImage from "../games/gameimg/europeancities300.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const EuropeanCities = () => {
  return (
    <GamePreview
      imageUrl={EuropeanCitiesImage}
      gameUrl="https://cdn.htmlgames.com/EuropeanCities/"
    />
  );
};

export default EuropeanCities;