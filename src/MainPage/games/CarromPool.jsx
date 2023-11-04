import React from 'react';
import CarromPoolImage from "../games/gameimg/carrompool300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const CarromPool = () => {
  return (
    <GamePreview
      imageUrl={CarromPoolImage}
      gameUrl="https://cdn.htmlgames.com/CarromPool/"
    />
  );
};

export default CarromPool;