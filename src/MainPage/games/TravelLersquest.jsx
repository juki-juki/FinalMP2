import React from 'react';
import TravelLersquestImage from "../games/gameimg/travelersquest300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const TravelLersquest = () => {
  return (
    <GamePreview
      imageUrl={TravelLersquestImage}
      gameUrl="https://cdn.htmlgames.com/TravelersQuest/"
    />
  );
};

export default TravelLersquest;